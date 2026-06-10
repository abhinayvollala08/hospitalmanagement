import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  CalendarCheck,
  Shield,
  Award,
  Users,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedStats from "@/components/ui/AnimatedStats";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";

export const metadata: Metadata = {
  title: "Home | Expert Kidney Care & Andrology in Hyderabad",
  description:
    "Dr. Gopikanth Kidney & Andrology Center offers expert kidney stone removal, dialysis, male infertility treatment, and prostate care in Hyderabad. Book your appointment today.",
};

// Icon names as strings — no function props cross the Server→Client boundary
const featuredServices = [
  {
    iconName: "Droplets",
    title: "Kidney Stone Removal",
    description:
      "Advanced minimally invasive procedures for safe, effective kidney stone removal with faster recovery times.",
    category: "kidney" as const,
    href: "/services#kidney-care",
  },
  {
    iconName: "Activity",
    title: "Dialysis Consultation",
    description:
      "Comprehensive evaluation and management for patients with chronic kidney disease requiring dialysis therapy.",
    category: "kidney" as const,
    href: "/services#kidney-care",
  },
  {
    iconName: "Stethoscope",
    title: "Kidney Disease Management",
    description:
      "Holistic care for all stages of chronic kidney disease, including medication, diet, and lifestyle counseling.",
    category: "kidney" as const,
    href: "/services#kidney-care",
  },
  {
    iconName: "Microscope",
    title: "Male Infertility Treatment",
    description:
      "Evidence-based diagnosis and treatment of male infertility causes, from hormonal to structural issues.",
    category: "andrology" as const,
    href: "/services#andrology",
  },
  {
    iconName: "Heart",
    title: "Erectile Dysfunction",
    description:
      "Confidential, compassionate care for erectile dysfunction using the latest medical and surgical treatments.",
    category: "andrology" as const,
    href: "/services#andrology",
  },
  {
    iconName: "Zap",
    title: "Prostate Care",
    description:
      "Screening, diagnosis, and treatment for benign prostatic hyperplasia (BPH) and prostate-related conditions.",
    category: "andrology" as const,
    href: "/services#andrology",
  },
];

const testimonials = [
  {
    name: "Ravi Kumar",
    treatment: "Kidney Stone Removal",
    location: "Hyderabad",
    quote:
      "Dr. Gopikanth's expertise is unmatched. My kidney stone was treated with minimal pain and I recovered in just 2 days. The team is incredibly caring and professional.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    treatment: "Male Infertility Treatment",
    location: "Secunderabad",
    quote:
      "After years of struggle with infertility, Dr. Gopikanth gave us hope and a solution. His approach is both scientific and empathetic. We are now proud parents!",
    rating: 5,
  },
  {
    name: "Anand Sharma",
    treatment: "Dialysis Consultation",
    location: "Warangal",
    quote:
      "Managing my kidney disease has been much easier under Dr. Gopikanth's guidance. His clear explanations and monitoring plan have greatly improved my quality of life.",
    rating: 5,
  },
  {
    name: "Venkat Rao",
    treatment: "Prostate Care",
    location: "Vijayawada",
    quote:
      "I was nervous about my prostate condition, but Dr. Gopikanth made me feel comfortable throughout. The treatment was effective and I'm back to my normal life.",
    rating: 5,
  },
];

const statsData = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Patients Treated", value: 5000, suffix: "+" },
  { label: "Successful Procedures", value: 2000, suffix: "+" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Stats Bar ── */}
      <section className="bg-[#1e3a8a] py-10" aria-label="Clinic statistics">
        <div className="section-container">
          <AnimatedStats stats={statsData} />
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section
        className="section-padding section-gradient"
        aria-labelledby="services-heading"
      >
        <div className="section-container">
          <SectionHeader
            badge="What We Treat"
            title="Comprehensive Medical "
            highlight="Services"
            subtitle="From kidney care to men's health, our clinic offers a full spectrum of urological and andrological services delivered by an experienced specialist."
          />
          <ServicesGrid services={featuredServices} />
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section
        className="section-padding bg-white"
        aria-labelledby="about-snippet-heading"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/doctor-hero.png"
                  alt="Dr. Gopikanth in his clinic"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-5 hidden md:flex bg-white rounded-2xl shadow-xl p-4 flex-col items-center border border-[#e2e8f0]">
                <span className="text-3xl font-bold text-[#1e3a8a]">15+</span>
                <span className="text-[#475569] text-xs text-center font-medium">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>

            {/* Text content */}
            <div>
              <span className="badge badge-primary mb-4 inline-flex">
                About the Doctor
              </span>
              <h2
                id="about-snippet-heading"
                className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4 leading-tight"
              >
                Meet <span className="gradient-text">Dr. Gopikanth</span>
              </h2>
              <div className="section-divider !mx-0 mb-5" />
              <p className="text-[#475569] leading-relaxed mb-4">
                Dr. Gopikanth is a renowned Nephrologist and Andrologist with
                over 15 years of dedicated practice in kidney care and men&apos;s
                health. He completed his MD and DM in Nephrology from premier
                medical institutions and has treated thousands of patients
                across Telangana and Andhra Pradesh.
              </p>
              <p className="text-[#475569] leading-relaxed mb-6">
                His patient-centric approach, combined with the latest
                diagnostic technology, ensures every patient receives
                personalized, evidence-based treatment tailored to their unique
                medical condition.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Award, text: "MD, DM (Nephrology)" },
                  { icon: Shield, text: "Board Certified Specialist" },
                  { icon: Users, text: "5000+ Patients Treated" },
                  { icon: CalendarCheck, text: "15+ Years Experience" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#1e3a8a]" />
                    </div>
                    <span className="text-[#475569] text-sm font-medium">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Read Full Biography
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="section-padding section-gradient"
        aria-labelledby="testimonials-heading"
      >
        <div className="section-container">
          <SectionHeader
            badge="Patient Stories"
            title="What Our "
            highlight="Patients Say"
            subtitle="Real experiences from patients who have trusted Dr. Gopikanth with their health and found renewed hope."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="hero-gradient py-16" aria-labelledby="cta-heading">
        <div className="section-container text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Take the First Step?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Schedule a consultation with Dr. Gopikanth today. Your health
            journey begins with a single appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              id="hero-cta-book"
              className="btn-teal text-base py-3.5 px-8"
            >
              <CalendarCheck size={18} />
              Book Appointment
            </Link>
            <a
              href="tel:+919876543210"
              id="hero-cta-call"
              className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[#1e3a8a] text-base py-3.5 px-8"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
