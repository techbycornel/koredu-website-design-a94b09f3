import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  School,
  Users,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  GraduationCap,
  UserCheck,
  Clock,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, BarChart, Bar } from "recharts";

const stats = [
  {
    title: "Total Schools",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: School,
    description: "vs last month",
  },
  {
    title: "Total Users",
    value: "84,392",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Monthly Revenue",
    value: "₦48.2M",
    change: "+15.3%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month",
  },
  {
    title: "Active Subscriptions",
    value: "1,089",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
    description: "vs last month",
  },
];

const revenueData = [
  { month: "Jul", revenue: 32000000, schools: 980 },
  { month: "Aug", revenue: 34500000, schools: 1020 },
  { month: "Sep", revenue: 38000000, schools: 1060 },
  { month: "Oct", revenue: 41200000, schools: 1120 },
  { month: "Nov", revenue: 44800000, schools: 1180 },
  { month: "Dec", revenue: 43000000, schools: 1200 },
  { month: "Jan", revenue: 48200000, schools: 1247 },
];

const revenueConfig: ChartConfig = {
  revenue: { label: "Revenue (₦)", color: "hsl(var(--primary))" },
};

const schoolsByType = [
  { type: "Primary", count: 520 },
  { type: "Secondary", count: 430 },
  { type: "Tertiary", count: 180 },
  { type: "Others", count: 117 },
];

const schoolTypeConfig: ChartConfig = {
  count: { label: "Schools", color: "hsl(var(--primary))" },
};

const recentActivity = [
  { action: "New school registered", detail: "Greenfield Academy — Lagos", time: "2 min ago", icon: School },
  { action: "Subscription upgraded", detail: "Royal Academy — Premium Plan", time: "15 min ago", icon: TrendingUp },
  { action: "New admin created", detail: "admin@stmary.edu.ng", time: "1 hr ago", icon: UserCheck },
  { action: "Payment received", detail: "₦350,000 — St. Thomas College", time: "2 hrs ago", icon: DollarSign },
  { action: "Support ticket opened", detail: "Ticket #4892 — Login issue", time: "3 hrs ago", icon: Activity },
];

const topSchools = [
  { name: "Greenfield Academy", location: "Lagos", students: 2450, plan: "Premium" },
  { name: "Royal International School", location: "Abuja", students: 1890, plan: "Premium" },
  { name: "St. Thomas College", location: "Port Harcourt", students: 1650, plan: "Standard" },
  { name: "Crescent High School", location: "Kano", students: 1420, plan: "Premium" },
  { name: "Victory Academy", location: "Ibadan", students: 1200, plan: "Standard" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold font-display text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back, Super Admin. Here's what's happening across the platform.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Card className="hover:shadow-koredu transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span
                    className={`flex items-center gap-1 text-xs font-semibold ${
                      stat.trend === "up" ? "text-emerald-600" : "text-destructive"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueConfig} className="h-[280px] w-full">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} tickFormatter={(v) => `₦${(v / 1000000).toFixed(0)}M`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#revGradient)" strokeWidth={2} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Schools by Type */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Schools by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={schoolTypeConfig} className="h-[280px] w-full">
              <BarChart data={schoolsByType} layout="vertical">
                <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis dataKey="type" type="category" tickLine={false} axisLine={false} fontSize={12} width={70} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Activity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{item.action}</p>
                  <p className="text-xs text-muted-foreground truncate">{item.detail}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Schools */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Top Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid grid-cols-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider pb-2 border-b border-border">
                <span className="col-span-1">School</span>
                <span>Location</span>
                <span className="text-right">Students</span>
                <span className="text-right">Plan</span>
              </div>
              {topSchools.map((school, i) => (
                <div key={i} className="grid grid-cols-4 items-center text-sm py-1.5">
                  <span className="font-medium text-foreground truncate col-span-1 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                    <span className="truncate">{school.name}</span>
                  </span>
                  <span className="text-muted-foreground">{school.location}</span>
                  <span className="text-right text-foreground font-medium">{school.students.toLocaleString()}</span>
                  <span className="text-right">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      school.plan === "Premium"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {school.plan}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
