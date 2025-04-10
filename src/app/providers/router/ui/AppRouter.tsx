import { MainLayout } from "@/app/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ShopPage } from "@/pages/ShopPage";
import { ROUTES } from "@/shared/config/router/routes";
import { Route, Routes } from "react-router";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.appRoute} element={<HomePage />} />
        <Route path={ROUTES.shop.page} element={<ShopPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
