import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "@/app/login/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your patient, doctor, or admin dashboard.",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await auth();
  const params = await searchParams;

  // Already logged in → send to their dashboard
  if (session?.user) {
    const role = session.user.role as string;
    const dashMap: Record<string, string> = {
      PATIENT: "/patient/dashboard",
      DOCTOR: "/doctor/dashboard",
      ADMIN: "/admin/dashboard",
      EDITOR: "/editor/dashboard",
    };
    redirect(dashMap[role] ?? "/");
  }

  return <LoginForm callbackUrl={params.callbackUrl} error={params.error} />;
}
