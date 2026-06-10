/**
 * Seed script — creates one test user per role in MongoDB.
 * Run once with: node scripts/seed-users.mjs
 *
 * Test credentials after seeding:
 *   patient@test.com   / Patient@123   → /patient/dashboard
 *   doctor@test.com    / Doctor@123    → /doctor/dashboard
 *   admin@test.com     / Admin@123     → /admin/dashboard
 *   editor@test.com    / Editor@123    → /editor/dashboard
 */

import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Load .env.local manually
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "../.env.local");
try {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const index = trimmed.indexOf("=");
      if (index !== -1) {
        const key = trimmed.substring(0, index).trim();
        let value = trimmed.substring(index + 1).trim();
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.substring(1, value.length - 1);
        }
        process.env[key] = value;
      }
    }
  }
} catch (e) {
  console.warn("⚠️ Could not read .env.local file", e);
}

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not set in .env.local");
  process.exit(1);
}

const TEST_USERS = [
  {
    name: "Test Patient",
    email: "patient@test.com",
    password: "Patient@123",
    role: "PATIENT",
  },
  {
    name: "Dr. Test Doctor",
    email: "doctor@test.com",
    password: "Doctor@123",
    role: "DOCTOR",
  },
  {
    name: "Test Admin",
    email: "admin@test.com",
    password: "Admin@123",
    role: "ADMIN",
  },
  {
    name: "Test Editor",
    email: "editor@test.com",
    password: "Editor@123",
    role: "EDITOR",
  },
];

async function seed() {
  const client = new MongoClient(MONGODB_URI, { family: 4 });

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB\n");

    const db = client.db(); // Uses DB name from URI
    const users = db.collection("users");

    for (const user of TEST_USERS) {
      const existing = await users.findOne({ email: user.email });

      if (existing) {
        // Update role and password in case they changed
        const hashed = await bcrypt.hash(user.password, 10);
        await users.updateOne(
          { email: user.email },
          { $set: { role: user.role, password: hashed, name: user.name } }
        );
        console.log(`🔄 Updated  [${user.role.padEnd(7)}] ${user.email}`);
      } else {
        const hashed = await bcrypt.hash(user.password, 10);
        await users.insertOne({
          name: user.name,
          email: user.email,
          password: hashed,
          role: user.role,
          emailVerified: null,
          image: null,
          createdAt: new Date(),
        });
        console.log(`➕ Created  [${user.role.padEnd(7)}] ${user.email}`);
      }
    }

    console.log("\n✅ Seed complete! Test credentials:\n");
    console.log("  Role      Email                 Password");
    console.log("  ────────  ──────────────────── ──────────");
    for (const u of TEST_USERS) {
      console.log(
        `  ${u.role.padEnd(8)}  ${u.email.padEnd(20)} ${u.password}`
      );
    }
    console.log("\n  → Visit http://localhost:3000/login to test");
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
