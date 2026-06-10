import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout requiredRole="DOCTOR">{children}</DashboardLayout>
  );
}
