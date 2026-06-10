"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  treatment: string;
  quote: string;
  rating?: number;
  location?: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  treatment,
  quote,
  rating = 5,
  location,
  index = 0,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <article
        className="card-medical h-full p-6 flex flex-col gap-4 relative"
        aria-label={`Testimonial from ${name}`}
      >
        {/* Quote icon */}
        <div className="absolute top-5 right-5 text-[#e2e8f0]">
          <Quote size={32} className="fill-current" aria-hidden="true" />
        </div>

        {/* Star rating */}
        <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={15}
              className={i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Quote text */}
        <blockquote className="text-[#475569] text-sm leading-relaxed italic flex-grow">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Patient info */}
        <div className="flex items-center gap-3 pt-3 border-t border-[#e2e8f0]">
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span className="text-white text-xs font-bold">{initials}</span>
          </div>
          <div>
            <p className="text-[#1e293b] font-semibold text-sm">{name}</p>
            <p className="text-[#94a3b8] text-xs">
              {treatment}
              {location && ` • ${location}`}
            </p>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
