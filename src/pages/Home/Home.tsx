import React from "react";

import { Brands } from "./components/Brands";
import { DressStyle } from "./components/DressStyle";
import { Main } from "./components/Main";
import { NewArrivals } from "./components/NewArrivals";
import { Reviews } from "./components/Reviews";
import { TopSelling } from "./components/TopSelling";

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
