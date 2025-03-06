import { Route, type RouteObject } from "react-router";
import shopRoutes from "./shopRoutes/shopRoutes";

const tabConfig: RouteObject[] = [
  { path: "/on-sale", element: <div>On Sale</div> },
  { path: "/new-arrivals", element: <div>New Arrivals</div> },
  { path: "/brands", element: <div>Brands</div> },
];

const tabRoutes = (
  <>
    {shopRoutes}
    {tabConfig.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}></Route>
    ))}
  </>
);

export default tabRoutes;
