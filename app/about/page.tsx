import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Shield,
  Users,
  Heart,
  CheckCircle,
  CalendarCheck,
  Stethoscope,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About Dr. Gopikanth — Nephrologist & Andrologist | Hyderabad",
  description:
    "Learn about Dr. Gopikanth's 15+ years of expertise in nephrology and andrology. View credentials, education, specializations, and the mission behind the clinic.",
};

const education = [
  {
    year: "2006",
    degree: "MBBS",
    institution: "Osmania Medical College, Hyderabad",
    icon: GraduationCap,
  },
  {
    year: "2010",
    degree: "MD (Internal Medicine)",
    institution: "Gandhi Medical College, Secunderabad",
    icon: GraduationCap,
  },
  {
    year: "2013",
    degree: "DM (Nephrology)",
    institution: "Nizam's Institute of Medical Sciences (NIMS), Hyderabad",
    icon: Award,
  },
  {
    year: "2014",
    degree: "Fellowship in Andrology",
    institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    icon: Stethoscope,
  },
];

const specializations = [
  "Chronic Kidney Disease (CKD) Management",
  "Kidney Stone Disease (Urolithiasis)",
  "Haemodialysis & Peritoneal Dialysis",
  "Glomerulonephritis & Nephrotic Syndrome",
  "Kidney Transplant Workup & Follow-up",
  "Male Infertility & Semen Analysis",
  "Erectile Dysfunction & Sexual Health",
  "Benign Prostatic Hyperplasia (BPH)",
  "Hypogonadism & Testosterone Therapy",
  "Urinary Tract Infections (UTI)",
];

const memberships = [
  "Indian Society of Nephrology (ISN)",
  "Indian Medical Association (IMA)",
  "Society of Andrology — India Chapter",
  "Telangana Medical Council",
  "American Society of Nephrology (International Member)",
];

const awards = [
  { year: "2022", title: "Best Nephrologist — Hyderabad Medical Excellence Awards" },
  { year: "2020", title: "Excellence in Patient Care — Telangana Health Summit" },
  { year: "2018", title: "Research Award — Indian Society of Nephrology Annual Conference" },
  { year: "2016", title: "Young Clinician Award — South India Urology Congress" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="hero-gradient pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center">
          <span className="badge badge-teal mb-4 inline-flex">
            About the Doctor
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet <span className="text-[#2dd4bf]">Dr. Gopikanth</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A trusted specialist in kidney care and men&apos;s health with over 15
            years of compassionate, evidence-based practice.
          </p>
        </div>
      </section>

      {/* Doctor profile */}
      <section className="section-padding bg-white" aria-labelledby="bio-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Photo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e2e8f0]">
                <Image
                  src="/doctor-hero.png"
                  alt="Dr. Gopikanth — Specialist in Kidney & Andrology Care"
                  width={600}
                  height={550}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Quick credential cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: Users, label: "Patients", value: "5,000+" },
                  { icon: Award, label: "Experience", value: "15+ Years" },
                  { icon: Shield, label: "Certified", value: "Board MD/DM" },
                  { icon: Heart, label: "Procedures", value: "2,000+" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="card-medical p-4 text-center">
                    <div className="w-9 h-9 rounded-lg bg-[#eff6ff] flex items-center justify-center mx-auto mb-2">
                      <Icon size={16} className="text-[#1e3a8a]" />
                    </div>
                    <p className="font-bold text-[#1e3a8a] text-lg">{value}</p>
                    <p className="text-[#94a3b8] text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Biography */}
            <div>
              <h2 id="bio-heading" className="text-3xl font-bold text-[#1e293b] mb-2">
                Professional Biography
              </h2>
              <div className="section-divider !mx-0 mb-5" />
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  Dr. Gopikanth is a highly respected Nephrologist and Andrologist
                  practicing in Hyderabad, Telangana. With a career spanning over
                  15 years, he has built a reputation for combining clinical
                  excellence with genuine compassion for his patients.
                </p>
                <p>
                  After completing his DM in Nephrology from NIMS Hyderabad —
                  one of South India&apos;s premier medical institutes — Dr. Gopikanth
                  pursued a specialized fellowship in Andrology at AIIMS New Delhi,
                  making him one of the few dual-trained specialists in Telangana
                  capable of addressing both kidney diseases and men&apos;s reproductive
                  health under one roof.
                </p>
                <p>
                  Throughout his career, Dr. Gopikanth has treated over 5,000
                  patients suffering from conditions ranging from kidney stones and
                  chronic kidney disease (CKD) to male infertility, erectile
                  dysfunction, and prostate disorders. His approach is always
                  evidence-based, individualized, and delivered with empathy.
                </p>
                <p>
                  He is an active member of the Indian Society of Nephrology and
                  regularly participates in national and international medical
                  conferences, keeping his practice at the forefront of medical
                  innovation.
                </p>
              </div>

              {/* Mission statement */}
              <div className="mt-8 p-5 bg-[#eff6ff] rounded-xl border border-[#bfdbfe]">
                <h3 className="text-[#1e3a8a] font-semibold mb-2 flex items-center gap-2">
                  <Heart size={16} className="text-[#1e3a8a]" />
                  Our Mission
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed italic">
                  &ldquo;To provide every patient with the highest standard of urological
                  and andrological care, delivered with empathy, transparency, and
                  respect — because every patient deserves both expertise and
                  compassion.&rdquo;
                </p>
                <p className="text-[#1e3a8a] font-semibold text-sm mt-2">
                  — Dr. Gopikanth
                </p>
              </div>

              <div className="mt-6">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  <CalendarCheck size={16} />
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding section-gradient" aria-labelledby="education-heading">
        <div className="section-container">
          <SectionHeader
            badge="Academic Excellence"
            title="Education & "
            highlight="Training"
            subtitle="A distinguished academic journey from premier Indian medical institutions."
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#e2e8f0] md:left-1/2 md:-translate-x-0.5" aria-hidden="true" />

            {education.map((item, i) => (
              <div
                key={item.degree}
                className={`relative flex items-start gap-5 mb-8 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1e3a8a] border-2 border-white shadow-md z-10 mt-4" aria-hidden="true" />

                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-[calc(50%+2rem)]"}`}>
                  <div className="card-medical p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon size={16} className="text-[#1e3a8a] flex-shrink-0" />
                      <span className="badge badge-primary text-xs">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-[#1e293b] text-base">{item.degree}</h3>
                    <p className="text-[#475569] text-sm mt-1">{item.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-padding bg-white" aria-labelledby="specializations-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Specializations */}
            <div>
              <h2 id="specializations-heading" className="text-2xl font-bold text-[#1e293b] mb-2">
                Areas of Specialization
              </h2>
              <div className="section-divider !mx-0 mb-6" />
              <ul className="grid grid-cols-1 gap-3">
                {specializations.map((spec) => (
                  <li key={spec} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#0d9488] mt-0.5 flex-shrink-0" />
                    <span className="text-[#475569] text-sm">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Awards */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#1e293b] mb-2">
                  Awards &amp; Recognition
                </h2>
                <div className="section-divider !mx-0 mb-6" />
                <div className="space-y-3">
                  {awards.map((award) => (
                    <div key={award.title} className="flex items-start gap-4 p-4 rounded-xl bg-[#fffbeb] border border-amber-200">
                      <div className="flex-shrink-0">
                        <Award size={18} className="text-amber-500 mt-0.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                          {award.year}
                        </span>
                        <p className="text-[#1e293b] text-sm font-medium mt-0.5">
                          {award.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e293b] mb-2">
                  Professional Memberships
                </h2>
                <div className="section-divider !mx-0 mb-6" />
                <ul className="space-y-2.5">
                  {memberships.map((m) => (
                    <li key={m} className="flex items-center gap-3">
                      <Shield size={14} className="text-[#1e3a8a] flex-shrink-0" />
                      <span className="text-[#475569] text-sm">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-14">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Consult Dr. Gopikanth?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Book your appointment today and get expert, personalized care for
            your kidney or men&apos;s health concern.
          </p>
          <Link href="/contact" className="btn-teal text-base py-3.5 px-8">
            <CalendarCheck size={18} />
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
