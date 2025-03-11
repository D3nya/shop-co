import { Route } from "react-router";

const userRoutes = (
  <>
    <Route path="/user">
      <Route index element={<div>User Profile</div>} />
      <Route path=":userId" element={<div>User Profile 12312</div>} />
      <Route path="settings" element={<div>User Settings</div>} />
      <Route />
    </Route>
  </>
);

export default userRoutes;
