import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb,
  Users,
  Award,
  Globe,
  Zap
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const values = [
  { icon: Heart, title: "Education First", description: "We believe education is the foundation of progress and opportunity for all." },
  { icon: Lightbulb, title: "Innovation", description: "Continuously improving our platform with cutting-edge technology." },
  { icon: Users, title: "Partnership", description: "Working alongside schools as trusted partners in their success." },
  { icon: Award, title: "Excellence", description: "Striving for the highest quality in everything we do." },
];

const stats = [
  { value: "500+", label: "Schools Trust Us" },
  { value: "50K+", label: "Students Managed" },
  { value: "10K+", label: "Teachers Empowered" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

const problems = [
  "Manual record-keeping leading to errors and data loss",
  "Time-consuming administrative tasks taking focus away from teaching",
  "Poor communication between schools and parents",
  "Difficulty tracking student attendance and performance",
  "Inefficient fee collection and financial management",
  "Lack of real-time insights and reporting capabilities",
];

export function AboutPage() {
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
              About <span className="text-gradient">Koredu</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to transform how educational institutions manage their 
              operations through innovative technology and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold mb-3">OUR STORY</p>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-6">
                Building the Future of Education Management
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Koredu was born from a simple observation: schools spend too much time on 
                  administrative tasks and not enough on what matters most — education.
                </p>
                <p>
                  Founded by educators and technologists who understood the daily challenges 
                  faced by schools, we set out to create a comprehensive solution that would 
                  streamline operations and empower institutions to focus on their core mission.
                </p>
                <p>
                  Today, Koredu serves hundreds of schools across the country, from small 
                  nurseries to large universities, helping them manage students, staff, 
                  finances, and communications from one unified platform.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-6 ${
                    index % 2 === 0 ? "bg-card shadow-koredu border border-border" : "bg-primary/5 border border-primary/10"
                  }`}
                >
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 section-grey">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-10 shadow-koredu border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower educational institutions with modern, intuitive technology that 
                simplifies administration, enhances communication, and enables schools to 
                focus on delivering quality education. We strive to make school management 
                effortless so educators can do what they do best — teach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary rounded-2xl p-10 text-primary-foreground"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Our Vision</h3>
              <p className="opacity-90 leading-relaxed">
                To become the leading school management platform in Africa and beyond, 
                transforming education administration and setting the standard for 
                innovation, reliability, and user experience in the EdTech industry. 
                We envision a future where every school, regardless of size, has access 
                to world-class management tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold mb-3">THE CHALLENGE</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Why Koredu Exists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the challenges schools face every day. That's why we built 
              Koredu to address these common pain points.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-koredu border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <span className="text-destructive font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground">{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center"
          >
            <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              The Koredu Solution
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our all-in-one platform addresses every one of these challenges, giving schools 
              the tools they need to operate efficiently, communicate effectively, and deliver 
              the best educational experience possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 section-grey">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold mb-3">OUR VALUES</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="bg-card rounded-3xl p-10 lg:p-16 shadow-koredu-lg border border-border text-center">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Growing Across Africa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Starting from Nigeria, we're expanding our reach to schools across the continent, 
              bringing modern education management to institutions of all sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <span className="px-4 py-2 rounded-full bg-muted">Nigeria 🇳🇬</span>
              <span className="px-4 py-2 rounded-full bg-muted">Ghana 🇬🇭</span>
              <span className="px-4 py-2 rounded-full bg-muted">Kenya 🇰🇪</span>
              <span className="px-4 py-2 rounded-full bg-muted">South Africa 🇿🇦</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary">+ More Coming</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
