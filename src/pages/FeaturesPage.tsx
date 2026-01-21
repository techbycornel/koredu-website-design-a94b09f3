import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  Award,
  CreditCard,
  Calendar,
  MessageSquare,
  BarChart3,
  Smartphone,
  Shield,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Comprehensive student lifecycle management from enrollment to graduation. Track academic progress, manage records, and monitor student performance all in one place.",
    benefits: [
      "Complete student profiles with photos and documents",
      "Academic history and progress tracking",
      "Parent/guardian information management",
      "Transfer and graduation processing",
    ],
  },
  {
    icon: GraduationCap,
    title: "Staff Management",
    description: "Efficiently manage your teaching and administrative staff with tools for scheduling, leave management, and performance tracking.",
    benefits: [
      "Staff profiles and credential management",
      "Leave request and approval workflow",
      "Schedule and workload management",
      "Performance reviews and feedback",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Tracking",
    description: "Digital attendance for students and staff with real-time reports and automated notifications to parents.",
    benefits: [
      "One-click attendance marking",
      "Automatic absent notifications to parents",
      "Attendance reports and analytics",
      "Late arrival tracking",
    ],
  },
  {
    icon: Award,
    title: "Exams & Results",
    description: "Create exams, grade assessments, and publish results seamlessly. Support for CBT exams for premium schools.",
    benefits: [
      "Exam scheduling and management",
      "Grade book and result processing",
      "Report card generation",
      "CBT exam support (Premium)",
    ],
  },
  {
    icon: CreditCard,
    title: "Fees & Payments",
    description: "Streamline fee collection with online payment options, automated reminders, and comprehensive financial reporting.",
    benefits: [
      "Multiple payment gateway integration",
      "Automated payment reminders",
      "Fee structure customization",
      "Financial reports and analytics",
    ],
  },
  {
    icon: Calendar,
    title: "Timetable Management",
    description: "Create and manage class schedules and academic calendars with ease. Avoid conflicts and optimize resource allocation.",
    benefits: [
      "Drag-and-drop timetable creation",
      "Conflict detection and resolution",
      "Academic calendar management",
      "Room and resource allocation",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Keep parents, teachers, and students connected with SMS, email, and push notifications for important updates.",
    benefits: [
      "Bulk SMS and email messaging",
      "Push notifications to mobile app",
      "Announcement broadcasting",
      "Parent-teacher messaging",
    ],
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Gain valuable insights into school performance with detailed reports and visual analytics dashboards.",
    benefits: [
      "Academic performance analytics",
      "Financial reporting dashboards",
      "Attendance trend analysis",
      "Custom report generation",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Access Koredu anywhere with our mobile apps for iOS and Android. Perfect for parents and staff on the go.",
    benefits: [
      "Native iOS and Android apps",
      "Real-time notifications",
      "Offline access capability",
      "Touch-optimized interface",
    ],
  },
  {
    icon: Globe,
    title: "Parent & Student Portals",
    description: "Dedicated portals for parents and students to view grades, attendance, fees, and communicate with the school.",
    benefits: [
      "Real-time grade and attendance viewing",
      "Fee payment from portal",
      "Assignment submission",
      "School calendar access",
    ],
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security to protect sensitive student and school data with encryption and regular backups.",
    benefits: [
      "End-to-end encryption",
      "Automatic daily backups",
      "Role-based access control",
      "GDPR/NDPR compliance",
    ],
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automate repetitive tasks like fee reminders, attendance alerts, and report generation to save valuable time.",
    benefits: [
      "Automated notifications",
      "Scheduled report generation",
      "Workflow automation",
      "Smart alerts and triggers",
    ],
  },
];

export function FeaturesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-gradient glow-teal py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Powerful Features for
              <span className="text-gradient block">Modern Schools</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to run your school efficiently, from student management 
              to financial reporting, all in one integrated platform.
            </p>
            <Link to="/demo">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                    <feature.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-background mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how Koredu can transform your school operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-background text-foreground hover:bg-background/90" size="xl">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-background/30 text-background hover:bg-background/10" size="xl">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
