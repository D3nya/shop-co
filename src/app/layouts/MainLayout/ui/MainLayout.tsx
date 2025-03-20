import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import React, { Suspense } from "react";
import { Outlet } from "react-router";

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
