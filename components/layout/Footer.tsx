import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Share2,
  MessageCircle,
  Globe,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Gopikanth" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Book Appointment" },
];

const services = [
  { href: "/services#kidney-care", label: "Kidney Stone Removal" },
  { href: "/services#kidney-care", label: "Dialysis Consultation" },
  { href: "/services#andrology", label: "Male Infertility" },
  { href: "/services#andrology", label: "Prostate Care" },
  { href: "/services#andrology", label: "Erectile Dysfunction" },
];

const clinicHours = [
  { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Emergency Only" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white" role="contentinfo">
      {/* Main footer grid */}
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">
                  Dr. Gopikanth
                </p>
                <p className="text-slate-400 text-xs leading-tight">
                  Kidney &amp; Andrology Center
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Providing compassionate, world-class urological and andrological
              care. Your health is our highest priority.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1e3a8a] hover:text-white transition-colors"
              >
                <Share2 size={15} />
              </a>
              <a
                href="#"
                aria-label="Follow us on Twitter / X"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1e3a8a] hover:text-white transition-colors"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="#"
                aria-label="Visit our website"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1e3a8a] hover:text-white transition-colors"
              >
                <Globe size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-[#2dd4bf] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0d9488] flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm mt-6 mb-4 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-slate-400 text-sm hover:text-[#2dd4bf] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0d9488] flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinic Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Clinic Hours
            </h3>
            <div className="flex flex-col gap-3">
              {clinicHours.map(({ day, time }) => (
                <div key={day} className="flex items-start gap-2">
                  <Clock size={14} className="text-[#0d9488] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm font-medium">{day}</p>
                    <p className="text-slate-400 text-xs">{time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 bg-red-900/30 border border-red-800/50 rounded-lg">
              <p className="text-red-400 text-xs font-semibold mb-1">
                🚨 Emergency Services
              </p>
              <p className="text-slate-400 text-xs">
                Available 24/7. Call{" "}
                <a
                  href="tel:+919876543210"
                  className="text-red-400 hover:text-red-300 font-medium"
                >
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#0d9488] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">
                    Dr. Gopikanth Kidney &amp; Andrology Center
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    123 Medical Colony, Hyderabad,
                    <br />
                    Telangana – 500001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#0d9488] flex-shrink-0" />
                <div>
                  <a
                    href="tel:+919876543210"
                    className="text-slate-300 text-sm hover:text-[#2dd4bf] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                  <br />
                  <a
                    href="tel:+914012345678"
                    className="text-slate-400 text-xs hover:text-[#2dd4bf] transition-colors"
                  >
                    040-1234-5678
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#0d9488] flex-shrink-0" />
                <a
                  href="mailto:info@drgopikanth.com"
                  className="text-slate-300 text-sm hover:text-[#2dd4bf] transition-colors"
                >
                  info@drgopikanth.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {currentYear} Dr. Gopikanth Kidney &amp; Andrology Center. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <Heart size={11} className="text-red-500 fill-red-500" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
