import { Bell, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function DashboardTopBar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 h-16 bg-background/80 backdrop-blur-lg border-b border-border/50 flex items-center justify-between px-6 transition-all duration-300",
        collapsed ? "left-[70px]" : "left-[260px]"
      )}
    >
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search schools, users, reports..."
          className="pl-10 bg-muted/50 border-none h-10 rounded-xl"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        {/* Profile */}
        <button className="flex items-center gap-3 px-3 py-1.5 rounded-xl hover:bg-muted transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">SA</span>
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-foreground leading-tight">Super Admin</p>
            <p className="text-xs text-muted-foreground leading-tight">admin@koredu.com</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground hidden md:block" />
        </button>
      </div>
    </header>
  );
}
