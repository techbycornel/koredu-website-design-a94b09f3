import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { FeaturesPage } from "@/pages/FeaturesPage";
import { HowItWorksPage } from "@/pages/HowItWorksPage";
import { PricingPage } from "@/pages/PricingPage";
import { DemoPage } from "@/pages/DemoPage";
import { ContactPage } from "@/pages/ContactPage";
import { LoginPage } from "@/pages/LoginPage";
import { SignupPage } from "@/pages/SignupPage";
import { ForgotPasswordPage } from "@/pages/ForgotPasswordPage";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardOverview } from "@/pages/admin/DashboardOverview";
import { SchoolManagement } from "@/pages/admin/SchoolManagement";
import { UserManagement } from "@/pages/admin/UserManagement";
import { FinancialOverview } from "@/pages/admin/FinancialOverview";
import { ConfigurationPage } from "@/pages/admin/ConfigurationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public pages with public layout */}
          <Route element={<Layout><HomePage /></Layout>} path="/" />
          <Route element={<Layout><AboutPage /></Layout>} path="/about" />
          <Route element={<Layout><FeaturesPage /></Layout>} path="/features" />
          <Route element={<Layout><HowItWorksPage /></Layout>} path="/how-it-works" />
          <Route element={<Layout><PricingPage /></Layout>} path="/pricing" />
          <Route element={<Layout><DemoPage /></Layout>} path="/demo" />
          <Route element={<Layout><ContactPage /></Layout>} path="/contact" />
          <Route element={<Layout><LoginPage /></Layout>} path="/login" />
          <Route element={<Layout><SignupPage /></Layout>} path="/signup" />
          <Route element={<Layout><ForgotPasswordPage /></Layout>} path="/forgot-password" />
          <Route element={<Layout><ResetPasswordPage /></Layout>} path="/reset-password" />
          <Route element={<Layout><ErrorPage /></Layout>} path="/error" />
          <Route element={<Layout><PrivacyPolicyPage /></Layout>} path="/privacy" />
          <Route element={<Layout><TermsOfServicePage /></Layout>} path="/terms" />

          {/* Super Admin Dashboard */}
          <Route path="/admin" element={<DashboardLayout><DashboardOverview /></DashboardLayout>} />
          <Route path="/admin/schools" element={<DashboardLayout><SchoolManagement /></DashboardLayout>} />
          <Route path="/admin/users" element={<DashboardLayout><UserManagement /></DashboardLayout>} />
          <Route path="/admin/financials" element={<DashboardLayout><FinancialOverview /></DashboardLayout>} />
          <Route path="/admin/configuration" element={<DashboardLayout><ConfigurationPage /></DashboardLayout>} />

          {/* Catch-all */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
