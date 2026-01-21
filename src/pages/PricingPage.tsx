import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  X, 
  ArrowRight, 
  HelpCircle,
  Zap
} from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for small schools getting started",
    monthlyPrice: 25000,
    yearlyPrice: 250000,
    studentLimit: "Up to 200 students",
    features: [
      { name: "Student Management", included: true },
      { name: "Staff Management", included: true },
      { name: "Attendance Tracking", included: true },
      { name: "Basic Reporting", included: true },
      { name: "Email Support", included: true },
      { name: "Exams & Results", included: false },
      { name: "Fees & Payments", included: false },
      { name: "Parent Portal", included: false },
      { name: "SMS Notifications", included: false },
      { name: "CBT Exams", included: false },
      { name: "API Access", included: false },
      { name: "Priority Support", included: false },
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Standard",
    description: "Most popular choice for growing schools",
    monthlyPrice: 50000,
    yearlyPrice: 500000,
    studentLimit: "Up to 500 students",
    features: [
      { name: "Student Management", included: true },
      { name: "Staff Management", included: true },
      { name: "Attendance Tracking", included: true },
      { name: "Advanced Reporting", included: true },
      { name: "Email Support", included: true },
      { name: "Exams & Results", included: true },
      { name: "Fees & Payments", included: true },
      { name: "Parent Portal", included: true },
      { name: "SMS Notifications", included: true },
      { name: "CBT Exams", included: false },
      { name: "API Access", included: false },
      { name: "Priority Support", included: false },
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Premium",
    description: "Full-featured for large institutions",
    monthlyPrice: 100000,
    yearlyPrice: 1000000,
    studentLimit: "Unlimited students",
    features: [
      { name: "Student Management", included: true },
      { name: "Staff Management", included: true },
      { name: "Attendance Tracking", included: true },
      { name: "Custom Reporting", included: true },
      { name: "Email Support", included: true },
      { name: "Exams & Results", included: true },
      { name: "Fees & Payments", included: true },
      { name: "Parent Portal", included: true },
      { name: "SMS Notifications", included: true },
      { name: "CBT Exams", included: true },
      { name: "API Access", included: true },
      { name: "Priority Support", included: true },
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    question: "Can I try Koredu before purchasing?",
    answer: "Yes! We offer a 14-day free trial on all plans. No credit card required. You can explore all features and see how Koredu works for your school.",
  },
  {
    question: "What happens when I exceed my student limit?",
    answer: "We'll notify you when you're approaching your limit. You can upgrade to a higher plan anytime to accommodate more students.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. If upgrading, you'll only pay the difference. If downgrading, the credit will be applied to future billing.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees. We also provide free onboarding assistance to help you get started quickly.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, you save about 17% when you choose annual billing compared to monthly payments.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, card payments (Visa, Mastercard), and mobile money. Enterprise customers can also pay via invoice.",
  },
];

export function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

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
              Simple, Transparent
              <span className="text-gradient block">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your school. Start free, upgrade as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-card p-2 rounded-xl shadow-koredu border border-border">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !isYearly
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  isYearly
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-koredu-teal-lg scale-105"
                    : "bg-card border border-border shadow-koredu"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold font-display mb-2 ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${
                      plan.popular ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                    </span>
                    <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.studentLimit}
                  </p>
                </div>

                <Link to="/demo">
                  <Button
                    className={`w-full mb-6 ${
                      plan.popular
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 shrink-0 ${
                          plan.popular ? "text-primary-foreground" : "text-primary"
                        }`} />
                      ) : (
                        <X className={`w-5 h-5 shrink-0 ${
                          plan.popular ? "text-primary-foreground/30" : "text-muted-foreground/30"
                        }`} />
                      )}
                      <span className={
                        feature.included
                          ? plan.popular ? "text-primary-foreground" : "text-foreground"
                          : plan.popular ? "text-primary-foreground/50" : "text-muted-foreground/50"
                      }>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-muted rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground max-w-xl">
                For large institutions, university systems, or government education departments, 
                we offer custom enterprise solutions with dedicated support.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 section-grey">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold mb-3">FAQs</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Pricing Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-koredu border border-border"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
