import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  MoreVertical,
  MapPin,
  Users,
  GraduationCap,
  Filter,
} from "lucide-react";

const mockSchools = [
  { id: 1, name: "Greenfield Academy", type: "Secondary", location: "Lagos", students: 2450, staff: 120, plan: "Premium", status: "Active", joined: "Jan 2024" },
  { id: 2, name: "Royal International School", type: "Primary", location: "Abuja", students: 1890, staff: 95, plan: "Premium", status: "Active", joined: "Mar 2024" },
  { id: 3, name: "St. Thomas College", type: "Tertiary", location: "Port Harcourt", students: 1650, staff: 88, plan: "Standard", status: "Active", joined: "Feb 2024" },
  { id: 4, name: "Crescent High School", type: "Secondary", location: "Kano", students: 1420, staff: 72, plan: "Premium", status: "Active", joined: "Apr 2024" },
  { id: 5, name: "Victory Academy", type: "Primary", location: "Ibadan", students: 1200, staff: 64, plan: "Standard", status: "Suspended", joined: "May 2024" },
  { id: 6, name: "Sunrise International", type: "Secondary", location: "Enugu", students: 980, staff: 52, plan: "Basic", status: "Active", joined: "Jun 2024" },
  { id: 7, name: "Horizon Academy", type: "Primary", location: "Benin", students: 860, staff: 45, plan: "Standard", status: "Active", joined: "Jul 2024" },
  { id: 8, name: "Unity College", type: "Tertiary", location: "Kaduna", students: 2100, staff: 110, plan: "Premium", status: "Pending", joined: "Aug 2024" },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Suspended: "bg-destructive/10 text-destructive",
  Pending: "bg-amber-100 text-amber-700",
};

export function SchoolManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = mockSchools.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold font-display text-foreground">School Management</h1>
            <p className="text-muted-foreground mt-1">Manage all registered schools on the platform.</p>
          </div>
          <Button variant="default" className="gap-2">
            <Plus className="w-4 h-4" />
            Add School
          </Button>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or location..."
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
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">School</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Type</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Location</th>
                  <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Students</th>
                  <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Staff</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Plan</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((school, i) => (
                  <motion.tr
                    key={school.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{school.name}</p>
                          <p className="text-xs text-muted-foreground">Joined {school.joined}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{school.type}</td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {school.location}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-foreground font-medium text-right">{school.students.toLocaleString()}</td>
                    <td className="px-5 py-4 text-sm text-foreground font-medium text-right">{school.staff}</td>
                    <td className="px-5 py-4">
                      <Badge variant="secondary" className="font-medium text-xs">{school.plan}</Badge>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[school.status]}`}>
                        {school.status}
                      </span>
                    </td>
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
