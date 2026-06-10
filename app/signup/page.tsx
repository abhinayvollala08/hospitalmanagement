import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignupForm } from "@/app/signup/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your healthcare account at Dr. Gopikanth Kidney & Andrology Center.",
  robots: { index: false, follow: false },
};

export default async function SignupPage() {
  const session = await auth();

  // Already logged in → send to dashboard
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

  return <SignupForm />;
}
