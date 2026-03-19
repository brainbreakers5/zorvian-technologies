import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ParticlesBackground from "./components/ParticlesBackground";
import Index from "./pages/Index";
import WebDesigning from "./pages/WebDesigning";
import SmartBilling from "./pages/SmartBilling";
import Contact from "./pages/Contact";
import FunctionsEvents from "./pages/FunctionsEvents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        <BrowserRouter>
          <div className="min-h-screen flex flex-col relative bg-background">
            <ParticlesBackground />
            <Header />
            <div className="flex-1 relative z-10">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/website-designing" element={<WebDesigning />} />
                <Route path="/smart-billing" element={<SmartBilling />} />
                <Route path="/functions-events" element={<FunctionsEvents />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
