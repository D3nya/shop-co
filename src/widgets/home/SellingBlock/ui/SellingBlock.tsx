import { ProductSlider } from "@/entities/product";
import { SHOP_ITEMS } from "@/shared/config/consts/shopItems";
import { Link } from "@/shared/ui/Link";
import { Title } from "@/shared/ui/Title";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface SellingBlockProps {
  className?: string;
}

export const SellingBlock: React.FC<SellingBlockProps> = ({ className }) => {
  return (
    <section className={classNames(className)}>
      <div className="container">
        <Title type="h2" position="center" className="mt-12 xl:mt-20">
          Top Selling
        </Title>

        <div className="-mr-[1rem] xl:mr-0 mt-8 xl:mt-14">
          <ProductSlider products={SHOP_ITEMS} />
        </div>

        <Link to="/on-sale" className="xl:max-w-[210px] mt-6 xl:mt-9 xl:mx-auto" theme="white">
          View All
        </Link>

        <hr className="opacity-10 mt-16" />
      </div>
    </section>
  );
};
