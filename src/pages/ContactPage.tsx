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
  HelpCircle
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
      <section className="section-gradient glow-teal py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and 
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 -mt-12">
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
