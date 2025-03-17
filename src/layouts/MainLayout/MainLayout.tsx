import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { Footer } from "../../components/shared/Footer";
import { Header } from "../../components/shared/Header";

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
