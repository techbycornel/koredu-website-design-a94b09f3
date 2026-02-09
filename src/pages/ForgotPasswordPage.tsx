import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, ArrowLeft, Mail, CheckCircle } from "lucide-react";
import classroomHero from "@/assets/classroom-hero.jpg";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual password reset logic
    console.log("Password reset requested for:", email);
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
                Forgot your<br />password?
              </h1>
              <p className="text-lg text-white/80 max-w-md">
                No worries! Enter your email and we'll send you instructions to reset your password.
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-md">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Check your inbox</p>
                <p className="text-sm text-white/70">We'll send a secure link to reset your password</p>
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
                  Reset password
                </h1>
                <p className="text-muted-foreground">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <Button type="submit" className="w-full h-12" size="lg">
                  Send reset link
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

              {/* Header */}
              <h1 className="text-3xl font-bold font-display text-foreground mb-2">
                Check your email
              </h1>
              <p className="text-muted-foreground mb-6">
                We've sent a password reset link to{" "}
                <span className="font-medium text-foreground">{email}</span>
              </p>

              {/* Instructions */}
              <div className="bg-muted/50 rounded-xl p-4 mb-6 text-left">
                <p className="text-sm text-muted-foreground">
                  Didn't receive the email? Check your spam folder, or{" "}
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:underline font-medium"
                  >
                    try another email address
                  </button>
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full h-12"
                size="lg"
                onClick={() => setIsSubmitted(false)}
              >
                Send another link
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
