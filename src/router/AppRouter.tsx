import { Route, Routes } from "react-router";
import { lazy } from "react";
import userRoutes from "./userRoutes/userRoutes";
import pageRoutes from "./pageRoutes/pageRoutes";
import { MainLayout } from "../layouts/MainLayout";

const HomePage = lazy(() => import("../pages/Home"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const AppRouter = () => {
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
};

export default AppRouter;
