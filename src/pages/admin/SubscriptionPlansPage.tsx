import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
  Crown,
  Zap,
  Star,
  Check,
  Users,
  GripVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useFeatures } from "@/contexts/FeaturesContext";

// ─── Types ────────────────────────────────────────────────────
interface PlanFeature {
  id: string;
  label: string;
  included: boolean;
  limit?: string;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  slug: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  currency: string;
  isPopular: boolean;
  isActive: boolean;
  subscriberCount: number;
  features: PlanFeature[];
  limits: {
    students: number | null;
    sms: number | null;
    cbt: number | null;
    storage: string;
  };
}

const tierIcons: Record<string, React.ElementType> = {
  starter: Zap,
  professional: Star,
  enterprise: Crown,
};

const tierColors: Record<string, string> = {
  starter: "bg-accent/10 text-accent border-accent/20",
  professional: "bg-primary/10 text-primary border-primary/20",
  enterprise: "bg-secondary/10 text-secondary border-secondary/20",
};

// ─── Mock data ────────────────────────────────────────────────
const initialPlans: SubscriptionPlan[] = [
  {
    id: "1",
    name: "Starter",
    slug: "starter",
    description: "Perfect for small schools just getting started with digital management.",
    monthlyPrice: 15000,
    annualPrice: 150000,
    currency: "NGN",
    isPopular: false,
    isActive: true,
    subscriberCount: 124,
    features: [
      { id: "f1", label: "Student management", included: true },
      { id: "f2", label: "Basic reporting", included: true },
      { id: "f3", label: "Parent portal", included: true },
      { id: "f4", label: "SMS notifications", included: true, limit: "500/month" },
      { id: "f5", label: "CBT assessments", included: false },
      { id: "f6", label: "Advanced analytics", included: false },
      { id: "f7", label: "API access", included: false },
      { id: "f8", label: "Priority support", included: false },
    ],
    limits: { students: 200, sms: 500, cbt: null, storage: "5 GB" },
  },
  {
    id: "2",
    name: "Professional",
    slug: "professional",
    description: "For growing schools that need more power and flexibility.",
    monthlyPrice: 45000,
    annualPrice: 450000,
    currency: "NGN",
    isPopular: true,
    isActive: true,
    subscriberCount: 312,
    features: [
      { id: "f1", label: "Student management", included: true },
      { id: "f2", label: "Basic reporting", included: true },
      { id: "f3", label: "Parent portal", included: true },
      { id: "f4", label: "SMS notifications", included: true, limit: "2,000/month" },
      { id: "f5", label: "CBT assessments", included: true, limit: "1,000/month" },
      { id: "f6", label: "Advanced analytics", included: true },
      { id: "f7", label: "API access", included: false },
      { id: "f8", label: "Priority support", included: true },
    ],
    limits: { students: 1000, sms: 2000, cbt: 1000, storage: "25 GB" },
  },
  {
    id: "3",
    name: "Enterprise",
    slug: "enterprise",
    description: "Unlimited access for large institutions and school groups.",
    monthlyPrice: 120000,
    annualPrice: 1200000,
    currency: "NGN",
    isPopular: false,
    isActive: true,
    subscriberCount: 58,
    features: [
      { id: "f1", label: "Student management", included: true },
      { id: "f2", label: "Basic reporting", included: true },
      { id: "f3", label: "Parent portal", included: true },
      { id: "f4", label: "SMS notifications", included: true, limit: "Unlimited" },
      { id: "f5", label: "CBT assessments", included: true, limit: "Unlimited" },
      { id: "f6", label: "Advanced analytics", included: true },
      { id: "f7", label: "API access", included: true },
      { id: "f8", label: "Priority support", included: true },
    ],
    limits: { students: null, sms: null, cbt: null, storage: "Unlimited" },
  },
];

// ─── Component ────────────────────────────────────────────────
export function SubscriptionPlansPage() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>(initialPlans);
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<SubscriptionPlan | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Form state
  const [formName, setFormName] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formMonthly, setFormMonthly] = useState("");
  const [formAnnual, setFormAnnual] = useState("");
  const [formStudents, setFormStudents] = useState("");
  const [formSms, setFormSms] = useState("");
  const [formCbt, setFormCbt] = useState("");
  const [formStorage, setFormStorage] = useState("");

  const filteredPlans = plans.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(amount);

  const resetForm = () => {
    setFormName("");
    setFormDesc("");
    setFormMonthly("");
    setFormAnnual("");
    setFormStudents("");
    setFormSms("");
    setFormCbt("");
    setFormStorage("");
    setEditingPlan(null);
  };

  const openEditDialog = (plan: SubscriptionPlan) => {
    setEditingPlan(plan);
    setFormName(plan.name);
    setFormDesc(plan.description);
    setFormMonthly(plan.monthlyPrice.toString());
    setFormAnnual(plan.annualPrice.toString());
    setFormStudents(plan.limits.students?.toString() || "");
    setFormSms(plan.limits.sms?.toString() || "");
    setFormCbt(plan.limits.cbt?.toString() || "");
    setFormStorage(plan.limits.storage);
    setDialogOpen(true);
  };

  const handleSavePlan = () => {
    if (!formName.trim()) return;

    if (editingPlan) {
      setPlans((prev) =>
        prev.map((p) =>
          p.id === editingPlan.id
            ? {
                ...p,
                name: formName.trim(),
                description: formDesc.trim(),
                monthlyPrice: parseInt(formMonthly) || 0,
                annualPrice: parseInt(formAnnual) || 0,
                limits: {
                  students: formStudents ? parseInt(formStudents) : null,
                  sms: formSms ? parseInt(formSms) : null,
                  cbt: formCbt ? parseInt(formCbt) : null,
                  storage: formStorage || "5 GB",
                },
              }
            : p
        )
      );
    } else {
      const slug = formName.toLowerCase().replace(/\s+/g, "_");
      const newPlan: SubscriptionPlan = {
        id: Date.now().toString(),
        name: formName.trim(),
        slug,
        description: formDesc.trim() || "Custom subscription plan",
        monthlyPrice: parseInt(formMonthly) || 0,
        annualPrice: parseInt(formAnnual) || 0,
        currency: "NGN",
        isPopular: false,
        isActive: true,
        subscriberCount: 0,
        features: [
          { id: "f1", label: "Student management", included: true },
          { id: "f2", label: "Basic reporting", included: true },
          { id: "f3", label: "Parent portal", included: true },
        ],
        limits: {
          students: formStudents ? parseInt(formStudents) : null,
          sms: formSms ? parseInt(formSms) : null,
          cbt: formCbt ? parseInt(formCbt) : null,
          storage: formStorage || "5 GB",
        },
      };
      setPlans((prev) => [...prev, newPlan]);
    }

    setDialogOpen(false);
    resetForm();
  };

  const togglePlanActive = (planId: string) => {
    setPlans((prev) =>
      prev.map((p) => (p.id === planId ? { ...p, isActive: !p.isActive } : p))
    );
  };

  const togglePopular = (planId: string) => {
    setPlans((prev) =>
      prev.map((p) => ({ ...p, isPopular: p.id === planId ? !p.isPopular : false }))
    );
  };

  const deletePlan = (planId: string) => {
    setPlans((prev) => prev.filter((p) => p.id !== planId));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">
            Subscription Plans
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage pricing tiers, features, and usage limits for your platform.
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4" />
              Add Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingPlan ? "Edit Plan" : "Create New Plan"}</DialogTitle>
              <DialogDescription>
                {editingPlan ? "Update the plan details and limits." : "Define a new subscription tier with pricing and limits."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-2">
                <Label>Plan Name</Label>
                <Input placeholder="e.g. Premium" value={formName} onChange={(e) => setFormName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Brief description of this plan" value={formDesc} onChange={(e) => setFormDesc(e.target.value)} rows={2} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Monthly Price (₦)</Label>
                  <Input type="number" placeholder="0" value={formMonthly} onChange={(e) => setFormMonthly(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Annual Price (₦)</Label>
                  <Input type="number" placeholder="0" value={formAnnual} onChange={(e) => setFormAnnual(e.target.value)} />
                </div>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Usage Limits</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Max Students</Label>
                    <Input type="number" placeholder="Unlimited" value={formStudents} onChange={(e) => setFormStudents(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>SMS / month</Label>
                    <Input type="number" placeholder="Unlimited" value={formSms} onChange={(e) => setFormSms(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>CBT Tests / month</Label>
                    <Input type="number" placeholder="Unlimited" value={formCbt} onChange={(e) => setFormCbt(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Storage</Label>
                    <Input placeholder="e.g. 25 GB" value={formStorage} onChange={(e) => setFormStorage(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setDialogOpen(false); resetForm(); }}>Cancel</Button>
              <Button onClick={handleSavePlan} disabled={!formName.trim()}>
                {editingPlan ? "Save Changes" : "Create Plan"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Billing toggle + search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search plans…" className="pl-9" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              billingCycle === "monthly" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              billingCycle === "annual" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Annual
          </button>
        </div>
      </div>

      {/* Plans grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => {
          const Icon = tierIcons[plan.slug] || Star;
          const colorClass = tierColors[plan.slug] || "bg-muted text-muted-foreground";
          const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;

          return (
            <Card
              key={plan.id}
              className={cn(
                "relative transition-all duration-200 hover:shadow-md",
                plan.isPopular && "ring-2 ring-primary shadow-lg",
                !plan.isActive && "opacity-60"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground shadow-sm">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colorClass)}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={plan.isActive ? "default" : "secondary"} className="text-[10px]">
                          {plan.isActive ? "Active" : "Inactive"}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {plan.subscriberCount}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEditDialog(plan)}>
                      <Edit2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => deletePlan(plan.id)}>
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="mt-2 text-xs">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-display text-foreground">
                      {formatCurrency(price)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      /{billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                  {billingCycle === "annual" && (
                    <p className="text-xs text-accent mt-1">
                      Save {formatCurrency(plan.monthlyPrice * 12 - plan.annualPrice)}/year
                    </p>
                  )}
                </div>

                {/* Limits */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-muted rounded-lg px-3 py-2 text-center">
                    <p className="text-xs text-muted-foreground">Students</p>
                    <p className="text-sm font-semibold text-foreground">{plan.limits.students?.toLocaleString() || "∞"}</p>
                  </div>
                  <div className="bg-muted rounded-lg px-3 py-2 text-center">
                    <p className="text-xs text-muted-foreground">SMS</p>
                    <p className="text-sm font-semibold text-foreground">{plan.limits.sms?.toLocaleString() || "∞"}</p>
                  </div>
                  <div className="bg-muted rounded-lg px-3 py-2 text-center">
                    <p className="text-xs text-muted-foreground">CBT</p>
                    <p className="text-sm font-semibold text-foreground">{plan.limits.cbt?.toLocaleString() || "∞"}</p>
                  </div>
                  <div className="bg-muted rounded-lg px-3 py-2 text-center">
                    <p className="text-xs text-muted-foreground">Storage</p>
                    <p className="text-sm font-semibold text-foreground">{plan.limits.storage}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground">Included Features</p>
                  <ul className="space-y-1.5">
                    {plan.features.map((feat) => (
                      <li key={feat.id} className="flex items-center gap-2 text-sm">
                        <Check
                          className={cn(
                            "w-3.5 h-3.5 shrink-0",
                            feat.included ? "text-accent" : "text-border"
                          )}
                        />
                        <span className={cn(feat.included ? "text-foreground" : "text-muted-foreground line-through")}>
                          {feat.label}
                        </span>
                        {feat.limit && feat.included && (
                          <span className="text-xs text-muted-foreground ml-auto">{feat.limit}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Switch checked={plan.isActive} onCheckedChange={() => togglePlanActive(plan.id)} />
                    <Label className="text-xs text-muted-foreground">Active</Label>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs" onClick={() => togglePopular(plan.id)}>
                    {plan.isPopular ? "Remove Popular" : "Set Popular"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredPlans.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No plans found. Create one to get started.</p>
        </div>
      )}
    </div>
  );
}
