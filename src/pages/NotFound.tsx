import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, FileQuestion, Compass, Map } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-64 lg:w-80 lg:h-80"
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
            />
            
            {/* Inner decorative ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-accent/15"
            />
            
            {/* Gradient background */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10" />
            
            {/* Floating Search icon */}
            <motion.div
              animate={{ y: [-8, 8, -8], x: [2, -2, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 right-10 w-12 h-12 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
            >
              <Search className="w-5 h-5 text-primary" />
            </motion.div>
            
            {/* Floating Compass icon */}
            <motion.div
              animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 left-6 w-11 h-11 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
            >
              <Compass className="w-5 h-5 text-accent" />
            </motion.div>
            
            {/* Floating Map icon */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -translate-y-1/2 -right-2 w-10 h-10 rounded-lg bg-card border border-border shadow-lg flex items-center justify-center"
            >
              <Map className="w-4 h-4 text-secondary" />
            </motion.div>

            {/* Decorative dots */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 left-12 w-3 h-3 rounded-full bg-primary/40"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 right-16 w-2 h-2 rounded-full bg-accent/50"
            />
            
            {/* Center icon */}
            <motion.div 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-koredu-teal-lg">
                <FileQuestion className="w-10 h-10 lg:w-12 lg:h-12 text-primary-foreground" />
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left max-w-md"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-7xl lg:text-8xl font-bold font-display text-primary mb-4"
            >
              404
            </motion.p>
            
            <h1 className="text-2xl lg:text-3xl font-bold font-display text-foreground mb-4">
              Page Not Found
            </h1>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Oops! The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
              <Link to="/">
                <Button className="gap-2 w-full sm:w-auto">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
