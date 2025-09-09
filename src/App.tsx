import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load all pages for code splitting
const RecentCasesLanding = lazy(() => import('./pages/RecentCasesLanding'));
const OlderCasesLanding = lazy(() => import('./pages/OlderCasesLanding'));
const OtherFraudLanding = lazy(() => import('./pages/OtherFraudLanding'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<RecentCasesLanding />} />
            <Route path="/recent-cases" element={<RecentCasesLanding />} />
            <Route path="/older-cases" element={<OlderCasesLanding />} />
            <Route path="/other-fraud" element={<OtherFraudLanding />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/disclaimer-page" element={<DisclaimerPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;