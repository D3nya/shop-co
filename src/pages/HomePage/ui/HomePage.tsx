import { ArrivalsBlock } from "@/widgets/home/ArrivalsBlock";
import { BrandsBlock } from "@/widgets/home/BrandsBlock";
import { DressBlock } from "@/widgets/home/DressBlock";
import { MainBlock } from "@/widgets/home/MainBlock";
import { ReviewsBlock } from "@/widgets/home/ReviewsBlock";
import { SellingBlock } from "@/widgets/home/SellingBlock";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <MainBlock />
      <BrandsBlock />
      <ArrivalsBlock />
      <SellingBlock />
      <DressBlock />
      <ReviewsBlock />
    </>
  );
};

export default HomePage;
