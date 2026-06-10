"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Phone, ChevronRight, Shield, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="hero-gradient relative overflow-hidden min-h-[88vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background blobs */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#2dd4bf] blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-white blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6"
            >
              <Shield size={14} className="text-[#2dd4bf]" aria-hidden="true" />
              <span className="text-white text-sm font-medium">
                Trusted by 5,000+ Patients
              </span>
              <div className="flex items-center gap-0.5 ml-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={11}
                    className="text-amber-400 fill-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-5"
            >
              Expert Care for{" "}
              <span className="text-[#2dd4bf]">Kidney</span>{" "}
              &amp;{" "}
              <span className="text-[#2dd4bf]">Men&apos;s Health</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Dr. Gopikanth brings 15+ years of specialized expertise in
              nephrology and andrology — providing compassionate, evidence-based
              care for complex kidney and men&apos;s health conditions.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/contact"
                id="hero-primary-cta"
                className="btn-teal text-base py-3.5 px-7"
              >
                <CalendarCheck size={18} aria-hidden="true" />
                Book Appointment
              </Link>
              <a
                href="tel:+919876543210"
                id="hero-call-cta"
                className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[#1e3a8a] text-base py-3.5 px-7"
              >
                <Phone size={18} aria-hidden="true" />
                Call: +91 98765 43210
              </a>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "✓ Same-Day Appointments",
                "✓ Emergency Services 24/7",
                "✓ Affordable Care",
              ].map((feature) => (
                <span
                  key={feature}
                  className="text-blue-200 text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Doctor photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/doctor-hero.png"
                alt="Dr. Gopikanth — Nephrologist & Andrologist in Hyderabad"
                width={560}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent" />
            </div>

            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#e2e8f0]"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] flex items-center justify-center">
                <CalendarCheck size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[#1e293b] font-semibold text-sm">
                  Next Available
                </p>
                <p className="text-[#0d9488] text-xs font-bold">Today — Book Now</p>
              </div>
            </motion.div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-[#e2e8f0]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="flex -space-x-1">
                  {["RK", "SR", "VP"].map((init) => (
                    <div
                      key={init}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-white text-[8px] font-bold">{init}</span>
                    </div>
                  ))}
                </div>
                <ChevronRight size={12} className="text-[#94a3b8]" />
              </div>
              <p className="text-[#1e293b] font-bold text-sm">5,000+</p>
              <p className="text-[#94a3b8] text-xs">Happy Patients</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
