"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {badge && (
        <span className={`badge ${light ? "badge-teal" : "badge-primary"} mb-4 inline-flex`}>
          {badge}
        </span>
      )}

      <h2
        className={`text-3xl md:text-4xl font-bold mb-3 leading-tight ${
          light ? "text-white" : "text-[#1e293b]"
        }`}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      <div className={`${centered ? "mx-auto" : ""} section-divider`} />

      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-blue-200" : "text-[#475569]"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
