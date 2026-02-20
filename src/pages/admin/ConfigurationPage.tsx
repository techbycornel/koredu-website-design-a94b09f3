import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Shield,
  Plus,
  Search,
  Edit2,
  Trash2,
  Users,
  ShieldCheck,
  ShieldAlert,
  GraduationCap,
  UserCheck,
  Baby,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Permission categories & items ────────────────────────────
const permissionCategories = [
  {
    name: "Dashboard",
    permissions: [
      { key: "dashboard.view", label: "View dashboard" },
      { key: "dashboard.analytics", label: "View analytics" },
      { key: "dashboard.export", label: "Export reports" },
    ],
  },
  {
    name: "Schools",
    permissions: [
      { key: "schools.view", label: "View schools" },
      { key: "schools.create", label: "Create schools" },
      { key: "schools.edit", label: "Edit schools" },
      { key: "schools.delete", label: "Delete schools" },
      { key: "schools.suspend", label: "Suspend schools" },
    ],
  },
  {
    name: "Users",
    permissions: [
      { key: "users.view", label: "View users" },
      { key: "users.create", label: "Create users" },
      { key: "users.edit", label: "Edit users" },
      { key: "users.delete", label: "Delete users" },
      { key: "users.roles", label: "Manage roles" },
    ],
  },
  {
    name: "Financials",
    permissions: [
      { key: "financials.view", label: "View financials" },
      { key: "financials.manage", label: "Manage billing" },
      { key: "financials.refund", label: "Process refunds" },
    ],
  },
  {
    name: "Content",
    permissions: [
      { key: "content.view", label: "View content" },
      { key: "content.create", label: "Create content" },
      { key: "content.edit", label: "Edit content" },
      { key: "content.delete", label: "Delete content" },
      { key: "content.publish", label: "Publish content" },
    ],
  },
  {
    name: "Configuration",
    permissions: [
      { key: "config.view", label: "View configuration" },
      { key: "config.roles", label: "Manage roles" },
      { key: "config.system", label: "System settings" },
    ],
  },
];

const allPermissionKeys = permissionCategories.flatMap((c) =>
  c.permissions.map((p) => p.key)
);

// ─── Role icons ───────────────────────────────────────────────
const roleIconMap: Record<string, React.ElementType> = {
  super_admin: ShieldAlert,
  school_admin: ShieldCheck,
  teacher: GraduationCap,
  parent: Baby,
  student: UserCheck,
};

const roleColorMap: Record<string, string> = {
  super_admin: "bg-destructive/10 text-destructive border-destructive/20",
  school_admin: "bg-primary/10 text-primary border-primary/20",
  teacher: "bg-accent/10 text-accent border-accent/20",
  parent: "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20",
  student: "bg-primary/10 text-primary border-primary/20",
};

// ─── Mock roles ───────────────────────────────────────────────
interface Role {
  id: string;
  name: string;
  slug: string;
  description: string;
  usersCount: number;
  isSystem: boolean;
  permissions: string[];
}

const initialRoles: Role[] = [
  {
    id: "1",
    name: "Super Admin",
    slug: "super_admin",
    description: "Full system access with all permissions. Cannot be modified.",
    usersCount: 2,
    isSystem: true,
    permissions: [...allPermissionKeys],
  },
  {
    id: "2",
    name: "School Admin",
    slug: "school_admin",
    description: "Manages a single school including users, content, and billing.",
    usersCount: 45,
    isSystem: true,
    permissions: [
      "dashboard.view",
      "dashboard.analytics",
      "dashboard.export",
      "schools.view",
      "schools.edit",
      "users.view",
      "users.create",
      "users.edit",
      "users.roles",
      "financials.view",
      "financials.manage",
      "content.view",
      "content.create",
      "content.edit",
      "content.publish",
    ],
  },
  {
    id: "3",
    name: "Teacher",
    slug: "teacher",
    description: "Creates and manages learning content, views student progress.",
    usersCount: 320,
    isSystem: true,
    permissions: [
      "dashboard.view",
      "dashboard.analytics",
      "users.view",
      "content.view",
      "content.create",
      "content.edit",
      "content.publish",
    ],
  },
  {
    id: "4",
    name: "Parent",
    slug: "parent",
    description: "Views child progress, manages payment, communicates with school.",
    usersCount: 1250,
    isSystem: true,
    permissions: [
      "dashboard.view",
      "financials.view",
      "content.view",
    ],
  },
  {
    id: "5",
    name: "Student",
    slug: "student",
    description: "Accesses assigned content, takes assessments, views own progress.",
    usersCount: 4800,
    isSystem: true,
    permissions: [
      "dashboard.view",
      "content.view",
    ],
  },
];

// ─── Component ────────────────────────────────────────────────
export function ConfigurationPage() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [selectedRole, setSelectedRole] = useState<Role>(roles[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newRoleName, setNewRoleName] = useState("");
  const [newRoleDesc, setNewRoleDesc] = useState("");
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const filteredRoles = useMemo(
    () =>
      roles.filter(
        (r) =>
          r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [roles, searchQuery]
  );

  const togglePermission = (permKey: string) => {
    if (selectedRole.isSystem && selectedRole.slug === "super_admin") return;

    setRoles((prev) =>
      prev.map((r) => {
        if (r.id !== selectedRole.id) return r;
        const updated = r.permissions.includes(permKey)
          ? r.permissions.filter((p) => p !== permKey)
          : [...r.permissions, permKey];
        return { ...r, permissions: updated };
      })
    );
    setSelectedRole((prev) => {
      const updated = prev.permissions.includes(permKey)
        ? prev.permissions.filter((p) => p !== permKey)
        : [...prev.permissions, permKey];
      return { ...prev, permissions: updated };
    });
  };

  const toggleCategory = (category: typeof permissionCategories[0]) => {
    if (selectedRole.isSystem && selectedRole.slug === "super_admin") return;
    const catKeys = category.permissions.map((p) => p.key);
    const allEnabled = catKeys.every((k) => selectedRole.permissions.includes(k));

    setRoles((prev) =>
      prev.map((r) => {
        if (r.id !== selectedRole.id) return r;
        const updated = allEnabled
          ? r.permissions.filter((p) => !catKeys.includes(p))
          : [...new Set([...r.permissions, ...catKeys])];
        return { ...r, permissions: updated };
      })
    );
    setSelectedRole((prev) => {
      const updated = allEnabled
        ? prev.permissions.filter((p) => !catKeys.includes(p))
        : [...new Set([...prev.permissions, ...catKeys])];
      return { ...prev, permissions: updated };
    });
  };

  const handleAddRole = () => {
    if (!newRoleName.trim()) return;
    const slug = newRoleName.toLowerCase().replace(/\s+/g, "_");
    const newRole: Role = {
      id: Date.now().toString(),
      name: newRoleName.trim(),
      slug,
      description: newRoleDesc.trim() || "Custom role",
      usersCount: 0,
      isSystem: false,
      permissions: ["dashboard.view"],
    };
    setRoles((prev) => [...prev, newRole]);
    setNewRoleName("");
    setNewRoleDesc("");
    setDialogOpen(false);
    setSelectedRole(newRole);
  };

  const handleDeleteRole = (roleId: string) => {
    const role = roles.find((r) => r.id === roleId);
    if (!role || role.isSystem) return;
    setRoles((prev) => prev.filter((r) => r.id !== roleId));
    if (selectedRole.id === roleId) setSelectedRole(roles[0]);
  };

  const RoleIcon = roleIconMap[selectedRole.slug] || Shield;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">
            Roles & Permissions
          </h1>
          <p className="text-muted-foreground mt-1">
            Configure user roles and their access permissions across the platform.
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4" />
              Add Role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
              <DialogDescription>
                Define a custom role with specific permissions.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Role Name</Label>
                <Input
                  placeholder="e.g. Content Manager"
                  value={newRoleName}
                  onChange={(e) => setNewRoleName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input
                  placeholder="Brief description of this role"
                  value={newRoleDesc}
                  onChange={(e) => setNewRoleDesc(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddRole} disabled={!newRoleName.trim()}>
                Create Role
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Role list */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search roles…"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {filteredRoles.map((role) => {
              const Icon = roleIconMap[role.slug] || Shield;
              const isActive = selectedRole.id === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-200",
                    isActive
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card hover:border-primary/30 hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                          roleColorMap[role.slug] || "bg-muted text-muted-foreground"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">
                          {role.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                          {role.description}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      <Users className="w-3 h-3 mr-1" />
                      {role.usersCount}
                    </Badge>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Permission editor */}
        <div className="lg:col-span-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      roleColorMap[selectedRole.slug] || "bg-muted text-muted-foreground"
                    )}
                  >
                    <RoleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{selectedRole.name}</CardTitle>
                    <CardDescription>{selectedRole.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {selectedRole.isSystem && (
                    <Badge variant="outline" className="text-xs">
                      System Role
                    </Badge>
                  )}
                  {!selectedRole.isSystem && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDeleteRole(selectedRole.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
              {selectedRole.slug === "super_admin" && (
                <p className="text-xs text-muted-foreground bg-muted px-3 py-2 rounded-lg mt-3">
                  Super Admin has all permissions enabled and cannot be modified.
                </p>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {permissionCategories.map((category) => {
                  const catKeys = category.permissions.map((p) => p.key);
                  const enabledCount = catKeys.filter((k) =>
                    selectedRole.permissions.includes(k)
                  ).length;
                  const allEnabled = enabledCount === catKeys.length;
                  const isSuperAdmin = selectedRole.slug === "super_admin";

                  return (
                    <div key={category.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold text-foreground">
                            {category.name}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {enabledCount}/{catKeys.length}
                          </span>
                        </div>
                        <button
                          onClick={() => toggleCategory(category)}
                          disabled={isSuperAdmin}
                          className={cn(
                            "text-xs font-medium transition-colors",
                            isSuperAdmin
                              ? "text-muted-foreground/40 cursor-not-allowed"
                              : "text-primary hover:text-primary/80 cursor-pointer"
                          )}
                        >
                          {allEnabled ? "Revoke all" : "Grant all"}
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.permissions.map((perm) => {
                          const enabled = selectedRole.permissions.includes(perm.key);
                          return (
                            <div
                              key={perm.key}
                              className={cn(
                                "flex items-center justify-between p-3 rounded-lg border transition-colors",
                                enabled
                                  ? "bg-primary/5 border-primary/20"
                                  : "bg-card border-border"
                              )}
                            >
                              <Label
                                className="text-sm cursor-pointer"
                                htmlFor={`perm-${perm.key}`}
                              >
                                {perm.label}
                              </Label>
                              <Switch
                                id={`perm-${perm.key}`}
                                checked={enabled}
                                onCheckedChange={() => togglePermission(perm.key)}
                                disabled={isSuperAdmin}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
