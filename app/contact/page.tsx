import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";
import AppointmentForm from "@/components/contact/AppointmentForm";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Dr. Gopikanth Kidney & Andrology Center",
  description:
    "Book an appointment with Dr. Gopikanth, Hyderabad's leading nephrologist and andrologist. Call +91 98765 43210 or fill in the online form for kidney & men's health consultations.",
};

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98765 43210 (Mobile)", "040-1234-5678 (Landline)"],
    href: "tel:+919876543210",
    color: "bg-[#eff6ff]",
    iconColor: "text-[#1e3a8a]",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@drgopikanth.com"],
    href: "mailto:info@drgopikanth.com",
    color: "bg-[#f0fdfa]",
    iconColor: "text-[#0d9488]",
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "123 Medical Colony, Banjara Hills",
      "Hyderabad, Telangana – 500034",
    ],
    href: "https://maps.google.com",
    color: "bg-[#eff6ff]",
    iconColor: "text-[#1e3a8a]",
  },
];

const clinicHours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Emergency Only (Call for Appointment)" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center">
          <span className="badge badge-teal mb-4 inline-flex">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your <span className="text-[#2dd4bf]">Appointment</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Fill out the form below, call us directly, or visit the clinic.
            We&apos;ll confirm your appointment within 2 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section
        className="section-padding section-gradient"
        aria-labelledby="contact-heading"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Contact info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2
                  id="contact-heading"
                  className="text-2xl font-bold text-[#1e293b] mb-2"
                >
                  Contact Information
                </h2>
                <div className="section-divider !mx-0 mb-5" />
              </div>

              {/* Emergency notice */}
              <div
                className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                role="alert"
              >
                <AlertTriangle
                  size={18}
                  className="text-red-500 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-red-700 font-semibold text-sm">
                    Medical Emergency?
                  </p>
                  <p className="text-red-600 text-xs mt-0.5">
                    Call{" "}
                    <a
                      href="tel:+919876543210"
                      className="font-bold underline hover:text-red-800"
                    >
                      +91 98765 43210
                    </a>{" "}
                    immediately. Available 24/7.
                  </p>
                </div>
              </div>

              {/* Contact cards */}
              {contactDetails.map(({ icon: Icon, title, lines, href, color, iconColor }) => (
                <a
                  key={title}
                  href={href}
                  target={title === "Address" ? "_blank" : undefined}
                  rel={title === "Address" ? "noopener noreferrer" : undefined}
                  className="card-medical p-4 flex items-start gap-3 group"
                  aria-label={`${title}: ${lines.join(", ")}`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={16} className={iconColor} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e293b] text-sm">
                      {title}
                    </p>
                    {lines.map((line) => (
                      <p key={line} className="text-[#475569] text-xs mt-0.5">
                        {line}
                      </p>
                    ))}
                  </div>
                </a>
              ))}

              {/* Clinic Hours */}
              <div className="card-medical p-5">
                <h3 className="font-semibold text-[#1e293b] mb-3 flex items-center gap-2 text-sm">
                  <Clock size={15} className="text-[#1e3a8a]" aria-hidden="true" />
                  Clinic Hours
                </h3>
                <div className="space-y-2">
                  {clinicHours.map(({ day, time }) => (
                    <div
                      key={day}
                      className="flex justify-between gap-2 text-xs"
                    >
                      <span className="text-[#475569] font-medium">{day}</span>
                      <span className="text-[#1e3a8a] font-semibold whitespace-nowrap">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Appointment Form + Map */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Form card */}
              <div className="card-medical p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-[#eff6ff] flex items-center justify-center">
                    <MessageSquare size={16} className="text-[#1e3a8a]" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-[#1e293b] text-lg">
                      Request an Appointment
                    </h2>
                    <p className="text-[#94a3b8] text-xs">
                      We&apos;ll confirm within 2 hours during clinic hours
                    </p>
                  </div>
                </div>
                <AppointmentForm />
              </div>

              {/* Google Maps embed */}
              <div className="card-medical overflow-hidden">
                <div className="p-4 border-b border-[#e2e8f0]">
                  <h3 className="font-semibold text-[#1e293b] text-sm flex items-center gap-2">
                    <MapPin size={15} className="text-[#1e3a8a]" aria-hidden="true" />
                    Find Us on the Map
                  </h3>
                  <p className="text-[#94a3b8] text-xs mt-0.5">
                    123 Medical Colony, Banjara Hills, Hyderabad – 500034
                  </p>
                </div>
                <div className="aspect-[16/9] bg-[#e2e8f0]">
                  <iframe
                    title="Dr. Gopikanth Kidney & Andrology Center location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.260805826074!2d78.44892507498!3d17.427116001447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c6b4bab37d%3A0x1e7c29de6e5b2a2!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google Maps showing clinic location in Banjara Hills, Hyderabad"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
