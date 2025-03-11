import { lazy } from "react";
import { Route } from "react-router";

const ShopPage = lazy(() => import("../../pages/Shop"));
const OnSalePage = lazy(() => import("../../pages/OnSale"));
const NewArrivalsPage = lazy(() => import("../../pages/NewArrivals"));
const BrandsPage = lazy(() => import("../../pages/Brands"));

const pageRoutes = (
  <>
    <Route path="/shop" element={<ShopPage />} />
    <Route path="/on-sale" element={<OnSalePage />} />
    <Route path="/new-arrivals" element={<NewArrivalsPage />} />
    <Route path="/brands" element={<BrandsPage />} />
  </>
);

export default pageRoutes;
