import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { useSidebar } from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  School,
  Users,
  DollarSign,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronDown,
  ShieldCheck,
  Puzzle,
  Shield,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const mainNav = [
  { title: "Overview", href: "/admin", icon: LayoutDashboard },
  { title: "Schools", href: "/admin/schools", icon: School },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Financials", href: "/admin/financials", icon: DollarSign },
];

const configSubNav = [
  { title: "Roles & Permissions", href: "/admin/configuration/roles", icon: ShieldCheck },
  { title: "Features", href: "/admin/configuration/features", icon: Puzzle },
  { title: "Subscription Plans", href: "/admin/configuration/plans", icon: Crown },
];

const bottomNav = [
  { title: "Settings", href: "/admin/settings", icon: Settings },
  { title: "Help", href: "/admin/help", icon: HelpCircle },
];

export function DashboardSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const isConfigActive = location.pathname.startsWith("/admin/configuration");
  const [configOpen, setConfigOpen] = useState(isConfigActive);

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-bold text-lg font-display">K</span>
          </div>
          {!collapsed && (
            <span className="text-xl font-bold font-display text-sidebar-foreground whitespace-nowrap">
              Koredu
            </span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className={cn(
            "p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground/60 hover:text-sidebar-foreground shrink-0",
            collapsed && "rotate-180"
          )}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <p className={cn("text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/40 mb-3", collapsed ? "px-0 text-center" : "px-3")}>
          {collapsed ? "•••" : "Main"}
        </p>
        {mainNav.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === "/admin"}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors",
              collapsed && "justify-center px-0"
            )}
            activeClassName="bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        ))}

        {/* Configuration collapsible group */}
        <div className="mt-1">
          <button
            onClick={() => {
              if (collapsed) return;
              setConfigOpen((prev) => !prev);
            }}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
              isConfigActive
                ? "text-primary bg-primary/5"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
              collapsed && "justify-center px-0"
            )}
          >
            <Shield className="w-5 h-5 shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">Configuration</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    configOpen && "rotate-180"
                  )}
                />
              </>
            )}
          </button>
          {!collapsed && configOpen && (
            <div className="ml-5 mt-1 space-y-0.5 border-l border-sidebar-border pl-3">
              {configSubNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
                  activeClassName="bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  <span>{item.title}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="py-4 px-3 border-t border-sidebar-border space-y-1">
        {bottomNav.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors",
              collapsed && "justify-center px-0"
            )}
            activeClassName="bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        ))}
        <button
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive/70 hover:bg-destructive/10 hover:text-destructive transition-colors w-full",
            collapsed && "justify-center px-0"
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
