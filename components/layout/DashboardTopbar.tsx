"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, ChevronRight, Settings } from "lucide-react";
import type { User } from "next-auth";

const ROLE_LABEL: Record<string, string> = {
  PATIENT: "Patient",
  DOCTOR: "Doctor",
  ADMIN: "Administrator",
  EDITOR: "Editor",
};

const ROLE_BADGE: Record<string, string> = {
  PATIENT: "bg-blue-100 text-blue-700",
  DOCTOR: "bg-teal-100 text-teal-700",
  ADMIN: "bg-purple-100 text-purple-700",
  EDITOR: "bg-amber-100 text-amber-700",
};

function buildBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.map((seg, i) => ({
    label: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));
}

interface Props {
  user: User & { role?: string };
  role: string;
}

export function DashboardTopbar({ user, role }: Props) {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname);
  const [searchQuery, setSearchQuery] = useState("");

  const initials = (user.name ?? "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center gap-4 px-6 shrink-0 shadow-sm">
      {/* Breadcrumbs */}
      <nav
        className="flex items-center gap-1.5 text-sm flex-1 min-w-0"
        aria-label="Breadcrumb"
      >
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={13} className="text-gray-300 shrink-0" />}
            {i === breadcrumbs.length - 1 ? (
              <span className="font-semibold text-gray-800 truncate">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-gray-400 hover:text-[#187b9b] transition-colors truncate"
              >
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-56 focus-within:border-[#187b9b] focus-within:bg-white transition-all">
        <Search size={15} className="text-gray-400 shrink-0" />
        <input
          type="search"
          placeholder="Search…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
        />
      </div>

      {/* Notifications */}
      <button
        id="topbar-notifications"
        className="relative p-2 text-gray-500 hover:text-[#187b9b] hover:bg-teal-50 rounded-xl transition-colors"
        aria-label="Notifications"
      >
        <Bell size={19} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
      </button>

      {/* Settings */}
      <Link
        href={`/${role.toLowerCase()}/settings`}
        id="topbar-settings"
        className="p-2 text-gray-500 hover:text-[#187b9b] hover:bg-teal-50 rounded-xl transition-colors"
        aria-label="Settings"
      >
        <Settings size={19} />
      </Link>

      {/* User avatar + role */}
      <div className="flex items-center gap-2.5 ml-1">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-800 leading-tight">
            {user.name}
          </p>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${ROLE_BADGE[role]}`}
          >
            {ROLE_LABEL[role] ?? role}
          </span>
        </div>
        <div className="w-9 h-9 rounded-full bg-[#187b9b]/10 overflow-hidden ring-2 ring-[#187b9b]/20 shrink-0">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name ?? "User"}
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm font-bold text-[#187b9b]">
              {initials}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
