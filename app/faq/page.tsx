import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Calendar, Phone, Mail } from "lucide-react";
import { CLINIC_INFO } from "@/constants/clinic-info";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs)",
  description:
    "Find answers to common questions about kidney care, dialysis, urology conditions, male infertility, appointments, and clinic policies.",
};

const FAQ_SECTIONS = [
  {
    category: "General & Appointments",
    items: [
      {
        q: "How do I book an appointment with Dr. Gopikanth?",
        a: "You can book an appointment directly through our online Booking portal, or by calling our clinical helpline at +91 98765 43210 during regular hours.",
      },
      {
        q: "What are the clinic timings?",
        a: "Our clinic is open Monday through Saturday, from 10:00 AM to 8:00 PM. We are closed on Sundays except for emergencies.",
      },
      {
        q: "Do you offer video/tele-consultations?",
        a: "Yes, once you register an account on our platform, you can book video consultations directly with Dr. Gopikanth from the comfort of your home.",
      },
    ],
  },
  {
    category: "Kidney Care & Nephrology",
    items: [
      {
        q: "What is Chronic Kidney Disease (CKD)?",
        a: "CKD is a gradual loss of kidney function over time. Early stages often have no symptoms, making checkups vital for patients with diabetes or high blood pressure.",
      },
      {
        q: "What is GFR and why is it important?",
        a: "Glomerular Filtration Rate (GFR) measures how well your kidneys filter waste. A GFR below 60 for three months or more indicates chronic kidney disease.",
      },
    ],
  },
  {
    category: "Urology & Kidney Stones",
    items: [
      {
        q: "What is the best way to prevent kidney stones?",
        a: "Staying hydrated is the single most effective step. Drinking enough water to produce 2 to 2.5 liters of urine daily helps flush out stone-forming minerals.",
      },
      {
        q: "What minimally invasive options do you offer for stone removal?",
        a: "We offer advanced procedures including RIRS (Retrograde Intrarenal Surgery) and PCNL (Percutaneous Nephrolithotomy), using precise laser systems.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-500 pt-40 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="section-container relative text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <HelpCircle size={14} className="text-teal-200" /> FAQ Center
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Frequently Asked <span className="text-teal-300">Questions</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Find quick answers to common questions about appointments, treatments, kidney health, and men&apos;s wellness.
          </p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* FAQ List */}
            <div className="lg:col-span-2 space-y-10">
              {FAQ_SECTIONS.map((section) => (
                <div key={section.category} className="space-y-4">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-5 bg-[#187b9b] rounded-full" />
                    {section.category}
                  </h2>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <details
                        key={idx}
                        className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm open:shadow-md transition-all duration-200 cursor-pointer [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex items-center justify-between gap-3 list-none font-semibold text-gray-800 text-sm leading-snug">
                          <span>{item.q}</span>
                          <span className="text-gray-400 group-open:rotate-180 transition-transform duration-200 shrink-0">
                            ▼
                          </span>
                        </summary>
                        <div className="mt-4 text-xs text-gray-600 leading-relaxed border-t border-gray-50 pt-3 cursor-default">
                          {item.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar help */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-base mb-4">Still have questions?</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  If you can&apos;t find the answer you are looking for, please connect with our team directly.
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="flex items-center gap-3 p-3 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#187b9b] flex items-center justify-center shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-semibold leading-none">CALL US</p>
                      <p className="text-xs font-bold text-gray-800 mt-1">{CLINIC_INFO.phoneDisplay}</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@drgopikanth.com"
                    className="flex items-center gap-3 p-3 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-semibold leading-none">EMAIL US</p>
                      <p className="text-xs font-bold text-gray-800 mt-1">info@drgopikanth.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Consultation card */}
              <div className="bg-[#0f2a3f] rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-teal-300" /> Need Care?
                </h3>
                <p className="text-white/70 text-xs mb-6 leading-relaxed">
                  Book an in-clinic consultation today for expert diagnosis and treatments.
                </p>
                <Link
                  href="/appointment"
                  className="w-full flex items-center justify-center gap-2 bg-[#187b9b] hover:bg-teal-50 hover:text-[#187b9b] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm"
                >
                  Book Appointment
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
