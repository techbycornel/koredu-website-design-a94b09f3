import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  MessageSquare,
  Clock,
  HelpCircle,
  Send,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team typically responds within 24 hours",
    value: "hello@koredu.com",
    action: "mailto:hello@koredu.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Available Mon-Fri, 9am-6pm WAT",
    value: "+234 123 456 7890",
    action: "tel:+2341234567890",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team",
    value: "Start a conversation",
    action: "#",
  },
];

export function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                We're here to help
              </motion.div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-foreground mb-5">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Have questions? We'd love to hear from you. Send us a message and 
                we'll respond as soon as possible.
              </p>
            </motion.div>

            {/* Rich Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            >
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />
              
              {/* Middle decorative ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 lg:inset-8 rounded-full border border-accent/15"
              />
              
              {/* Inner gradient circle */}
              <div className="absolute inset-12 lg:inset-16 rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-accent/15" />
              
              {/* Floating Mail icon - top right */}
              <motion.div
                animate={{ y: [-8, 8, -8], x: [2, -2, 2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-8 lg:top-6 lg:right-12 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center"
              >
                <Mail className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
              </motion.div>
              
              {/* Floating Phone icon - bottom left */}
              <motion.div
                animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 left-4 lg:bottom-8 lg:left-6 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
              </motion.div>
              
              {/* Floating MessageSquare icon - right side */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -translate-y-1/2 -right-2 lg:right-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
              >
                <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 text-secondary" />
              </motion.div>
              
              {/* Floating MapPin icon - left side */}
              <motion.div
                animate={{ y: [4, -4, 4], rotate: [-5, 5, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-1/3 -left-2 lg:left-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
              >
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
              </motion.div>
              
              {/* Small decorative dots */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 left-16 w-3 h-3 rounded-full bg-primary/40"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-accent/50"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-8 w-2 h-2 rounded-full bg-secondary/40"
              />
              
              {/* Center main icon */}
              <motion.div 
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-koredu-teal-lg">
                  <Send className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-primary-foreground" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-koredu border border-border hover:shadow-koredu-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <method.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className="text-primary font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
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
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                  Our Office
                </h2>
                <div className="bg-card rounded-2xl p-8 shadow-koredu border border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                      <p className="text-muted-foreground">
                        123 Tech Hub Avenue,<br />
                        Victoria Island,<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM WAT<br />
                        Saturday: 10:00 AM - 2:00 PM WAT<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Map Integration</p>
                </div>
              </div>

              {/* Quick Help */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Need Quick Help?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Check out our FAQ section for instant answers to common questions.
                    </p>
                    <Button variant="outline" size="sm">
                      View FAQs
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
