import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  CheckCircle2,
  Rocket,
  Settings,
  Upload,
  Zap
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Rocket,
    title: "Request a Demo",
    description: "Schedule a free, personalized demo with our team. We'll show you exactly how Koredu works and answer all your questions.",
    details: [
      "30-minute live walkthrough",
      "See features relevant to your school",
      "Get pricing information",
      "No commitment required",
    ],
  },
  {
    number: "02",
    icon: Settings,
    title: "School Setup",
    description: "Our team helps you configure Koredu for your specific needs. We'll set up your school profile, classes, and preferences.",
    details: [
      "Guided setup assistance",
      "Custom configuration for your school type",
      "Staff account creation",
      "Branding customization",
    ],
  },
  {
    number: "03",
    icon: Upload,
    title: "Import Your Data",
    description: "Easily import your existing student and staff records. We support bulk imports from Excel, CSV, and other formats.",
    details: [
      "Bulk data import tools",
      "Excel and CSV support",
      "Data validation and cleanup",
      "Migration assistance available",
    ],
  },
  {
    number: "04",
    icon: Zap,
    title: "Start Managing",
    description: "Begin using Koredu to manage your school operations. Our support team is always available to help you succeed.",
    details: [
      "Full access to all features",
      "Training resources available",
      "Ongoing customer support",
      "Regular feature updates",
    ],
  },
];

export function HowItWorksPage() {
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
              Get Started in
              <span className="text-gradient block">4 Simple Steps</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We've made onboarding as simple as possible so you can focus on what 
              matters most — education. Here's how it works.
            </p>
            <Link to="/demo">
              <Button variant="hero" size="xl">
                Request Your Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-bold text-primary/20 font-display">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                    <step.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-20 lg:py-28 section-grey">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Typical Onboarding Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most schools are up and running within a week. Here's what to expect.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

              <div className="space-y-12">
                {[
                  { day: "Day 1", title: "Demo & Discussion", description: "Initial demo and discussion of your school's needs" },
                  { day: "Day 2-3", title: "Account Setup", description: "We create your account and configure basic settings" },
                  { day: "Day 3-5", title: "Data Import", description: "Import your existing data with our support" },
                  { day: "Day 5-7", title: "Training", description: "Staff training and final preparations" },
                  { day: "Day 7+", title: "Go Live!", description: "Start using Koredu with full support" },
                ].map((item, index) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-6 shadow-koredu border border-border inline-block">
                        <span className="text-primary font-semibold text-sm">{item.day}</span>
                        <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary absolute left-1/2 -translate-x-1/2 ring-4 ring-background" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Join 500+ schools already using Koredu. Start your journey today with a free demo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-background text-foreground hover:bg-background/90" size="xl">
                  Request Demo
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
