import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  Building2,
  BarChart3,
  CreditCard,
  Calendar,
  MessageSquare,
  ClipboardCheck,
  Shield,
  Zap,
  Clock,
  Award,
  ChevronRight,
  Star
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const schoolTypes = [
  { icon: GraduationCap, title: "Primary Schools", description: "Complete management for nursery and primary education" },
  { icon: Users, title: "Secondary Schools", description: "Robust tools for junior and senior secondary institutions" },
  { icon: Building2, title: "Tertiary Institutions", description: "Advanced features for colleges and universities" },
];

const benefits = [
  { icon: Zap, title: "Automation", description: "Automate repetitive tasks and free up valuable time" },
  { icon: CheckCircle2, title: "Accuracy", description: "Reduce errors with digital record keeping" },
  { icon: Clock, title: "Time-Saving", description: "Complete administrative tasks in minutes, not hours" },
  { icon: BarChart3, title: "Reporting", description: "Generate comprehensive reports instantly" },
];

const features = [
  { icon: Users, title: "Student Management", description: "Complete student lifecycle management from admission to graduation" },
  { icon: GraduationCap, title: "Staff Management", description: "Manage teachers, administrative staff, and their schedules" },
  { icon: ClipboardCheck, title: "Attendance Tracking", description: "Digital attendance for students and staff with real-time reports" },
  { icon: Award, title: "Exams & Results", description: "Create exams, grade assessments, and publish results seamlessly" },
  { icon: CreditCard, title: "Fees & Payments", description: "Collect fees online and track payment history effortlessly" },
  { icon: Calendar, title: "Timetable", description: "Create and manage class schedules and academic calendars" },
  { icon: MessageSquare, title: "Communication", description: "Send SMS, emails, and push notifications to parents and students" },
  { icon: BarChart3, title: "Reports & Analytics", description: "Detailed insights into school performance and operations" },
];

const steps = [
  { number: "01", title: "Request a Demo", description: "Schedule a personalized demo to see Koredu in action" },
  { number: "02", title: "School Setup", description: "We help you configure your school settings and preferences" },
  { number: "03", title: "Import Data", description: "Easily import students, staff, and existing records" },
  { number: "04", title: "Start Managing", description: "Begin streamlining your school operations immediately" },
];

const testimonials = [
  {
    quote: "Koredu transformed how we manage our school. What used to take days now takes minutes.",
    author: "Mrs. Adebayo",
    role: "Principal, Greenfield Academy",
    rating: 5
  },
  {
    quote: "The parent portal has greatly improved our communication with families. Parents love the real-time updates.",
    author: "Mr. Okonkwo",
    role: "Admin Director, Victory Schools",
    rating: 5
  },
  {
    quote: "Fee collection became seamless. We've reduced our outstanding fees by 60% since using Koredu.",
    author: "Mrs. Ibrahim",
    role: "Bursar, Starlight College",
    rating: 5
  },
];

const partners = [
  "Paystack", "Flutterwave", "Google Cloud", "Microsoft", "AWS", "Interswitch"
];

export function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative section-gradient glow-teal py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Trusted by 500+ Schools
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-6">
                Modern School
                <span className="text-gradient block">Management</span>
                Made Simple
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Koredu is the all-in-one cloud platform that helps primary, secondary, 
                and tertiary institutions manage students, staff, fees, and operations 
                from one unified system.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="xl">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="heroOutline" size="xl">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Free 14-day trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  No credit card required
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-koredu-xl">
                <img 
                  src={heroDashboard} 
                  alt="Koredu Dashboard Preview" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-koredu-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">50,000+</p>
                    <p className="text-sm text-muted-foreground">Students Managed</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Is Koredu For */}
      <section className="py-20 lg:py-28 section-grey">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-semibold mb-3">
              WHO IS KOREDU FOR
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Built for Every Type of School
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you run a nursery, primary, secondary, or tertiary institution, 
              Koredu adapts to your unique needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {schoolTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-feature group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <type.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold mb-3">KEY BENEFITS</p>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-6">
                Why Schools Love Koredu
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've designed Koredu to solve the real challenges schools face every day. 
                Here's how we make a difference.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <p className="text-4xl font-bold text-primary mb-2">98%</p>
                    <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-koredu border border-border">
                    <p className="text-4xl font-bold text-foreground mb-2">75%</p>
                    <p className="text-sm text-muted-foreground">Time Saved on Admin</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-card rounded-2xl p-6 shadow-koredu border border-border">
                    <p className="text-4xl font-bold text-foreground mb-2">500+</p>
                    <p className="text-sm text-muted-foreground">Schools Onboarded</p>
                  </div>
                  <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                    <p className="text-4xl font-bold mb-2">24/7</p>
                    <p className="text-sm opacity-90">Support Available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 lg:py-28 section-grey">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-semibold mb-3">
              CORE FEATURES
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Everything You Need to Run Your School
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From admissions to graduation, Koredu provides all the tools you need 
              to manage your institution effectively.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-feature group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/features">
              <Button variant="outline" size="lg">
                View All Features
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-semibold mb-3">
              HOW IT WORKS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Get Started in 4 Simple Steps
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've made onboarding as simple as possible so you can focus on what matters most — education.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
                )}
                <div className="relative z-10">
                  <span className="text-6xl font-bold text-primary/10 font-display">{step.number}</span>
                  <h3 className="text-xl font-semibold text-foreground -mt-4 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 section-grey">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-semibold mb-3">
              TESTIMONIALS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Trusted by Schools Nationwide
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-koredu border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-y border-border">
        <div className="container-custom">
          <p className="text-center text-muted-foreground mb-8">
            Powered by industry-leading partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold font-display text-background mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Join 500+ schools already using Koredu to streamline their operations 
              and focus on what matters most — education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-background text-foreground hover:bg-background/90 shadow-lg hover:shadow-xl transition-all" size="xl">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" className="border-background/30 text-background hover:bg-background/10" size="xl">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
