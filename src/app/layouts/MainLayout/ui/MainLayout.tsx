import { AutoScrollToTop } from "@/shared/ui/AutoScrollToTop";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";
import { Loader } from "@/shared/ui/Loader/ui/Loader";
import { ErrorBlock } from "@/widgets/ErrorBlock";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import React, { Suspense } from "react";
import { Outlet } from "react-router";

export const MainLayout: React.FC = () => {
  return (
    <AutoScrollToTop>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary fallback={<ErrorBlock />}>
            <Suspense fallback={<div className="flex justify-center items-center"><Loader className="w-full h-full block" /></div>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </AutoScrollToTop>
  );
};
