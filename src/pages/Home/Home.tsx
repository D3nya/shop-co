import React from "react";

import { Brands } from "./components/Brands";
import { Main } from "./components/Main";
import { NewArrivals } from "./components/NewArrivals";
import { TopSelling } from "./components/TopSelling";
import { DressStyle } from "./components/DressStyle";
import { Reviews } from "./components/Reviews";

export const Home: React.FC = () => {
  return (
    <>
      <Main />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Reviews />
    </>
  );
};
