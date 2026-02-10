import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  MoreVertical,
  Filter,
  Shield,
  UserCheck,
  UserX,
  Users as UsersIcon,
} from "lucide-react";

const mockUsers = [
  { id: 1, name: "Adebayo Johnson", email: "adebayo@greenfield.edu.ng", role: "School Admin", school: "Greenfield Academy", status: "Active", lastLogin: "2 hrs ago" },
  { id: 2, name: "Fatima Usman", email: "fatima@royal.edu.ng", role: "School Admin", school: "Royal International", status: "Active", lastLogin: "1 hr ago" },
  { id: 3, name: "Chinedu Okafor", email: "chinedu@stthomas.edu.ng", role: "Teacher", school: "St. Thomas College", status: "Active", lastLogin: "30 min ago" },
  { id: 4, name: "Amina Bello", email: "amina@crescent.edu.ng", role: "Parent", school: "Crescent High School", status: "Active", lastLogin: "5 hrs ago" },
  { id: 5, name: "Oluwaseun Ade", email: "seun@koredu.com", role: "Super Admin", school: "—", status: "Active", lastLogin: "Just now" },
  { id: 6, name: "Grace Eze", email: "grace@victory.edu.ng", role: "Teacher", school: "Victory Academy", status: "Suspended", lastLogin: "2 days ago" },
  { id: 7, name: "Ibrahim Musa", email: "ibrahim@sunrise.edu.ng", role: "Student", school: "Sunrise International", status: "Active", lastLogin: "1 day ago" },
  { id: 8, name: "Blessing Nwosu", email: "blessing@horizon.edu.ng", role: "School Admin", school: "Horizon Academy", status: "Inactive", lastLogin: "1 week ago" },
];

const roleColors: Record<string, string> = {
  "Super Admin": "bg-primary/10 text-primary",
  "School Admin": "bg-blue-100 text-blue-700",
  Teacher: "bg-amber-100 text-amber-700",
  Parent: "bg-purple-100 text-purple-700",
  Student: "bg-emerald-100 text-emerald-700",
};

const statusColors: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Suspended: "bg-destructive/10 text-destructive",
  Inactive: "bg-muted text-muted-foreground",
};

const statCards = [
  { title: "Total Users", value: "84,392", icon: UsersIcon },
  { title: "Active Now", value: "12,847", icon: UserCheck },
  { title: "Suspended", value: "234", icon: UserX },
  { title: "Super Admins", value: "5", icon: Shield },
];

export function UserManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = mockUsers.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold font-display text-foreground">User Management</h1>
            <p className="text-muted-foreground mt-1">View and manage all users across the platform.</p>
          </div>
          <Button variant="default" className="gap-2">
            <Plus className="w-4 h-4" />
            Add User
          </Button>
        </div>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => (
          <motion.div key={stat.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.title}</p>
                  <p className="text-xl font-bold font-display text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or role..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">User</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Role</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">School</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Last Login</th>
                  <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user, i) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">
                            {user.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${roleColors[user.role] || "bg-muted text-muted-foreground"}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{user.school}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[user.status]}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{user.lastLogin}</td>
                    <td className="px-5 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
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
