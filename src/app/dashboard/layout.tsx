import DashboardSidebar from "@/components/dashboard-sidebar";
import DashboardHeader from "@/components/dashboard-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col">
            <DashboardHeader />
            <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-muted/40 overflow-y-auto">
                {children}
            </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
