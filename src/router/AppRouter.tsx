import { lazy } from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import pageRoutes from "./pageRoutes/pageRoutes";
import userRoutes from "./userRoutes/userRoutes";

const HomePage = lazy(() => import("../pages/Home"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {pageRoutes}
        {userRoutes}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
