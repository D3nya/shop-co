import React from "react";
import { classNames } from "../../../utils/classNames";
import { Link } from "react-router";

import StarSvg from "../../../assets/icons/star.svg";

interface MainProps {
  className?: string;
}

export const Main: React.FC<MainProps> = ({ className }) => {
  return (
    <section className={classNames("bg-accent-gray grow", className)}>
      <div className="container xl:flex xl:justify-between">
        <div className="max-w-[600px] pt-10 xl:pt-24 pb-8 xl:pb-[120px]">
          <h2 className="uppercase font-bold font-integral text-4xl/[34px] xl:text-6xl/[64px]">
            Find clothes <br /> that matches <br /> your style
          </h2>
          <p className="mt-5 xl:mt-8 text-sm/[20px] opacity-60">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </p>
          <Link
            to="/shop"
            className="mt-6 xl:mt-8 block text-white bg-black text-center py-3 rounded-3xl text-base xl:max-w-[210px] hover:opacity-60 transition-opacity"
          >
            Shop Now
          </Link>
          <div className="mt-4 xl:mt-12 flex flex-wrap items-center justify-center xl:justify-between gap-x-12 gap-y-3">
            <div className="relative after:content-[''] after:h-14 after:w-[2px] after:opacity-10 after:bg-black after:mt-2 after:absolute after:-right-6 xl:after:-right-12 after:top-0">
              <h3 className="font-bold text-4xl">200+</h3>
              <p className="text-sm/[20px] opacity-60">International Brands</p>
            </div>
            <div className="xl:relative xl:after:content-[''] xl:after:h-14 xl:after:w-[2px] xl:after:opacity-10 xl:after:bg-black xl:after:mt-2 xl:after:absolute xl:after:-right-12 xl:after:top-0">
              <h3 className="font-bold text-4xl">2,000+</h3>
              <p className="text-sm/[20px] opacity-60">High-Quality Products</p>
            </div>
            <div>
              <h3 className="font-bold text-4xl">30,000+</h3>
              <p className="text-sm/[20px] opacity-60">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="bg-custom bg-cover bg-[center_top_1rem] xl:bg-[center_top_-5rem] xl:max-w-[700px] bg-no-repeat min-h-[450px] xl:grow">
          <div className="flex justify-end xl:pt-[86px]">
            <img src={StarSvg} alt="Star Icon" className="w-20 h-20 xl:w-26 xl:h-26" />
          </div>
          <div className="flex justify-start xl:pt-[86px]">
            <img src={StarSvg} alt="Star Icon" className="w-10 h-10 xl:w-14 xl:h-14" />
          </div>
        </div>
      </div>
    </section>
  );
};
