import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const VoucheryPage = lazy(() => import("./pages/VoucheryPage.tsx"));
const EventyPage = lazy(() => import("./pages/EventyPage.tsx"));
const FAQPage = lazy(() => import("./pages/FAQPage.tsx"));
const OfertaSpecjalnaPage = lazy(() => import("./pages/OfertaSpecjalnaPage.tsx"));
const KontaktPage = lazy(() => import("./pages/KontaktPage.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/vouchery" element={<VoucheryPage />} />
              <Route path="/eventy" element={<EventyPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/oferta-specjalna" element={<OfertaSpecjalnaPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
