"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, X, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { CLINIC_INFO } from "@/constants/clinic-info";

const DASHBOARD_PREFIXES = ["/patient", "/doctor", "/admin", "/editor"];

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  // Hide on dashboard routes
  const isDashboard = DASHBOARD_PREFIXES.some((p) => pathname.startsWith(p));

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  if (isDashboard) return null;

  const actions = [
    {
      icon: <Calendar size={18} />,
      label: "Book Appointment",
      href: "/appointment",
      bg: "bg-[#187b9b] hover:bg-[#0f5a73]",
      isNextLink: true,
      external: false,
    },
    {
      icon: <MessageCircle size={18} />,
      label: "WhatsApp Us",
      href: `https://wa.me/${CLINIC_INFO.whatsapp}`,
      bg: "bg-green-500 hover:bg-green-600",
      isNextLink: false,
      external: true,
    },
    {
      icon: <Phone size={18} />,
      label: "Call Now",
      href: `tel:${CLINIC_INFO.phone}`,
      bg: "bg-orange-500 hover:bg-orange-600",
      isNextLink: false,
      external: false,
    },
  ];

  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3"
      aria-label="Quick actions"
    >
      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:text-[#187b9b] hover:border-[#187b9b] transition-all"
            aria-label="Scroll to top"
          >
            <ChevronUp size={17} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded actions */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col items-end gap-2.5"
          >
            {actions.map((action) =>
              action.isNextLink ? (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`flex items-center gap-2.5 ${action.bg} text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl`}
                >
                  {action.icon}
                  <span>{action.label}</span>
                </Link>
              ) : (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2.5 ${action.bg} text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl`}
                >
                  {action.icon}
                  <span>{action.label}</span>
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle FAB */}
      <motion.button
        id="floating-actions-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-[#187b9b] hover:bg-[#0f5a73] text-white rounded-full shadow-xl flex items-center justify-center transition-colors"
        animate={{ rotate: isExpanded ? 45 : 0 }}
        transition={{ duration: 0.25 }}
        aria-label={isExpanded ? "Close quick actions" : "Open quick actions"}
        aria-expanded={isExpanded}
      >
        {isExpanded ? <X size={22} /> : <Calendar size={22} />}
      </motion.button>
    </div>
  );
}
