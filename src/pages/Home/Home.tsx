import React from "react";

import { Brands } from "./components/Brands";
import { Main } from "./components/Main";
import { NewArrivals } from "./components/NewArrivals";

export const Home: React.FC = () => {
  return (
    <>
      <Main />
      <Brands />
      <NewArrivals />
    </>
  );
};
