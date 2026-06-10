"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category: "kidney" | "andrology";
  href?: string;
  index?: number;
}

const categoryColors = {
  kidney: {
    bg: "bg-[#eff6ff]",
    iconBg: "bg-[#1e3a8a]",
    badge: "badge-primary",
    badgeText: "Kidney Care",
    hoverBorder: "hover:border-[#93c5fd]",
  },
  andrology: {
    bg: "bg-[#f0fdfa]",
    iconBg: "bg-[#0d9488]",
    badge: "badge-teal",
    badgeText: "Andrology",
    hoverBorder: "hover:border-[#5eead4]",
  },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  category,
  href = "/services",
  index = 0,
}: ServiceCardProps) {
  const colors = categoryColors[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link href={href} className="block h-full group">
        <article
          className={`card-medical h-full p-6 flex flex-col gap-4 border border-[#e2e8f0] ${colors.hoverBorder}`}
          aria-label={`Service: ${title}`}
        >
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={22} className="text-white" aria-hidden="true" />
          </div>

          {/* Badge */}
          <span className={`badge ${colors.badge} self-start`}>
            {colors.badgeText}
          </span>

          {/* Title */}
          <h3 className="text-[#1e293b] font-semibold text-lg leading-snug group-hover:text-[#1e3a8a] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#475569] text-sm leading-relaxed flex-grow">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-1.5 text-[#1e3a8a] text-sm font-semibold mt-auto pt-2 border-t border-[#e2e8f0] group-hover:gap-2.5 transition-all">
            <span>Learn More</span>
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
