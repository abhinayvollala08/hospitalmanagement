"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ChevronDown,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import type { Session } from "next-auth";
import {
  PUBLIC_NAV,
  KIDNEY_CARE_LINKS,
  UROLOGY_ANDROLOGY_LINKS,
  KIDNEY_STONE_LINKS,
  UTI_AND_OTHER_LINKS,
  PEDIATRIC_LINKS,
  RESOURCES_LINKS,
  DEPARTMENTS,
  DOCTORS,
} from "@/constants/navigation";
import { CLINIC_INFO } from "@/constants/clinic-info";

interface Props {
  session: Session | null;
}

// ─── Mega-menu column ─────────────────────────────────────────────────────────
function MegaColumn({
  title,
  color,
  links,
  hoverBg,
  hoverText,
}: {
  title: string;
  color: string;
  links: { label: string; href: string; desc: string }[];
  hoverBg: string;
  hoverText: string;
}) {
  return (
    <div>
      <p
        className={`text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${color}`}
      >
        <span className={`w-4 h-0.5 inline-block bg-current`} />
        {title}
      </p>
      <ul className="space-y-0.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`group block p-2 rounded-lg transition-colors ${hoverBg}`}
            >
              <span
                className={`text-sm font-medium text-gray-800 transition-colors ${hoverText}`}
              >
                {link.label}
              </span>
              <span className="block text-xs text-gray-400 mt-0.5 leading-tight">
                {link.desc}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export function PublicNavbar({ session }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMega(null);
  }, [pathname]);

  const textColor = isScrolled ? "text-gray-700" : "text-white/90";
  const hoverColor = isScrolled
    ? "hover:text-[#187b9b] hover:bg-gray-50"
    : "hover:text-white hover:bg-white/10";
  const activeColor = "text-[#187b9b]";

  const dashboardHref = session?.user?.role
    ? `/${session.user.role.toLowerCase()}/dashboard`
    : "/login";

  return (
    <>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 top-0"
            : "bg-transparent"
        }`}
        style={isScrolled ? {} : { top: "0" }}
      >
        {/* Collapsed top bar when scrolled */}
        {!isScrolled && (
          <div className="hidden lg:block bg-[#0f2a3f] text-white/80 text-xs py-2">
            <div className="section-container flex justify-between items-center">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Expert Nephrology &amp; Andrology Care in Hyderabad
              </span>
              <div className="flex items-center gap-5">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone size={11} /> {CLINIC_INFO.phoneDisplay}
                </a>
                <span className="text-white/30">|</span>
                <span>{CLINIC_INFO.hours}</span>
                <span className="text-white/30">|</span>
                {session ? (
                  <Link
                    href={dashboardHref}
                    className="text-teal-300 font-medium hover:text-teal-200 transition-colors"
                  >
                    My Dashboard →
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="text-teal-300 font-medium hover:text-teal-200 transition-colors"
                  >
                    Patient Login →
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="section-container" ref={megaRef}>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Dr. Gopikanth Kidney & Andrology Center"
            >
              <div className="w-10 h-10 bg-[#187b9b] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-sm select-none">
                  GK
                </span>
              </div>
              <div className="hidden sm:block">
                <p
                  className={`font-bold text-sm leading-tight transition-colors ${
                    isScrolled ? "text-[#0f2a3f]" : "text-white"
                  }`}
                >
                  Dr. Gopikanth
                </p>
                <p
                  className={`text-xs leading-tight transition-colors ${
                    isScrolled ? "text-gray-500" : "text-white/70"
                  }`}
                >
                  Kidney &amp; Andrology Center
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {PUBLIC_NAV.map((item) => {
                const isActive = pathname === item.href;
                const baseClass = `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200`;

                if (item.hasMegaMenu) {
                  return (
                    <button
                      key={item.label}
                      id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      onMouseEnter={() => setActiveMega("treatments")}
                      onClick={() =>
                        setActiveMega(
                          activeMega === "treatments" ? null : "treatments"
                        )
                      }
                      className={`${baseClass} ${textColor} ${hoverColor} ${
                        activeMega === "treatments" ? activeColor : ""
                      }`}
                      aria-expanded={activeMega === "treatments"}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          activeMega === "treatments" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  );
                }

                if (item.hasDropdown) {
                  return (
                    <button
                      key={item.label}
                      id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      onMouseEnter={() => setActiveMega("resources")}
                      onClick={() =>
                        setActiveMega(
                          activeMega === "resources" ? null : "resources"
                        )
                      }
                      className={`${baseClass} ${textColor} ${hoverColor} ${
                        activeMega === "resources" ? activeColor : ""
                      }`}
                      aria-expanded={activeMega === "resources"}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          activeMega === "resources" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`${baseClass} ${
                      isActive
                        ? "text-[#187b9b] bg-teal-50/80"
                        : `${textColor} ${hoverColor}`
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`p-2.5 rounded-xl transition-colors ${
                  isScrolled
                    ? "bg-green-50 text-green-600 hover:bg-green-100"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <MessageCircle size={20} />
              </a>
              <Link
                href="/appointment"
                id="navbar-book-appointment"
                className="flex items-center gap-2 bg-[#187b9b] hover:bg-[#0f5a73] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <Calendar size={15} />
                Book Appointment
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              id="navbar-mobile-menu-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── TREATMENTS MEGA MENU ─────────────────────────────────────────── */}
        <AnimatePresence>
          {activeMega === "treatments" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
              onMouseLeave={() => setActiveMega(null)}
              role="navigation"
              aria-label="Treatments menu"
            >
              <div className="section-container py-8">
                <div className="grid grid-cols-5 gap-6">
                  {/* Col 1 — Kidney Care */}
                  <MegaColumn
                    title="Kidney Care"
                    color="text-[#187b9b]"
                    links={KIDNEY_CARE_LINKS}
                    hoverBg="hover:bg-blue-50"
                    hoverText="group-hover:text-[#187b9b]"
                  />

                  {/* Col 2 — Urology & Andrology */}
                  <MegaColumn
                    title="Urology & Andrology"
                    color="text-teal-600"
                    links={UROLOGY_ANDROLOGY_LINKS}
                    hoverBg="hover:bg-teal-50"
                    hoverText="group-hover:text-teal-700"
                  />

                  {/* Col 3 — Kidney Stone + UTI */}
                  <div className="space-y-6">
                    <MegaColumn
                      title="Kidney Stone Center"
                      color="text-amber-600"
                      links={KIDNEY_STONE_LINKS}
                      hoverBg="hover:bg-amber-50"
                      hoverText="group-hover:text-amber-700"
                    />
                    <MegaColumn
                      title="Urology Conditions"
                      color="text-purple-600"
                      links={UTI_AND_OTHER_LINKS}
                      hoverBg="hover:bg-purple-50"
                      hoverText="group-hover:text-purple-700"
                    />
                  </div>

                  {/* Col 4 — Pediatrics + Departments */}
                  <div className="space-y-6">
                    <MegaColumn
                      title="Pediatrics"
                      color="text-green-600"
                      links={PEDIATRIC_LINKS}
                      hoverBg="hover:bg-green-50"
                      hoverText="group-hover:text-green-700"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Departments
                      </p>
                      {DEPARTMENTS.map((dept) => (
                        <Link
                          key={dept.href}
                          href={dept.href}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-sm text-gray-600 hover:text-[#187b9b] transition-colors mb-1"
                        >
                          <ChevronRight size={13} className="text-gray-400" />
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 5 — CTA Panel */}
                  <div className="bg-gradient-to-br from-[#0f2a3f] to-[#187b9b] rounded-2xl p-5 text-white flex flex-col">
                    <p className="font-semibold text-sm mb-1">
                      Not sure which specialist?
                    </p>
                    <p className="text-xs text-white/70 mb-4 leading-relaxed">
                      Use our symptom checker or call us — we&apos;ll guide you
                      to the right department.
                    </p>
                    <Link
                      href="/tools/symptom-checker"
                      className="block text-center bg-white text-[#187b9b] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-teal-50 transition-colors mb-2.5"
                    >
                      Try Symptom Checker
                    </Link>
                    <Link
                      href="/appointment"
                      className="block text-center border border-white/30 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      Book Appointment
                    </Link>

                    {/* Our Doctors */}
                    <div className="border-t border-white/20 pt-4 mt-4">
                      <p className="text-xs text-white/50 mb-3 uppercase tracking-wider">
                        Our Specialists
                      </p>
                      {DOCTORS.map((doc) => (
                        <Link
                          key={doc.name}
                          href={doc.href}
                          className="flex items-center gap-3 mb-3 group"
                        >
                          <div className="w-9 h-9 rounded-full bg-white/20 overflow-hidden shrink-0 ring-2 ring-white/10 group-hover:ring-white/30 transition-all">
                            <Image
                              src={doc.image}
                              alt={doc.name}
                              width={36}
                              height={36}
                              className="object-cover w-full h-full"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display =
                                  "none";
                              }}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium group-hover:text-teal-300 transition-colors">
                              {doc.name}
                            </p>
                            <p className="text-xs text-white/60">
                              {doc.specialty}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── RESOURCES DROPDOWN ───────────────────────────────────────────── */}
        <AnimatePresence>
          {activeMega === "resources" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.14 }}
              className="absolute left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              onMouseLeave={() => setActiveMega(null)}
              role="navigation"
              aria-label="Resources menu"
            >
              <div className="p-2">
                {RESOURCES_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-teal-50 transition-colors group"
                  >
                    <div className="w-9 h-9 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-200 transition-colors">
                      <span className="text-teal-700 text-sm font-bold">→</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#187b9b] transition-colors">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── MOBILE MENU ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white flex flex-col overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <div className="w-9 h-9 bg-[#187b9b] rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-xs select-none">
                      GK
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#0f2a3f]">
                      Dr. Gopikanth
                    </p>
                    <p className="text-xs text-gray-500">
                      Kidney &amp; Andrology
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 p-4 space-y-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Doctor", href: "/about" },
                  { label: "Treatments", href: "/treatments" },
                  { label: "Resources", href: "/resources" },
                  { label: "Testimonials", href: "/testimonials" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-teal-50 text-[#187b9b]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#187b9b]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Accordion — Top Services */}
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <button
                    onClick={() =>
                      setMobileSection(
                        mobileSection === "services" ? null : "services"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider"
                  >
                    Top Services
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileSection === "services" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileSection === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {[
                          {
                            label: "Kidney Stone Treatment",
                            href: "/kidney-stone-center/laser-treatment",
                          },
                          {
                            label: "Male Infertility",
                            href: "/andrology/male-infertility",
                          },
                          {
                            label: "Dialysis Care",
                            href: "/kidney-care/dialysis",
                          },
                          {
                            label: "CKD Management",
                            href: "/kidney-care/ckd",
                          },
                          {
                            label: "Erectile Dysfunction",
                            href: "/andrology/erectile-dysfunction",
                          },
                        ].map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50 hover:text-[#187b9b] transition-colors"
                          >
                            <ChevronRight size={13} className="text-gray-400" />
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* CTA buttons */}
              <div className="p-4 space-y-3 border-t border-gray-100 bg-gray-50">
                <Link
                  href="/appointment"
                  id="navbar-mobile-book-appointment"
                  className="flex items-center justify-center gap-2 bg-[#187b9b] text-white font-semibold py-3.5 rounded-xl w-full hover:bg-[#0f5a73] transition-colors shadow-sm"
                >
                  <Calendar size={17} />
                  Book Appointment
                </Link>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3.5 rounded-xl w-full hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl w-full hover:bg-gray-100 transition-colors"
                >
                  <Phone size={17} />
                  Call Now
                </a>
              </div>

              {/* Login */}
              <div className="p-4 border-t border-gray-100 text-center">
                {session ? (
                  <Link
                    href={dashboardHref}
                    className="text-sm text-[#187b9b] font-semibold hover:underline"
                  >
                    Go to My Dashboard →
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="text-sm text-[#187b9b] font-semibold hover:underline"
                  >
                    Patient Login →
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
