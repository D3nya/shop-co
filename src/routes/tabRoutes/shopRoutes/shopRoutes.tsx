import { Route, type RouteObject } from "react-router";

const shopConfig: RouteObject[] = [
  { path: "/", element: <div>Homepage</div> },
  { path: "/men", element: <div>Men</div> },
  { path: "/women", element: <div>Women</div> },
  { path: "/kids", element: <div>Kids</div> },
];

const shopRoutes = (
  <>
    {shopConfig.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}></Route>
    ))}
  </>
);

export default shopRoutes;
