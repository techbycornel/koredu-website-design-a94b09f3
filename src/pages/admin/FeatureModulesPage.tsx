import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  Plus,
  Search,
  Trash2,
  Edit2,
  X,
  LayoutDashboard,
  School,
  Users,
  DollarSign,
  BookOpen,
  Settings,
  Shield,
  FileText,
  Bell,
  BarChart3,
  MessageSquare,
  Calendar,
  Folder,
  Globe,
  Lock,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useFeatures, type FeatureModule, type FeaturePermission } from "@/contexts/FeaturesContext";

// Available icons for feature modules
const iconOptions = [
  { value: "LayoutDashboard", label: "Dashboard", Icon: LayoutDashboard },
  { value: "School", label: "School", Icon: School },
  { value: "Users", label: "Users", Icon: Users },
  { value: "DollarSign", label: "Dollar", Icon: DollarSign },
  { value: "BookOpen", label: "Book", Icon: BookOpen },
  { value: "Settings", label: "Settings", Icon: Settings },
  { value: "Shield", label: "Shield", Icon: Shield },
  { value: "FileText", label: "File", Icon: FileText },
  { value: "Bell", label: "Bell", Icon: Bell },
  { value: "BarChart3", label: "Chart", Icon: BarChart3 },
  { value: "MessageSquare", label: "Message", Icon: MessageSquare },
  { value: "Calendar", label: "Calendar", Icon: Calendar },
  { value: "Folder", label: "Folder", Icon: Folder },
  { value: "Globe", label: "Globe", Icon: Globe },
  { value: "Lock", label: "Lock", Icon: Lock },
  { value: "Zap", label: "Zap", Icon: Zap },
];

const getIconComponent = (iconName: string) => {
  return iconOptions.find((i) => i.value === iconName)?.Icon || Shield;
};

export function FeatureModulesPage() {
  const { features, addFeature, updateFeature, deleteFeature } = useFeatures();
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingFeature, setEditingFeature] = useState<FeatureModule | null>(null);

  // Form state
  const [formName, setFormName] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formIcon, setFormIcon] = useState("Shield");
  const [formPermissions, setFormPermissions] = useState<FeaturePermission[]>([]);
  const [newPermLabel, setNewPermLabel] = useState("");

  const filteredFeatures = features.filter(
    (f) =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetForm = () => {
    setFormName("");
    setFormDesc("");
    setFormIcon("Shield");
    setFormPermissions([]);
    setNewPermLabel("");
    setEditingFeature(null);
  };

  const openCreateDialog = () => {
    resetForm();
    setDialogOpen(true);
  };

  const openEditDialog = (feature: FeatureModule) => {
    setEditingFeature(feature);
    setFormName(feature.name);
    setFormDesc(feature.description);
    setFormIcon(feature.icon);
    setFormPermissions([...feature.permissions]);
    setDialogOpen(true);
  };

  const addPermission = () => {
    if (!newPermLabel.trim()) return;
    const slug = formName.toLowerCase().replace(/\s+/g, "_") || "feature";
    const permKey = `${slug}.${newPermLabel.toLowerCase().replace(/\s+/g, "_")}`;
    setFormPermissions((prev) => [...prev, { key: permKey, label: newPermLabel.trim() }]);
    setNewPermLabel("");
  };

  const removePermission = (key: string) => {
    setFormPermissions((prev) => prev.filter((p) => p.key !== key));
  };

  const handleSave = () => {
    if (!formName.trim()) return;
    const slug = formName.toLowerCase().replace(/\s+/g, "_");

    if (editingFeature) {
      // Recompute permission keys if name changed
      const updatedPerms = formPermissions.map((p) => ({
        ...p,
        key: `${slug}.${p.key.split(".").pop()}`,
      }));
      updateFeature(editingFeature.id, {
        name: formName.trim(),
        slug,
        description: formDesc.trim(),
        icon: formIcon,
        permissions: updatedPerms,
      });
    } else {
      const newFeature: FeatureModule = {
        id: `feat-${Date.now()}`,
        name: formName.trim(),
        slug,
        description: formDesc.trim() || "Custom feature module",
        icon: formIcon,
        permissions: formPermissions.map((p) => ({
          ...p,
          key: `${slug}.${p.key.split(".").pop() || p.label.toLowerCase().replace(/\s+/g, "_")}`,
        })),
      };
      addFeature(newFeature);
    }

    setDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    deleteFeature(id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">
            Feature Modules
          </h1>
          <p className="text-muted-foreground mt-1">
            Define system features and their permissions. These appear in the Roles & Permissions editor.
          </p>
        </div>
        <Button onClick={openCreateDialog}>
          <Plus className="w-4 h-4" />
          Add Module
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search modules…"
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredFeatures.map((feature) => {
          const Icon = getIconComponent(feature.icon);
          return (
            <Card key={feature.id} className="group relative">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{feature.name}</CardTitle>
                      <CardDescription className="text-xs mt-0.5">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => openEditDialog(feature)}
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDelete(feature.id)}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {feature.permissions.map((perm) => (
                    <Badge key={perm.key} variant="secondary" className="text-xs font-normal">
                      {perm.label}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  {feature.permissions.length} permission{feature.permissions.length !== 1 ? "s" : ""}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredFeatures.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Shield className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p className="font-medium">No modules found</p>
          <p className="text-sm mt-1">Create a feature module to get started.</p>
        </div>
      )}

      {/* Create / Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) resetForm(); }}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingFeature ? "Edit Module" : "Create Feature Module"}</DialogTitle>
            <DialogDescription>
              {editingFeature
                ? "Update this feature module and its permissions."
                : "Define a new feature module with its permissions."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="grid grid-cols-[1fr_auto] gap-3">
              <div className="space-y-2">
                <Label>Module Name</Label>
                <Input
                  placeholder="e.g. Reports"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Icon</Label>
                <Select value={formIcon} onValueChange={setFormIcon}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {iconOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        <div className="flex items-center gap-2">
                          <opt.Icon className="w-4 h-4" />
                          <span className="text-xs">{opt.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Brief description of this feature module"
                value={formDesc}
                onChange={(e) => setFormDesc(e.target.value)}
                rows={2}
              />
            </div>

            {/* Permissions builder */}
            <div className="space-y-2">
              <Label>Permissions</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g. View reports"
                  value={newPermLabel}
                  onChange={(e) => setNewPermLabel(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addPermission())}
                />
                <Button type="button" variant="outline" size="sm" onClick={addPermission} disabled={!newPermLabel.trim()}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {formPermissions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formPermissions.map((perm) => (
                    <Badge key={perm.key} variant="secondary" className="gap-1 pr-1">
                      {perm.label}
                      <button
                        onClick={() => removePermission(perm.key)}
                        className="ml-1 rounded-full hover:bg-muted p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
              {formPermissions.length === 0 && (
                <p className="text-xs text-muted-foreground">
                  Add permissions that will be available to assign to roles.
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => { setDialogOpen(false); resetForm(); }}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!formName.trim()}>
              {editingFeature ? "Save Changes" : "Create Module"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
