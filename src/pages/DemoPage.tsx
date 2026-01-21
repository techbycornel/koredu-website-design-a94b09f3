import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  Users,
  Building2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const schoolTypes = [
  { value: "primary", label: "Primary School" },
  { value: "secondary", label: "Secondary School" },
  { value: "tertiary", label: "Tertiary Institution" },
  { value: "other", label: "Other" },
];

const studentRanges = [
  { value: "0-100", label: "Less than 100" },
  { value: "100-300", label: "100 - 300" },
  { value: "300-500", label: "300 - 500" },
  { value: "500-1000", label: "500 - 1,000" },
  { value: "1000+", label: "More than 1,000" },
];

export function DemoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
    schoolType: "",
    studentCount: "",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Demo Request Submitted!",
      description: "Our team will contact you within 24 hours to schedule your demo.",
    });

    setIsSubmitting(false);
    setFormData({
      schoolName: "",
      contactPerson: "",
      email: "",
      phone: "",
      schoolType: "",
      studentCount: "",
      preferredDate: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-gradient glow-teal py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
                See Koredu
                <span className="text-gradient block">In Action</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a personalized demo and discover how Koredu can transform 
                your school's operations. Our team will walk you through every feature.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground">30-minute personalized walkthrough</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground">See features relevant to your school type</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Get answers to all your questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground">No commitment required</span>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-koredu">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Flexible Scheduling</p>
                    <p className="text-sm text-muted-foreground">Pick a time that works for you</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  After submitting the form, our team will reach out within 24 hours to 
                  confirm your preferred date and time.
                </p>
              </div>
            </motion.div>

            {/* Demo Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-koredu-lg border border-border"
              >
                <h2 className="text-2xl font-bold font-display text-foreground mb-6">
                  Request Your Demo
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      School Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your school name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="school@example.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        School Type *
                      </label>
                      <select
                        name="schoolType"
                        value={formData.schoolType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select type</option>
                        {schoolTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Number of Students *
                      </label>
                      <select
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select range</option>
                        {studentRanges.map(range => (
                          <option key={range.value} value={range.value}>{range.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Demo Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your specific needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-t border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Schools Trust Us</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">50,000+</p>
              <p className="text-sm text-muted-foreground">Students Managed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">98%</p>
              <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
