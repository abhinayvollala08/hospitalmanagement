import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import {
  Calendar,
  FileText,
  Video,
  Bell,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "My Dashboard" };

const stats = [
  {
    label: "Upcoming Appointments",
    value: "2",
    icon: Calendar,
    color: "bg-blue-50 text-blue-600",
    href: "/patient/appointments",
  },
  {
    label: "Medical Reports",
    value: "5",
    icon: FileText,
    color: "bg-teal-50 text-teal-600",
    href: "/patient/records",
  },
  {
    label: "Video Consultations",
    value: "1",
    icon: Video,
    color: "bg-purple-50 text-purple-600",
    href: "/patient/video",
  },
  {
    label: "Notifications",
    value: "3",
    icon: Bell,
    color: "bg-orange-50 text-orange-500",
    href: "/patient/notifications",
  },
];

const recentAppointments = [
  {
    id: 1,
    doctor: "Dr. Gopikanth",
    specialty: "Nephrologist",
    date: "Today, 4:00 PM",
    status: "upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Sireesha",
    specialty: "Pediatric Specialist",
    date: "12 Jun 2026, 11:00 AM",
    status: "scheduled",
  },
  {
    id: 3,
    doctor: "Dr. Gopikanth",
    specialty: "Andrologist",
    date: "8 Jun 2026, 3:00 PM",
    status: "completed",
  },
];

export default async function PatientDashboard() {
  const session = await auth();
  const name = session?.user?.name?.split(" ")[0] ?? "Patient";

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Good day, {name} 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Here&apos;s a summary of your health activity.
          </p>
        </div>
        <Link
          href="/patient/appointments"
          id="patient-book-appointment"
          className="flex items-center gap-2 bg-[#187b9b] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#0f5a73] transition-colors shadow-sm"
        >
          <Calendar size={15} />
          Book Appointment
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow group"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.color} mb-3`}
            >
              <s.icon size={20} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5 group-hover:text-[#187b9b] transition-colors">
              {s.label}
            </p>
          </Link>
        ))}
      </div>

      {/* Recent Appointments */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <h2 className="font-semibold text-gray-800">Recent Appointments</h2>
          <Link
            href="/patient/appointments"
            className="text-xs text-[#187b9b] font-semibold hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentAppointments.map((appt) => (
            <div
              key={appt.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#187b9b]/10 flex items-center justify-center shrink-0">
                <span className="text-[#187b9b] font-bold text-sm">
                  {appt.doctor.split(" ")[1]?.[0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {appt.doctor}
                </p>
                <p className="text-xs text-gray-400">{appt.specialty}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-gray-600 flex items-center gap-1 justify-end">
                  <Clock size={11} />
                  {appt.date}
                </p>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full mt-1 inline-block ${
                    appt.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : appt.status === "upcoming"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {appt.status === "completed" && (
                    <CheckCircle size={10} className="inline mr-0.5" />
                  )}
                  {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
