"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { PublicNavbar } from "./PublicNavbar";

/** Routes that use dashboard layout — no top navbar needed there */
const DASHBOARD_PREFIXES = ["/patient", "/doctor", "/admin", "/editor"];

export function NavbarRouter() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isDashboard = DASHBOARD_PREFIXES.some((p) => pathname.startsWith(p));

  // Dashboard pages render their own sidebar layout
  if (isDashboard) return null;

  return <PublicNavbar session={session ?? null} />;
}
