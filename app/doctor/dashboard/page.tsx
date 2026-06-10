import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import {
  Calendar,
  Users,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Doctor Dashboard" };

const stats = [
  {
    label: "Today's Appointments",
    value: "5",
    icon: Calendar,
    color: "bg-teal-50 text-teal-600",
    href: "/doctor/appointments/today",
    badge: "5 pending",
  },
  {
    label: "Total Patients",
    value: "142",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
    href: "/doctor/patients",
    badge: null,
  },
  {
    label: "Unread Messages",
    value: "7",
    icon: MessageSquare,
    color: "bg-purple-50 text-purple-600",
    href: "/doctor/messages",
    badge: "7 new",
  },
  {
    label: "This Month Revenue",
    value: "₹84k",
    icon: TrendingUp,
    color: "bg-green-50 text-green-600",
    href: "/doctor/analytics",
    badge: null,
  },
];

const todaySlots = [
  { time: "09:00 AM", patient: "Ravi Kumar", type: "CKD Follow-up", status: "completed" },
  { time: "10:30 AM", patient: "Anjali Singh", type: "Kidney Stone", status: "completed" },
  { time: "12:00 PM", patient: "Mohammed Ali", type: "New Consultation", status: "in-progress" },
  { time: "02:00 PM", patient: "Priya Sharma", type: "Dialysis Review", status: "upcoming" },
  { time: "04:00 PM", patient: "Suresh Reddy", type: "Male Infertility", status: "upcoming" },
];

export default async function DoctorDashboard() {
  const session = await auth();
  const name = session?.user?.name?.split(" ")[0] ?? "Doctor";

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Good day, Dr. {name} 🩺
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            You have 5 appointments scheduled for today.
          </p>
        </div>
        <Link
          href="/doctor/appointments/today"
          className="flex items-center gap-2 bg-[#187b9b] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#0f5a73] transition-colors shadow-sm"
        >
          <Calendar size={15} />
          Today&apos;s Schedule
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
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            {s.badge && (
              <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full mt-1 inline-block">
                {s.badge}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Today's schedule */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <h2 className="font-semibold text-gray-800">
            Today&apos;s Appointments
          </h2>
          <Link
            href="/doctor/appointments"
            className="text-xs text-[#187b9b] font-semibold hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {todaySlots.map((slot, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors"
            >
              <div className="text-center w-16 shrink-0">
                <p className="text-xs font-bold text-gray-700">{slot.time}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {slot.patient}
                </p>
                <p className="text-xs text-gray-400">{slot.type}</p>
              </div>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1 ${
                  slot.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : slot.status === "in-progress"
                      ? "bg-blue-100 text-blue-700 animate-pulse"
                      : "bg-amber-100 text-amber-700"
                }`}
              >
                {slot.status === "completed" ? (
                  <CheckCircle size={11} />
                ) : slot.status === "in-progress" ? (
                  <AlertCircle size={11} />
                ) : (
                  <Clock size={11} />
                )}
                {slot.status === "in-progress"
                  ? "In Progress"
                  : slot.status.charAt(0).toUpperCase() + slot.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
