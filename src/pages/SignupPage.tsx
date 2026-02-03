import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Check, GraduationCap, Shield, Clock, Sparkles } from "lucide-react";

const passwordRequirements = [
  { id: "length", label: "At least 8 characters", check: (p: string) => p.length >= 8 },
  { id: "uppercase", label: "One uppercase letter", check: (p: string) => /[A-Z]/.test(p) },
  { id: "lowercase", label: "One lowercase letter", check: (p: string) => /[a-z]/.test(p) },
  { id: "number", label: "One number", check: (p: string) => /\d/.test(p) },
];

const benefits = [
  { icon: Shield, title: "Secure & Compliant", description: "Enterprise-grade security with FERPA compliance" },
  { icon: Clock, title: "Save 10+ Hours Weekly", description: "Automate repetitive administrative tasks" },
  { icon: Sparkles, title: "AI-Powered Insights", description: "Smart analytics to improve student outcomes" },
];

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    schoolName: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md py-8"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold font-display text-foreground">Koredu</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-display text-foreground mb-2">
              Create your account
            </h1>
            <p className="text-muted-foreground">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>

          {/* Signup Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@school.edu"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schoolName">School / Institution name</Label>
                <Input
                  id="schoolName"
                  placeholder="ABC International School"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="h-12 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {/* Password requirements */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {passwordRequirements.map((req) => {
                    const met = req.check(formData.password);
                    return (
                      <div
                        key={req.id}
                        className={`flex items-center gap-2 text-xs ${
                          met ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        <Check className={`w-3.5 h-3.5 ${met ? "opacity-100" : "opacity-40"}`} />
                        {req.label}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  className="mt-0.5"
                />
                <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full h-12"
                size="lg"
                disabled={!agreedToTerms}
              >
                Create account
              </Button>
            </form>

            <div className="text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image & Benefits */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-accent via-primary to-primary/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold font-display">Koredu</span>
          </Link>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl xl:text-5xl font-bold font-display leading-tight">
                Transform Your<br />
                School Today
              </h2>
              <p className="text-lg text-white/80 max-w-md">
                Join 2,000+ schools already using Koredu to streamline operations and improve student outcomes.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-white/60">
            Trusted by leading educational institutions worldwide
          </div>
        </div>
      </div>
    </div>
  );
}
