import { Route, type RouteObject } from "react-router";

const userConfig: RouteObject[] = [
  { path: "/profile/:userId", element: <div>User Profile</div> },
  { path: "/settings", element: <div>User Settings</div> },
];

const userRoutes = (
  <>
    {userConfig.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}></Route>
    ))}
  </>
);

export default userRoutes;
