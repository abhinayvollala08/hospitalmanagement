"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Calendar, Stethoscope, HelpCircle, Phone, ArrowLeft } from "lucide-react";
import { CLINIC_INFO } from "@/constants/clinic-info";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-600 flex items-center justify-center p-4 pt-40 pb-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-xl text-center text-white space-y-8"
      >
        {/* Huge 404 display */}
        <div className="relative inline-block">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="text-8xl md:text-9xl font-black tracking-tight text-white/20 select-none"
          >
            404
          </motion.h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-bold bg-[#0f2a3f]/80 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/10 shadow-lg text-teal-300">
              Page Not Found
            </p>
          </div>
        </div>

        {/* Informative text */}
        <div className="space-y-3 px-4">
          <h2 className="text-xl md:text-2xl font-bold leading-tight">
            Oops! The link you followed seems to be broken.
          </h2>
          <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, deleted, or is temporarily unavailable. Let's get you back on track.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
          <Link
            href="/"
            className="btn-teal text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            <Home size={16} /> Go Back Home
          </Link>
          <Link
            href="/appointment"
            className="border border-white/20 hover:bg-white/15 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
          >
            <Calendar size={16} /> Book Appointment
          </Link>
        </div>

        {/* Quick Links Menu */}
        <div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-md max-w-md mx-auto shadow-lg">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-4">
            Quick Navigation Links
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/treatments"
              className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-semibold p-2.5 rounded-xl hover:bg-white/5 transition-all text-left"
            >
              <Stethoscope size={14} className="text-teal-300" /> Our Treatments
            </Link>
            <Link
              href="/resources"
              className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-semibold p-2.5 rounded-xl hover:bg-white/5 transition-all text-left"
            >
              <HelpCircle size={14} className="text-teal-300" /> Patient Resources
            </Link>
            <Link
              href="/faq"
              className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-semibold p-2.5 rounded-xl hover:bg-white/5 transition-all text-left"
            >
              <HelpCircle size={14} className="text-teal-300" /> Read FAQs
            </Link>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-semibold p-2.5 rounded-xl hover:bg-white/5 transition-all text-left"
            >
              <Phone size={14} className="text-teal-300" /> Call Clinic Desk
            </a>
          </div>
        </div>

        {/* Simple back link */}
        <div className="pt-4">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={12} /> Go back to previous page
          </button>
        </div>
      </motion.div>
    </div>
  );
}
