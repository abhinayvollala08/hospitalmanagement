"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Activity,
  Stethoscope,
  Microscope,
  Heart,
  Zap,
  LucideIcon,
} from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  category: "kidney" | "andrology";
  href: string;
}

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Activity,
  Stethoscope,
  Microscope,
  Heart,
  Zap,
};

export default function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => {
        const Icon = iconMap[service.iconName] ?? Stethoscope;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          >
            <ServiceCard
              icon={Icon}
              title={service.title}
              description={service.description}
              category={service.category}
              href={service.href}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
