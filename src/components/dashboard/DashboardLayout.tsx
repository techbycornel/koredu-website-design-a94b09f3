import { ReactNode } from "react";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopBar } from "./DashboardTopBar";
import { cn } from "@/lib/utils";

function DashboardContent({ children }: { children: ReactNode }) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardSidebar />
      <DashboardTopBar />
      <main
        className={cn(
          "pt-16 min-h-screen transition-all duration-300",
          collapsed ? "ml-[70px]" : "ml-[260px]"
        )}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
