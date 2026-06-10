import type { Metadata } from "next";
import {
  Users,
  Stethoscope,
  Calendar,
  BarChart3,
  Clock,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Admin Dashboard" };

const stats = [
  {
    label: "Total Patients",
    value: "1,248",
    change: "+12 this week",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
    href: "/admin/patients",
  },
  {
    label: "Active Doctors",
    value: "6",
    change: "2 on leave",
    icon: Stethoscope,
    color: "bg-teal-50 text-teal-600",
    href: "/admin/doctors",
  },
  {
    label: "Pending Appointments",
    value: "12",
    change: "↑ 3 since yesterday",
    icon: Calendar,
    color: "bg-orange-50 text-orange-500",
    href: "/admin/appointments/pending",
  },
  {
    label: "Monthly Revenue",
    value: "₹3.2L",
    change: "+18% vs last month",
    icon: TrendingUp,
    color: "bg-green-50 text-green-600",
    href: "/admin/analytics",
  },
];

const alerts = [
  {
    type: "warning",
    message: "12 appointments pending confirmation",
    href: "/admin/appointments/pending",
  },
  {
    type: "info",
    message: "Dr. Sireesha is on leave today",
    href: "/admin/doctors",
  },
  {
    type: "success",
    message: "3 new patient registrations today",
    href: "/admin/patients/new",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Admin Overview 🏥
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Dr. Gopikanth Kidney & Andrology Center — Control Panel
          </p>
        </div>
        <Link
          href="/admin/appointments"
          className="flex items-center gap-2 bg-[#187b9b] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#0f5a73] transition-colors shadow-sm"
        >
          <Calendar size={15} />
          View Appointments
        </Link>
      </div>

      {/* Alerts */}
      <div className="space-y-2">
        {alerts.map((alert, i) => (
          <Link
            key={i}
            href={alert.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.01] ${
              alert.type === "warning"
                ? "bg-orange-50 text-orange-700 border border-orange-100 hover:bg-orange-100"
                : alert.type === "info"
                  ? "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100"
                  : "bg-green-50 text-green-700 border border-green-100 hover:bg-green-100"
            }`}
          >
            <AlertTriangle size={15} className="shrink-0" />
            {alert.message}
            <span className="ml-auto text-xs opacity-60">View →</span>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.color} mb-3`}
            >
              <s.icon size={20} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            <p className="text-xs text-gray-400 mt-1">{s.change}</p>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Add Doctor", href: "/admin/doctors/new", icon: Stethoscope },
            { label: "Today's Schedule", href: "/admin/appointments/today", icon: Clock },
            { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
            { label: "Manage Content", href: "/admin/blogs", icon: Users },
          ].map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-[#187b9b] hover:bg-teal-50 transition-all group text-center"
            >
              <a.icon size={22} className="text-gray-400 group-hover:text-[#187b9b] transition-colors" />
              <span className="text-xs font-semibold text-gray-600 group-hover:text-[#187b9b] transition-colors">
                {a.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
