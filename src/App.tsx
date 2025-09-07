import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import RecentCasesLanding from "./pages/RecentCasesLanding";
import OlderCasesLanding from "./pages/OlderCasesLanding";
import OtherFraudLanding from "./pages/OtherFraudLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<RecentCasesLanding />} />
          <Route path="/recent-cases" element={<RecentCasesLanding />} />
          <Route path="/older-cases" element={<OlderCasesLanding />} />
          <Route path="/other-fraud" element={<OtherFraudLanding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;