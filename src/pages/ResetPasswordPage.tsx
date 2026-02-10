import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, ArrowLeft, Lock, CheckCircle, Eye, EyeOff, Check, X } from "lucide-react";
import classroomHero from "@/assets/classroom-hero.jpg";

export function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const requirements = useMemo(() => [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One lowercase letter", met: /[a-z]/.test(password) },
    { label: "One number", met: /\d/.test(password) },
  ], [password]);

  const allRequirementsMet = requirements.every((r) => r.met);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;
  const canSubmit = allRequirementsMet && passwordsMatch;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: Implement actual password reset logic
    console.log("Password reset with new password");
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Mobile/Tablet Background Image */}
      <div className="lg:hidden absolute inset-0">
        <img
          src={classroomHero}
          alt="Children in classroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />
      </div>

      {/* Left Side - Image & Branding (Desktop only) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={classroomHero}
          alt="Children in classroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-accent/80" />

        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold font-display">Koredu</span>
          </Link>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-5xl font-bold font-display leading-tight">
                Set your new<br />password
              </h1>
              <p className="text-lg text-white/80 max-w-md">
                Choose a strong password to keep your account secure. You'll be able to log in right after.
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-md">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Strong password</p>
                <p className="text-sm text-white/70">Use a mix of letters, numbers, and symbols</p>
              </div>
            </div>
          </div>

          <div className="text-sm text-white/60">
            © 2024 Koredu. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-background/95 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-2xl p-6 sm:p-8 lg:p-0 shadow-2xl lg:shadow-none"
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

          {/* Back to Login */}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to login</span>
          </Link>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold font-display text-foreground mb-2">
                  Set new password
                </h1>
                <p className="text-muted-foreground">
                  Create a new password for your account. Make sure it's strong and unique.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* New Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">New password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
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

                {/* Password Requirements */}
                {password.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-2"
                  >
                    {requirements.map((req) => (
                      <div key={req.label} className="flex items-center gap-2 text-sm">
                        {req.met ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span className={req.met ? "text-foreground" : "text-muted-foreground"}>
                          {req.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="h-12 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {confirmPassword.length > 0 && !passwordsMatch && (
                    <p className="text-sm text-destructive">Passwords do not match</p>
                  )}
                </div>

                <Button type="submit" className="w-full h-12" size="lg" disabled={!canSubmit}>
                  Reset password
                </Button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Success Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>

              <h1 className="text-3xl font-bold font-display text-foreground mb-2">
                Password updated!
              </h1>
              <p className="text-muted-foreground mb-8">
                Your password has been successfully reset. You can now log in with your new password.
              </p>

              <Button asChild className="w-full h-12" size="lg">
                <Link to="/login">Go to login</Link>
              </Button>
            </motion.div>
          )}

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Remember your password?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
