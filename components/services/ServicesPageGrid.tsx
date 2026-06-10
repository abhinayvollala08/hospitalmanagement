"use client";

import {
  Droplets,
  Activity,
  Stethoscope,
  AlertCircle,
  Flame,
  Shield,
  Microscope,
  Heart,
  Zap,
  TestTube,
  Brain,
  Pill,
  LucideIcon,
} from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  category: "kidney" | "andrology";
}

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Activity,
  Stethoscope,
  AlertCircle,
  Flame,
  Shield,
  Microscope,
  Heart,
  Zap,
  TestTube,
  Brain,
  Pill,
};

export default function ServicesPageGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => {
        const Icon = iconMap[service.iconName] ?? Stethoscope;
        return (
          <ServiceCard
            key={service.title}
            icon={Icon}
            title={service.title}
            description={service.description}
            category={service.category}
            href="/contact"
            index={i}
          />
        );
      })}
    </div>
  );
}
