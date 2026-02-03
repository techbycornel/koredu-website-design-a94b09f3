import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, ArrowLeft, RefreshCw } from "lucide-react";

export function ErrorPage() {
  const error = useRouteError();

  let title = "Something went wrong";
  let description = "An unexpected error occurred. Please try again later.";
  let statusCode = "Error";

  if (isRouteErrorResponse(error)) {
    statusCode = String(error.status);
    if (error.status === 404) {
      title = "Page not found";
      description = "The page you're looking for doesn't exist or has been moved.";
    } else if (error.status === 403) {
      title = "Access denied";
      description = "You don't have permission to access this page.";
    } else if (error.status === 500) {
      title = "Server error";
      description = "Our servers are having trouble. Please try again in a moment.";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mb-8"
        >
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </motion.div>

        {/* Status Code */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-7xl font-bold font-display text-primary mb-4"
        >
          {statusCode}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold font-display text-foreground mb-3"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mb-8 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </Button>
          <Link to="/">
            <Button className="gap-2 w-full sm:w-auto">
              <Home className="w-4 h-4" />
              Back to home
            </Button>
          </Link>
        </motion.div>

        {/* Refresh option */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          onClick={() => window.location.reload()}
          className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh page
        </motion.button>
      </motion.div>
    </div>
  );
}
