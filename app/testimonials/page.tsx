import type { Metadata } from "next";
import { TestimonialsContent } from "./TestimonialsContent";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read real patient stories, reviews, and watch video testimonials from Dr. Gopikanth Kidney & Andrology Center. See why thousands of patients trust us for kidney care and men's health.",
};

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    location: "Hyderabad",
    treatment: "Kidney Stone (RIRS)",
    rating: 5,
    text: "I had a 12mm kidney stone and was terrified. Dr. Gopikanth explained the RIRS procedure clearly and I was discharged the same day. Zero pain, zero complications. Absolutely world-class care.",
    date: "March 2026",
    avatar: "RK",
    color: "from-[#187b9b] to-blue-500",
  },
  {
    name: "Priya & Suresh Naidu",
    location: "Vijayawada",
    treatment: "Male Infertility",
    rating: 5,
    text: "We had been trying for 3 years. After meeting Dr. Gopikanth, Suresh was diagnosed with varicocele. Post surgery and treatment, we are now blessed with a baby boy. We are forever grateful.",
    date: "January 2026",
    avatar: "PS",
    color: "from-teal-600 to-teal-400",
  },
  {
    name: "Mohammed Irfan",
    location: "Hyderabad",
    treatment: "CKD Management",
    rating: 5,
    text: "I was diagnosed with Stage 3 CKD and panicked. Dr. Gopikanth put together a detailed medication and diet plan. My creatinine is now stable at 1.6 after 8 months. Highly recommend.",
    date: "February 2026",
    avatar: "MI",
    color: "from-purple-600 to-purple-400",
  },
  {
    name: "Lalitha Devi",
    location: "Karimnagar",
    treatment: "Dialysis Care",
    rating: 5,
    text: "My mother has been on dialysis for 2 years. The entire team at the center is so caring and professional. They feel like family. Dr. Gopikanth personally monitors her progress.",
    date: "April 2026",
    avatar: "LD",
    color: "from-green-600 to-emerald-400",
  },
  {
    name: "Venkat Rao",
    location: "Secunderabad",
    treatment: "Prostate / BPH",
    rating: 5,
    text: "I was waking up 5–6 times at night due to BPH. After treatment at the clinic, my symptoms reduced dramatically. The doctor was extremely patient in explaining all options. Outstanding!",
    date: "March 2026",
    avatar: "VR",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Santha Kumari",
    location: "Warangal",
    treatment: "Pediatric Urology",
    rating: 5,
    text: "Dr. Sireesha treated my 4-year-old son's urological condition with so much gentleness. The pediatric team was amazing throughout — both with my son and with us as worried parents.",
    date: "May 2026",
    avatar: "SK",
    color: "from-pink-500 to-rose-400",
  },
];

const STATS = [
  { value: "5,000+", label: "Patients Treated" },
  { value: "4.9★", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
  { value: "15+", label: "Years Experience" },
];

export default function TestimonialsPage() {
  return <TestimonialsContent testimonials={TESTIMONIALS} stats={STATS} />;
}
