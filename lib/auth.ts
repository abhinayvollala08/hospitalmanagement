import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb-client";
import bcrypt from "bcryptjs";

// NOTE: MongoDBAdapter is intentionally removed here.
// It conflicts with `session: "jwt"` + Credentials provider in NextAuth v5.
// Google OAuth can be re-enabled once Google credentials are configured
// by adding the adapter back alongside the Google provider.

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const client = await clientPromise;
          // Use the DB name from the URI (gopihospitals)
          const db = client.db();

          const user = await db
            .collection("users")
            .findOne({ email: credentials.email as string });

          if (!user || !user.password) return null;

          const valid = await bcrypt.compare(
            credentials.password as string,
            user.password as string
          );
          if (!valid) return null;

          return {
            id: user._id.toString(),
            email: user.email as string,
            name: user.name as string,
            image: (user.image as string) ?? null,
            role: (user.role as string) ?? "PATIENT",
          };
        } catch (err) {
          console.error("[auth] authorize error:", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist role and id into the JWT on first sign-in
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "PATIENT";
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      // Make role and id available in session.user
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = (token.picture as string) ?? null;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
});
