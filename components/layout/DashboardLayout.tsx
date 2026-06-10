import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";
import {
  PATIENT_SIDEBAR,
  DOCTOR_SIDEBAR,
  ADMIN_SIDEBAR,
  EDITOR_SIDEBAR,
  type NavItem,
} from "@/constants/navigation";
import type { User } from "next-auth";

const SIDEBAR_MAP: Record<string, NavItem[]> = {
  PATIENT: PATIENT_SIDEBAR,
  DOCTOR: DOCTOR_SIDEBAR,
  ADMIN: ADMIN_SIDEBAR,
  EDITOR: EDITOR_SIDEBAR,
};

/** Default dashboard per role */
const DASH_MAP: Record<string, string> = {
  PATIENT: "/patient/dashboard",
  DOCTOR: "/doctor/dashboard",
  ADMIN: "/admin/dashboard",
  EDITOR: "/editor/dashboard",
};

interface Props {
  children: React.ReactNode;
  /** If provided, only users with this role (or one of these roles) can access */
  requiredRole?: string | string[];
}

export async function DashboardLayout({ children, requiredRole }: Props) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const role = (session.user.role as string) ?? "PATIENT";

  if (requiredRole) {
    const allowed = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    // ADMIN can access any dashboard
    if (role !== "ADMIN" && !allowed.includes(role)) {
      redirect(DASH_MAP[role] ?? "/");
    }
  }

  const sidebarItems = SIDEBAR_MAP[role] ?? PATIENT_SIDEBAR;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <DashboardSidebar
        items={sidebarItems}
        role={role}
        user={session.user as User & { role?: string }}
      />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <DashboardTopbar
          user={session.user as User & { role?: string }}
          role={role}
        />
        <main
          id="dashboard-main"
          className="flex-1 overflow-y-auto p-6"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
