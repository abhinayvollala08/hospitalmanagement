import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout requiredRole="EDITOR">{children}</DashboardLayout>
  );
}
