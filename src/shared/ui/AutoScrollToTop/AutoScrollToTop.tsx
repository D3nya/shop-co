import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router";

interface AutoScrollToTopProps {
  children: React.ReactNode;
}

export function AutoScrollToTop({ children }: AutoScrollToTopProps) {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>{children}</>
  );
}
