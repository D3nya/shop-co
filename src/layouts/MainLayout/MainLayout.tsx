import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { Header } from "../../components/shared/Header";
import { Footer } from "../../components/shared/Footer";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
