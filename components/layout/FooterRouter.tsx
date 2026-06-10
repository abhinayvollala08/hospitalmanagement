"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const DASHBOARD_PREFIXES = ["/patient", "/doctor", "/admin", "/editor"];

export function FooterRouter() {
  const pathname = usePathname();
  const isDashboard = DASHBOARD_PREFIXES.some((p) => pathname.startsWith(p));

  if (isDashboard) return null;

  return <Footer />;
}
