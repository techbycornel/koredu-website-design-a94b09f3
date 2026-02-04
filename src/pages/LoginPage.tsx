import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, EyeOff, GraduationCap, Users, BookOpen, TrendingUp, Building2, UserCog } from "lucide-react";
import classroomHero from "@/assets/classroom-hero.jpg";

const features = [
  { icon: Users, text: "Manage students & teachers effortlessly" },
  { icon: BookOpen, text: "Track academic progress in real-time" },
  { icon: TrendingUp, text: "Data-driven insights for better outcomes" },
];

type UserType = "school_owner" | "internal_staff";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<UserType>("school_owner");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    console.log("Login attempt:", { email, password, userType });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <img
          src={classroomHero}
          alt="Children in classroom with student raising hand"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-accent/80" />
        
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
              <h1 className="text-4xl xl:text-5xl font-bold font-display leading-tight">
                Empowering Schools,<br />
                One Click at a Time
              </h1>
              <p className="text-lg text-white/80 max-w-md">
                Join thousands of educators transforming their school management with our comprehensive platform.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-white/90">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-white/60">
            © 2024 Koredu. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
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
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* User Type Selector */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">I am a</Label>
              <RadioGroup
                value={userType}
                onValueChange={(value) => setUserType(value as UserType)}
                className="grid grid-cols-2 gap-3"
              >
                <Label
                  htmlFor="school_owner"
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    userType === "school_owner"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value="school_owner" id="school_owner" className="sr-only" />
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    userType === "school_owner" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">School Owner</p>
                    <p className="text-xs text-muted-foreground">Manage your school</p>
                  </div>
                </Label>
                <Label
                  htmlFor="internal_staff"
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    userType === "internal_staff"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value="internal_staff" id="internal_staff" className="sr-only" />
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    userType === "internal_staff" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    <UserCog className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Internal Staff</p>
                    <p className="text-xs text-muted-foreground">Koredu employee</p>
                  </div>
                </Label>
              </RadioGroup>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={userType === "school_owner" ? "you@school.edu" : "you@koredu.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  Remember me for 30 days
                </Label>
              </div>

              <Button type="submit" className="w-full h-12" size="lg">
                Sign in
              </Button>
            </form>

            <div className="text-center">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
