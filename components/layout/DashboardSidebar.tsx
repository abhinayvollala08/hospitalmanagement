"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Circle,
} from "lucide-react";
import { signOut } from "next-auth/react";
import * as LucideIcons from "lucide-react";
import type { NavItem } from "@/constants/navigation";
import type { User } from "next-auth";

// ─── Role config ──────────────────────────────────────────────────────────────
const ROLE_CONFIG: Record<
  string,
  { badge: string; gradient: string; accent: string }
> = {
  PATIENT: {
    badge: "bg-blue-100 text-blue-700 border border-blue-200",
    gradient: "from-blue-600 to-[#187b9b]",
    accent: "bg-blue-50 text-blue-700 border-blue-200",
  },
  DOCTOR: {
    badge: "bg-teal-100 text-teal-700 border border-teal-200",
    gradient: "from-[#187b9b] to-teal-500",
    accent: "bg-teal-50 text-teal-700 border-teal-200",
  },
  ADMIN: {
    badge: "bg-purple-100 text-purple-700 border border-purple-200",
    gradient: "from-purple-600 to-[#187b9b]",
    accent: "bg-purple-50 text-purple-700 border-purple-200",
  },
  EDITOR: {
    badge: "bg-amber-100 text-amber-700 border border-amber-200",
    gradient: "from-amber-500 to-orange-500",
    accent: "bg-amber-50 text-amber-700 border-amber-200",
  },
};

// ─── Dynamic Lucide icon resolver ─────────────────────────────────────────────
function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const IconComp =
    (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name] ??
    Circle;
  return <IconComp size={size} />;
}

// ─── Single sidebar item (recursive for nested) ───────────────────────────────
function SidebarItem({
  item,
  collapsed,
  depth = 0,
}: {
  item: NavItem;
  collapsed: boolean;
  depth?: number;
}) {
  const pathname = usePathname();
  const hasChildren = (item.children?.length ?? 0) > 0;

  const isActive =
    pathname === item.href ||
    (item.href !== "#" && pathname.startsWith(item.href + "/")) ||
    (hasChildren &&
      item.children!.some(
        (c) => pathname === c.href || pathname.startsWith(c.href + "/")
      ));

  const [open, setOpen] = useState(isActive && hasChildren);

  const activeClass =
    "bg-[#187b9b]/10 text-[#187b9b] font-semibold border-r-2 border-[#187b9b]";
  const inactiveClass =
    "text-gray-600 hover:bg-gray-100 hover:text-gray-900";
  const depthPad = depth > 0 ? "pl-10" : "px-3";

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          title={collapsed ? item.label : undefined}
          className={`w-full flex items-center gap-3 ${depthPad} py-2.5 rounded-xl text-sm transition-all group ${
            isActive ? activeClass : inactiveClass
          }`}
        >
          <span className="shrink-0">
            <Icon name={item.icon} />
          </span>
          {!collapsed && (
            <>
              <span className="flex-1 text-left truncate">{item.label}</span>
              {item.badge && (
                <span className="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 font-bold leading-none">
                  {item.badge}
                </span>
              )}
              <ChevronDown
                size={14}
                className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </>
          )}
        </button>

        <AnimatePresence initial={false}>
          {open && !collapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-0.5 space-y-0.5 border-l-2 border-gray-100 ml-6">
                {item.children!.map((child) => (
                  <SidebarItem
                    key={child.href}
                    item={child}
                    collapsed={false}
                    depth={depth + 1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      title={collapsed ? item.label : undefined}
      className={`flex items-center gap-3 ${depthPad} py-2.5 rounded-xl text-sm transition-all group ${
        isActive ? activeClass : inactiveClass
      }`}
    >
      <span className="shrink-0">
        <Icon name={item.icon} />
      </span>
      {!collapsed && (
        <>
          <span className="flex-1 truncate">{item.label}</span>
          {item.badge && (
            <span className="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 font-bold leading-none">
              {item.badge}
            </span>
          )}
        </>
      )}
    </Link>
  );
}

// ─── Main Sidebar ─────────────────────────────────────────────────────────────
interface Props {
  items: NavItem[];
  role: string;
  user: User & { role?: string };
}

export function DashboardSidebar({ items, role, user }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const cfg = ROLE_CONFIG[role] ?? ROLE_CONFIG.PATIENT;

  const initials = (user.name ?? "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 256 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="relative h-screen bg-white border-r border-gray-100 flex flex-col shadow-sm shrink-0 overflow-hidden"
    >
      {/* Logo / Brand */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-gray-100 shrink-0">
        <div
          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center shrink-0 shadow-md`}
        >
          <span className="text-white font-bold text-xs select-none">GK</span>
        </div>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <p className="font-bold text-sm text-gray-900 leading-tight truncate">
              Dr. Gopikanth
            </p>
            <p className="text-xs text-gray-400 leading-tight truncate">
              {role.charAt(0) + role.slice(1).toLowerCase()} Portal
            </p>
          </motion.div>
        )}
      </div>

      {/* User card */}
      <div
        className={`flex items-center gap-3 p-3 mx-3 mt-4 rounded-2xl bg-gradient-to-br ${cfg.gradient} text-white shadow-md shrink-0`}
      >
        <div className="w-9 h-9 rounded-full bg-white/20 overflow-hidden ring-2 ring-white/30 shrink-0">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name ?? "User"}
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm font-bold">
              {initials}
            </div>
          )}
        </div>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 overflow-hidden"
          >
            <p className="text-sm font-semibold truncate">
              {user.name ?? "User"}
            </p>
            <span
              className={`inline-block text-xs px-2 py-0.5 rounded-full bg-white/20 border border-white/30 font-medium`}
            >
              {role.charAt(0) + role.slice(1).toLowerCase()}
            </span>
          </motion.div>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {items.map((item) => (
          <SidebarItem key={item.href + item.label} item={item} collapsed={collapsed} />
        ))}
      </nav>

      {/* Bottom actions */}
      <div className="px-3 pb-4 pt-2 border-t border-gray-100 space-y-1 shrink-0">
        <button
          onClick={() =>
            signOut({ callbackUrl: "/login" })
          }
          title={collapsed ? "Sign out" : undefined}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors group"
        >
          <LogOut size={18} className="shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-[#187b9b] hover:border-[#187b9b] transition-colors z-10"
      >
        {collapsed ? (
          <PanelLeftOpen size={13} />
        ) : (
          <PanelLeftClose size={13} />
        )}
      </button>
    </motion.aside>
  );
}
