import { Routes } from "react-router";

import userRoutes from "./userRoutes/userRoutes";
import notFoundRoute from "./notFoundRoute/notFoundRoute";
import tabRoutes from "./tabRoutes/tabRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {tabRoutes}
      {userRoutes}
      {notFoundRoute}
    </Routes>
  );
};

export default AppRouter;
