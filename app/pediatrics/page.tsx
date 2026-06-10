import type { Metadata } from "next";
import Link from "next/link";
import { PEDIATRIC_LINKS } from "@/constants/navigation";
import {
  ArrowLeft,
  Calendar,
  Phone,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { CLINIC_INFO } from "@/constants/clinic-info";

export const metadata: Metadata = {
  title: "Pediatric Urology & Children's Care",
  description:
    "Specialised urological and neonatal care for infants, children, and adolescents at Dr. Gopikanth Kidney & Andrology Center, Hyderabad.",
};

export default function PediatricsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-600 pt-40 pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="section-container relative">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> All Treatments
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 border border-white/20 text-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Pediatric Clinic
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Pediatric Urology &amp; Newborn Care
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Specialized diagnosis and treatment of congenital and acquired urological conditions in infants, children, and adolescents.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-teal-300" /> Child-Friendly Care
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="flex items-center gap-1.5">
                <Stethoscope size={16} className="text-teal-300" /> Pediatric Urology Specialists
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Card 1: Overview */}
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#187b9b] rounded-full inline-block" />
                  About Pediatric Urology
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Children's urological issues are vastly different from adult conditions. Congenital conditions like undescended testicles, hypospadias, vesicoureteral reflux (VUR), and recurrent bedwetting require specialized diagnostics and child-centric medical or surgical interventions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our clinic provides a comforting and friendly environment to reduce anxiety in children and parents alike. Dr. Gopikanth and our pediatric specialists work to ensure clear explanations, gentle evaluations, and highly customized treatment paths.
                </p>
              </div>

              {/* Card 2: Services Grid */}
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#187b9b] rounded-full inline-block" />
                  Our Children&apos;s Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PEDIATRIC_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group p-5 bg-gray-50/50 border border-gray-100 rounded-2xl hover:border-teal-500 hover:bg-white transition-all shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                        <ChevronRight size={16} className="text-teal-600 animate-pulse" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-teal-600 transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed mb-3">
                        {link.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight size={11} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar column */}
            <div className="space-y-6">
              {/* Appointment Card */}
              <div className="bg-[#0f2a3f] rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-teal-300" /> Book Pediatric Visit
                </h3>
                <p className="text-white/70 text-xs mb-6 leading-relaxed">
                  Book an in-clinic consultation for your child. Our team ensures a gentle, anxiety-free experience.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/appointment"
                    className="w-full flex items-center justify-center gap-2 bg-[#187b9b] hover:bg-teal-50 hover:text-[#187b9b] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="w-full flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                  >
                    <Phone size={14} /> Call Clinic
                  </a>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 flex justify-between text-xs text-white/50">
                  <span>Available Mon - Sat</span>
                  <span>{CLINIC_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
