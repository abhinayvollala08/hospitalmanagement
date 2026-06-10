import type { Metadata } from "next";
import Link from "next/link";
import {
  KIDNEY_CARE_LINKS,
  UROLOGY_ANDROLOGY_LINKS,
  KIDNEY_STONE_LINKS,
  UTI_AND_OTHER_LINKS,
  PEDIATRIC_LINKS,
} from "@/constants/navigation";
import { ChevronRight, ArrowRight, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore our comprehensive treatments — kidney care, urology, andrology, kidney stone removal, and pediatric urology at Dr. Gopikanth Kidney & Andrology Center, Hyderabad.",
};

const CATEGORIES = [
  {
    id: "kidney-care",
    title: "Kidney Care",
    subtitle: "Nephrology",
    color: "from-[#187b9b] to-blue-600",
    badgeColor: "bg-blue-50 text-[#187b9b] border-blue-100",
    hoverBorder: "hover:border-[#187b9b]",
    hoverText: "hover:text-[#187b9b]",
    iconBg: "bg-blue-50",
    iconText: "text-[#187b9b]",
    links: KIDNEY_CARE_LINKS,
    icon: "🫘",
    desc: "Comprehensive management of kidney diseases from early CKD to end-stage renal disease.",
  },
  {
    id: "andrology",
    title: "Urology & Andrology",
    subtitle: "Men's Health",
    color: "from-teal-600 to-teal-400",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-100",
    hoverBorder: "hover:border-teal-500",
    hoverText: "hover:text-teal-700",
    iconBg: "bg-teal-50",
    iconText: "text-teal-700",
    links: UROLOGY_ANDROLOGY_LINKS,
    icon: "♂",
    desc: "Evidence-based diagnosis and treatment of male reproductive and sexual health conditions.",
  },
  {
    id: "kidney-stone",
    title: "Kidney Stone Center",
    subtitle: "Stone Management",
    color: "from-amber-500 to-orange-500",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
    hoverBorder: "hover:border-amber-500",
    hoverText: "hover:text-amber-700",
    iconBg: "bg-amber-50",
    iconText: "text-amber-700",
    links: KIDNEY_STONE_LINKS,
    icon: "⚡",
    desc: "Advanced laser-based stone removal and personalised dietary prevention plans.",
  },
  {
    id: "urology",
    title: "Urology Conditions",
    subtitle: "General Urology",
    color: "from-purple-600 to-purple-400",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
    hoverBorder: "hover:border-purple-500",
    hoverText: "hover:text-purple-700",
    iconBg: "bg-purple-50",
    iconText: "text-purple-700",
    links: UTI_AND_OTHER_LINKS,
    icon: "🩺",
    desc: "Expert care for urinary tract infections, incontinence, and urological cancers.",
  },
  {
    id: "pediatrics",
    title: "Pediatric Urology",
    subtitle: "Children's Care",
    color: "from-green-600 to-emerald-400",
    badgeColor: "bg-green-50 text-green-700 border-green-100",
    hoverBorder: "hover:border-green-500",
    hoverText: "hover:text-green-700",
    iconBg: "bg-green-50",
    iconText: "text-green-700",
    links: PEDIATRIC_LINKS,
    icon: "👶",
    desc: "Specialised urological and neonatal care for infants, children, and adolescents.",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-600 pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            World-Class Healthcare in Hyderabad
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Our Treatments &amp;{" "}
            <span className="text-teal-300">Specialisations</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            From chronic kidney disease to male infertility — we offer evidence-based, compassionate care across nephrology, urology, andrology, and pediatrics.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/appointment"
              className="flex items-center gap-2 bg-white text-[#187b9b] font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors shadow-lg"
            >
              <Calendar size={17} />
              Book Appointment
            </Link>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>
          {/* Jump links */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <div className="bg-gray-50 py-20 space-y-20">
        {CATEGORIES.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            className="section-container scroll-mt-24"
          >
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-md`}
                >
                  {cat.icon}
                </div>
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 ${cat.badgeColor}`}
                  >
                    {cat.subtitle}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-1">
                    {cat.title}
                  </h2>
                </div>
              </div>
              <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>

            {/* Treatment cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all duration-200 ${cat.hoverBorder} hover:-translate-y-0.5`}
                >
                  <div className={`w-9 h-9 rounded-lg ${cat.iconBg} flex items-center justify-center mb-3`}>
                    <ChevronRight size={16} className={cat.iconText} />
                  </div>
                  <h3
                    className={`text-sm font-semibold text-gray-800 mb-1 leading-snug transition-colors ${cat.hoverText}`}
                  >
                    {link.label}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {link.desc}
                  </p>
                  <span
                    className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${cat.iconText}`}
                  >
                    Learn more <ArrowRight size={11} />
                  </span>
                </Link>
              ))}
            </div>

            {idx < CATEGORIES.length - 1 && (
              <div className="border-b border-gray-200 mt-20" />
            )}
          </section>
        ))}
      </div>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#0f2a3f] to-[#187b9b] py-16">
        <div className="section-container text-center text-white">
          <h2 className="text-3xl font-bold mb-3">
            Not sure which treatment you need?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our specialists will guide you to the right diagnosis and personalised treatment plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/symptom-checker"
              className="bg-white text-[#187b9b] font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
            >
              Try Symptom Checker
            </Link>
            <Link
              href="/appointment"
              className="border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
