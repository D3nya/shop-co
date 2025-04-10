import { AutoScrollToTop } from "@/shared/ui/AutoScrollToTop";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";
import { ErrorBlock } from "@/widgets/ErrorBlock";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { LoaderBlock } from "@/widgets/LoaderBlock";
import React, { Suspense } from "react";
import { Outlet } from "react-router";

export const MainLayout: React.FC = () => {
  return (
    <AutoScrollToTop>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary fallback={<ErrorBlock />}>
            <Suspense fallback={<LoaderBlock />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </AutoScrollToTop>
  );
};
