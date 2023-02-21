import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { baseURL } from "./api/api";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1 * 60 * 60 * 1000,
        staleTime: 1 * 60 * 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });

  const URL = baseURL;

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="w-full min-h-screen bg-[#5e3c2c]">
          <Header />
          <Main />
          <Footer />
        </div>
      </QueryClientProvider>
      <Toaster />
    </Router>
  );
}

export default App;
