"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-[#1e3a8a] text-white text-sm">
        <div className="section-container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-[#2dd4bf] transition-colors"
            >
              <Phone size={13} />
              <span>+91 98765 43210</span>
            </a>
            <span className="text-blue-300">|</span>
            <span className="text-blue-200">Mon – Sat: 9:00 AM – 7:00 PM</span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-200">
            <Heart size={13} className="text-red-400 fill-red-400" />
            <span>Emergency: 24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#e2e8f0]"
            : "bg-white border-b border-[#e2e8f0]"
        }`}
        role="banner"
      >
        <nav
          className="section-container flex items-center justify-between h-16 md:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Dr. Gopikanth Kidney & Andrology Center - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg select-none">G</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-[#1e3a8a] text-sm leading-tight">
                Dr. Gopikanth
              </p>
              <p className="text-[#475569] text-xs leading-tight">
                Kidney &amp; Andrology Center
              </p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#eff6ff] text-[#1e3a8a] font-semibold"
                        : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#1e3a8a]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              id="navbar-book-appointment"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="navbar-mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-[#475569] hover:bg-[#f8fafc] hover:text-[#1e3a8a] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="border-t border-[#e2e8f0] bg-white px-4 pb-4 pt-2">
            {/* Mobile top info */}
            <div className="flex flex-col gap-1 mb-3 py-2 border-b border-[#e2e8f0]">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-[#1e3a8a] font-medium"
              >
                <Phone size={14} />
                +91 98765 43210
              </a>
            </div>
            {/* Mobile nav links */}
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#eff6ff] text-[#1e3a8a] font-semibold"
                          : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#1e3a8a]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3">
              <Link
                href="/contact"
                id="navbar-mobile-book-appointment"
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
