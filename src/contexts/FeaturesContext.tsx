import { createContext, useContext, useState, ReactNode } from "react";

export interface FeaturePermission {
  key: string;
  label: string;
}

export interface FeatureModule {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  permissions: FeaturePermission[];
}

interface FeaturesContextType {
  features: FeatureModule[];
  addFeature: (feature: FeatureModule) => void;
  updateFeature: (id: string, feature: Partial<FeatureModule>) => void;
  deleteFeature: (id: string) => void;
}

const defaultFeatures: FeatureModule[] = [
  {
    id: "feat-dashboard",
    name: "Dashboard",
    slug: "dashboard",
    description: "Overview analytics and reporting tools",
    icon: "LayoutDashboard",
    permissions: [
      { key: "dashboard.view", label: "View dashboard" },
      { key: "dashboard.analytics", label: "View analytics" },
      { key: "dashboard.export", label: "Export reports" },
    ],
  },
  {
    id: "feat-schools",
    name: "Schools",
    slug: "schools",
    description: "School management and administration",
    icon: "School",
    permissions: [
      { key: "schools.view", label: "View schools" },
      { key: "schools.create", label: "Create schools" },
      { key: "schools.edit", label: "Edit schools" },
      { key: "schools.delete", label: "Delete schools" },
      { key: "schools.suspend", label: "Suspend schools" },
    ],
  },
  {
    id: "feat-users",
    name: "Users",
    slug: "users",
    description: "User management and role assignment",
    icon: "Users",
    permissions: [
      { key: "users.view", label: "View users" },
      { key: "users.create", label: "Create users" },
      { key: "users.edit", label: "Edit users" },
      { key: "users.delete", label: "Delete users" },
      { key: "users.roles", label: "Manage roles" },
    ],
  },
  {
    id: "feat-financials",
    name: "Financials",
    slug: "financials",
    description: "Billing, payments, and financial reporting",
    icon: "DollarSign",
    permissions: [
      { key: "financials.view", label: "View financials" },
      { key: "financials.manage", label: "Manage billing" },
      { key: "financials.refund", label: "Process refunds" },
    ],
  },
  {
    id: "feat-content",
    name: "Content",
    slug: "content",
    description: "Learning content creation and publishing",
    icon: "BookOpen",
    permissions: [
      { key: "content.view", label: "View content" },
      { key: "content.create", label: "Create content" },
      { key: "content.edit", label: "Edit content" },
      { key: "content.delete", label: "Delete content" },
      { key: "content.publish", label: "Publish content" },
    ],
  },
  {
    id: "feat-config",
    name: "Configuration",
    slug: "config",
    description: "System configuration and settings",
    icon: "Settings",
    permissions: [
      { key: "config.view", label: "View configuration" },
      { key: "config.roles", label: "Manage roles" },
      { key: "config.system", label: "System settings" },
    ],
  },
];

const FeaturesContext = createContext<FeaturesContextType | null>(null);

export function FeaturesProvider({ children }: { children: ReactNode }) {
  const [features, setFeatures] = useState<FeatureModule[]>(defaultFeatures);

  const addFeature = (feature: FeatureModule) => {
    setFeatures((prev) => [...prev, feature]);
  };

  const updateFeature = (id: string, updates: Partial<FeatureModule>) => {
    setFeatures((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updates } : f))
    );
  };

  const deleteFeature = (id: string) => {
    setFeatures((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <FeaturesContext.Provider value={{ features, addFeature, updateFeature, deleteFeature }}>
      {children}
    </FeaturesContext.Provider>
  );
}

export function useFeatures() {
  const ctx = useContext(FeaturesContext);
  if (!ctx) throw new Error("useFeatures must be used within FeaturesProvider");
  return ctx;
}
