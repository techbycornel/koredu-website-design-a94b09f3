import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Receipt,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, BarChart, Bar } from "recharts";

const financialStats = [
  { title: "Total Revenue", value: "₦482M", change: "+15.3%", trend: "up", icon: DollarSign, desc: "All-time" },
  { title: "Monthly Revenue", value: "₦48.2M", change: "+12%", trend: "up", icon: TrendingUp, desc: "This month" },
  { title: "Outstanding", value: "₦8.4M", change: "-5%", trend: "down", icon: Receipt, desc: "Pending payments" },
  { title: "Active Plans", value: "1,089", change: "+3.2%", trend: "up", icon: CreditCard, desc: "Subscriptions" },
];

const monthlyRevenue = [
  { month: "Aug", revenue: 34500000, expenses: 12000000 },
  { month: "Sep", revenue: 38000000, expenses: 13500000 },
  { month: "Oct", revenue: 41200000, expenses: 14000000 },
  { month: "Nov", revenue: 44800000, expenses: 15200000 },
  { month: "Dec", revenue: 43000000, expenses: 14800000 },
  { month: "Jan", revenue: 48200000, expenses: 16000000 },
];

const revenueConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--primary))" },
  expenses: { label: "Expenses", color: "hsl(var(--destructive))" },
};

const planDistribution = [
  { plan: "Premium", schools: 420, revenue: 25200000 },
  { plan: "Standard", schools: 480, revenue: 16800000 },
  { plan: "Basic", schools: 189, revenue: 3780000 },
  { plan: "Trial", schools: 158, revenue: 0 },
];

const planConfig: ChartConfig = {
  revenue: { label: "Revenue (₦)", color: "hsl(var(--primary))" },
};

const recentPayments = [
  { school: "Greenfield Academy", amount: "₦450,000", date: "Feb 10, 2026", status: "Completed", plan: "Premium" },
  { school: "Royal International", amount: "₦450,000", date: "Feb 9, 2026", status: "Completed", plan: "Premium" },
  { school: "Unity College", amount: "₦350,000", date: "Feb 8, 2026", status: "Pending", plan: "Standard" },
  { school: "Crescent High School", amount: "₦450,000", date: "Feb 7, 2026", status: "Completed", plan: "Premium" },
  { school: "Sunrise International", amount: "₦150,000", date: "Feb 6, 2026", status: "Failed", plan: "Basic" },
  { school: "Horizon Academy", amount: "₦350,000", date: "Feb 5, 2026", status: "Completed", plan: "Standard" },
];

const paymentStatusColors: Record<string, string> = {
  Completed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Failed: "bg-destructive/10 text-destructive",
};

export function FinancialOverview() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <h1 className="text-2xl font-bold font-display text-foreground">Financial Overview</h1>
        <p className="text-muted-foreground mt-1">Track revenue, subscriptions, and payment activity.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {financialStats.map((stat, i) => (
          <motion.div key={stat.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="hover:shadow-koredu transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-semibold ${stat.trend === "up" ? "text-emerald-600" : "text-destructive"}`}>
                    {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Revenue vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueConfig} className="h-[300px] w-full">
              <AreaChart data={monthlyRevenue}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} tickFormatter={(v) => `₦${(v / 1000000).toFixed(0)}M`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#revGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="expenses" stroke="hsl(var(--destructive))" fill="url(#expGrad)" strokeWidth={2} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Revenue by Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={planConfig} className="h-[300px] w-full">
              <BarChart data={planDistribution}>
                <XAxis dataKey="plan" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} tickFormatter={(v) => `₦${(v / 1000000).toFixed(0)}M`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Payments */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Recent Payments</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">School</th>
                  <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Amount</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Date</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Plan</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map((payment, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{payment.school}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-foreground text-right">{payment.amount}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{payment.date}</td>
                    <td className="px-5 py-4">
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-primary/10 text-primary">{payment.plan}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${paymentStatusColors[payment.status]}`}>{payment.status}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
