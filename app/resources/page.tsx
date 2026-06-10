import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  HelpCircle,
  Calculator,
  ClipboardList,
  Stethoscope,
  Download,
  ArrowRight,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Download diet charts, kidney care guides, and use our free health tools including the kidney risk calculator, fertility assessment, and symptom checker.",
};

const RESOURCES = [
  {
    icon: FileText,
    title: "Diet & Nutrition Guides",
    desc: "Personalised dietary recommendations for kidney stone prevention, CKD management, and dialysis patients.",
    items: [
      "Kidney Stone Diet Plan (PDF)",
      "CKD Stage 3–5 Diet Chart",
      "Low-Potassium Recipe Book",
      "Dialysis Patient Nutrition Guide",
    ],
    color: "from-[#187b9b] to-blue-500",
    bg: "bg-blue-50",
    text: "text-[#187b9b]",
    href: "#diet-guides",
  },
  {
    icon: Download,
    title: "Patient Handouts",
    desc: "Easy-to-read pamphlets and post-procedure instructions for patients and caregivers.",
    items: [
      "Understanding Your Kidney Function Tests",
      "After Your Kidney Stone Procedure",
      "Managing CKD at Home",
      "Male Infertility — What to Expect",
    ],
    color: "from-teal-600 to-teal-400",
    bg: "bg-teal-50",
    text: "text-teal-700",
    href: "#handouts",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    desc: "Answers to the most common questions about kidney disease, andrology, and our clinic.",
    items: [
      "Can CKD be reversed?",
      "How do I pass a kidney stone faster?",
      "What causes male infertility?",
      "When should I see a nephrologist?",
    ],
    color: "from-purple-600 to-purple-400",
    bg: "bg-purple-50",
    text: "text-purple-700",
    href: "/faq",
  },
];

const TOOLS = [
  {
    icon: Calculator,
    title: "Kidney Risk Calculator",
    desc: "Answer 8 quick questions to assess your risk of developing chronic kidney disease.",
    href: "/tools/kidney-risk",
    cta: "Calculate Risk",
    color: "bg-[#187b9b]",
  },
  {
    icon: ClipboardList,
    title: "Male Fertility Assessment",
    desc: "A self-assessment quiz to identify possible factors affecting male fertility.",
    href: "/tools/fertility",
    cta: "Take Assessment",
    color: "bg-teal-600",
  },
  {
    icon: Stethoscope,
    title: "Symptom Checker",
    desc: "Describe your symptoms and find out which specialist at our centre can help you.",
    href: "/tools/symptom-checker",
    cta: "Check Symptoms",
    color: "bg-purple-600",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-500 pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="section-container relative text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <FileText size={13} />
            Free Patient Resources
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Resources &amp;{" "}
            <span className="text-teal-300">Health Tools</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Download guides, diet charts, and use our free interactive tools to understand and manage your health better.
          </p>
        </div>
      </section>

      {/* ── HEALTH TOOLS ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#187b9b] uppercase tracking-widest mb-2">
              Free Interactive Tools
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Check Your Health Now
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOOLS.map((tool) => (
              <div
                key={tool.title}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-7 flex flex-col hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <div
                  className={`w-12 h-12 ${tool.color} rounded-2xl flex items-center justify-center mb-5 shadow-md`}
                >
                  <tool.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                  {tool.desc}
                </p>
                <Link
                  href={tool.href}
                  className={`flex items-center justify-center gap-2 ${tool.color} text-white text-sm font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity`}
                >
                  {tool.cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOADABLE RESOURCES ───────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#187b9b] uppercase tracking-widest mb-2">
              Educational Materials
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Guides &amp; Downloads
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCES.map((res) => (
              <div
                key={res.title}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`bg-gradient-to-r ${res.color} p-6 text-white`}
                >
                  <res.icon size={28} className="mb-3 opacity-90" />
                  <h3 className="text-lg font-bold">{res.title}</h3>
                  <p className="text-sm text-white/70 mt-1 leading-relaxed">
                    {res.desc}
                  </p>
                </div>
                <div className="p-5">
                  <ul className="space-y-2.5">
                    {res.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${res.bg}`}
                          style={{ backgroundColor: "currentColor" }}
                        />
                        <span className="text-sm text-gray-600">{item}</span>
                        <Download
                          size={13}
                          className={`ml-auto shrink-0 ${res.text} opacity-60`}
                        />
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={res.href}
                    className={`mt-5 w-full flex items-center justify-center gap-1.5 text-sm font-semibold py-2.5 rounded-xl border ${res.bg} ${res.text} border-current/20 hover:opacity-80 transition-opacity`}
                  >
                    View All <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Have a specific question?
          </h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Our team is happy to help. Book a consultation or browse our FAQ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faq" className="btn-secondary text-sm py-2.5 px-5">
              Browse FAQs
            </Link>
            <Link href="/appointment" className="btn-primary text-sm py-2.5 px-5">
              <Calendar size={15} />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
