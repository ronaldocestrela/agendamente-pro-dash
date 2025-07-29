import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { store, StoreContext } from "./lib/store/store";
import { router } from "./routes/Router";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  </StoreContext.Provider>
);
