import type { Metadata } from "next";
import {
  Phone,
  Clock,
  AlertTriangle,
  MessageSquare,
  MapPin,
} from "lucide-react";
import AppointmentForm from "@/components/contact/AppointmentForm";
import { CLINIC_INFO } from "@/constants/clinic-info";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Gopikanth Kidney & Andrology Center",
  description:
    "Schedule your kidney, urology, or andrology consultation online. Select your preferred date and time, and our clinic desk will confirm within 2 hours.",
};

export default function AppointmentPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center">
          <span className="badge badge-teal mb-4 inline-flex">
            Online Booking
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your <span className="text-[#2dd4bf]">Appointment</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Choose your specialty and preferred schedule. We will call you within 2 hours to confirm your booking.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left: Appointment Form (2 columns wide) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-medical p-6 md:p-8 bg-white shadow-sm border border-gray-100 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1e3a8a] shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-lg">
                      Request an Appointment
                    </h2>
                    <p className="text-xs text-gray-400">
                      Fill out the form below to book your consultation with Dr. Gopikanth.
                    </p>
                  </div>
                </div>
                <AppointmentForm />
              </div>
            </div>

            {/* Right: Info Sidebar (1 column wide) */}
            <div className="space-y-6">
              {/* Emergency Alert */}
              <div
                className="p-5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 shadow-sm"
                role="alert"
              >
                <AlertTriangle
                  size={20}
                  className="text-red-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-red-700 font-bold text-sm">
                    Medical Emergency?
                  </p>
                  <p className="text-red-600 text-xs mt-1 leading-relaxed">
                    Please do not use this online form for emergencies. Call our urgent helpline directly at{" "}
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="font-bold underline hover:text-red-800"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>{" "}
                    (Available 24/7).
                  </p>
                </div>
              </div>

              {/* Call to Book */}
              <div className="card-medical p-5 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <Phone size={15} className="text-[#187b9b]" /> Direct Booking
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Prefer to book over the phone? Call our clinical desk and we will schedule your slot immediately.
                </p>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#187b9b] hover:bg-[#0f5a73] text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md text-xs"
                >
                  <Phone size={14} /> Call {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              {/* Clinic Timings */}
              <div className="card-medical p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-3">
                  <Clock size={15} className="text-[#187b9b]" /> Clinic Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                    { day: "Sunday", time: "Emergency Only" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between gap-2 text-xs">
                      <span className="text-gray-500 font-medium">{day}</span>
                      <span className="text-[#1e3a8a] font-bold whitespace-nowrap">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic Location */}
              <div className="card-medical p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-2">
                  <MapPin size={15} className="text-[#187b9b]" /> Location Address
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  123 Medical Colony, Banjara Hills,<br />
                  Hyderabad, Telangana – 500034
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
