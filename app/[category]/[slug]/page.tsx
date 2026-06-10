import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  KIDNEY_CARE_LINKS,
  UROLOGY_ANDROLOGY_LINKS,
  KIDNEY_STONE_LINKS,
  UTI_AND_OTHER_LINKS,
  PEDIATRIC_LINKS,
} from "@/constants/navigation";
import {
  ArrowLeft,
  Calendar,
  Phone,
  ShieldCheck,
  Stethoscope,
  Clock,
  ArrowRight,
} from "lucide-react";
import { CLINIC_INFO } from "@/constants/clinic-info";

const ALL_LINKS = [
  ...KIDNEY_CARE_LINKS,
  ...UROLOGY_ANDROLOGY_LINKS,
  ...KIDNEY_STONE_LINKS,
  ...UTI_AND_OTHER_LINKS,
  ...PEDIATRIC_LINKS,
];

// Helper to resolve category title
const CATEGORY_MAP: Record<string, string> = {
  "kidney-care": "Kidney Care (Nephrology)",
  andrology: "Urology & Andrology",
  "kidney-stone-center": "Kidney Stone Center",
  urology: "General Urology",
};

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const href = `/${category}/${slug}`;
  const treatment = ALL_LINKS.find((item) => item.href === href);

  if (!treatment) {
    return {
      title: "Treatment Not Found",
    };
  }

  return {
    title: `${treatment.label}`,
    description: treatment.desc,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { category, slug } = await params;

  // Validate category
  if (!CATEGORY_MAP[category]) {
    notFound();
  }

  const href = `/${category}/${slug}`;
  const treatment = ALL_LINKS.find((item) => item.href === href);

  if (!treatment) {
    notFound();
  }

  // Generate some realistic content for the specific treatment
  const overviewText = `We offer advanced diagnostic and treatment protocols for ${treatment.label}. Our center is equipped with state-of-the-art facilities to ensure early detection, precise evaluation, and effective management of this condition, tailored to each patient's unique health profile.`;

  const symptoms = [
    "Persistent discomfort or localized pain",
    "Changes in normal urinary patterns or frequency",
    "Fatigue, weakness, or general malaise",
    "Systemic symptoms related to underlying physiological stress",
  ];

  const diagnosisSteps = [
    {
      title: "Clinical Consultation",
      desc: "Detailed medical history analysis and symptom mapping with Dr. Gopikanth.",
    },
    {
      title: "Laboratory Testing",
      desc: "Advanced blood and urine assays to evaluate kidney function and cellular markers.",
    },
    {
      title: "Imaging & Diagnostics",
      desc: "Ultrasound, CT scanning, or specialized uro-dynamic studies to visualize internal structures.",
    },
  ];

  const treatmentOptions = [
    {
      title: "Medical Management",
      desc: "Targeted pharmacological therapies to manage root causes and control symptoms.",
    },
    {
      title: "Minimally Invasive Procedures",
      desc: "Laser therapy, endoscopic procedures, or keyhole surgeries when structural interventions are required.",
    },
    {
      title: "Lifestyle & Dietary Guidance",
      desc: "Personalised nutrition plans and preventative lifestyle strategies to optimize long-term health.",
    },
  ];

  // Get other treatments in the same category
  const related = ALL_LINKS.filter(
    (item) => item.href.startsWith(`/${category}/`) && item.href !== href
  ).slice(0, 4);

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
              {CATEGORY_MAP[category]}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              {treatment.label}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {treatment.desc}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-teal-300" /> Evidence-Based Care
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="flex items-center gap-1.5">
                <Stethoscope size={16} className="text-teal-300" /> Specialist Consultation
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
                  Overview
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {overviewText}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Proper management requires careful diagnostic assessment and a structured intervention plan. At Dr. Gopikanth Kidney & Andrology Center, our team works closely with you to understand the underlying causes and target symptoms effectively, aiming for optimal healing and preservation of function.
                </p>
              </div>

              {/* Card 2: Symptoms */}
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#187b9b] rounded-full inline-block" />
                  Key Symptoms &amp; Warning Signs
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Symptoms can vary depending on the severity and specific subtype of the condition. Seeking medical advice is recommended if you experience:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                      <span className="text-sm text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Diagnosis & Treatment */}
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#187b9b] rounded-full inline-block" />
                  Diagnosis &amp; Care Pathway
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-3 uppercase tracking-wider text-xs">
                      How we diagnose:
                    </h3>
                    <div className="space-y-4">
                      {diagnosisSteps.map((step, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 text-[#187b9b] font-bold text-sm flex items-center justify-center shrink-0">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                            <p className="text-xs text-gray-500">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-base font-bold text-gray-800 mb-3 uppercase tracking-wider text-xs">
                      Our Treatment Options:
                    </h3>
                    <div className="space-y-4">
                      {treatmentOptions.map((option, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-bold text-sm flex items-center justify-center shrink-0">
                            ✓
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{option.title}</h4>
                            <p className="text-xs text-gray-500">{option.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar column */}
            <div className="space-y-6">
              {/* Appointment Card */}
              <div className="bg-[#0f2a3f] rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-teal-300" /> Need Consultation?
                </h3>
                <p className="text-white/70 text-xs mb-6 leading-relaxed">
                  Book an in-clinic appointment with Dr. Gopikanth for a detailed evaluation of your symptoms.
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

              {/* Related treatments list */}
              {related.length > 0 && (
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-bold text-gray-950 text-base mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-teal-500 rounded-full inline-block" />
                    Related Treatments
                  </h3>
                  <div className="space-y-3">
                    {related.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex justify-between items-center p-2.5 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all"
                      >
                        <span className="text-xs font-medium text-gray-700 group-hover:text-[#187b9b] transition-colors leading-snug max-w-[85%]">
                          {link.label}
                        </span>
                        <ArrowRight
                          size={12}
                          className="text-gray-400 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
