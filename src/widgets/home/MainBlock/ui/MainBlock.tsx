import StarSvg from "@/shared/assets/icons/star.svg";
import { Link } from "@/shared/ui/Link";
import { Title } from "@/shared/ui/Title";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface MainBlockProps {
  className?: string;
}

export const MainBlock: React.FC<MainBlockProps> = ({ className }) => {
  return (
    <section className={classNames("bg-accent-gray grow", className)}>
      <div className="container xl:flex xl:justify-between">
        <div className="max-w-[600px] pt-10 xl:pt-24 pb-8 xl:pb-[120px]">
          <Title position="left" type="h2">
            Find clothes
            {" "}
            <br />
            {" "}
            that matches
            {" "}
            <br />
            {" "}
            your style
          </Title>
          <p className="mt-5 xl:mt-8 text-sm/[20px] text-accent-light-gray">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </p>
          <Link to="/shop" className="mt-6 xl:mt-8 xl:max-w-[210px]" theme="black">
            Shop Now
          </Link>
          <div className="mt-4 xl:mt-12 flex flex-wrap items-center justify-center xl:justify-between gap-x-12 gap-y-3">
            <div className="relative after:content-[''] after:h-14 after:w-[2px] after:opacity-10 after:bg-black after:mt-2 after:absolute after:-right-6 xl:after:-right-12 after:top-0">
              <h3 className="font-bold text-4xl">200+</h3>
              <p className="text-sm/[20px] text-accent-light-gray">International Brands</p>
            </div>
            <div className="xl:relative xl:after:content-[''] xl:after:h-14 xl:after:w-[2px] xl:after:opacity-10 xl:after:bg-black xl:after:mt-2 xl:after:absolute xl:after:-right-12 xl:after:top-0">
              <h3 className="font-bold text-4xl">2,000+</h3>
              <p className="text-sm/[20px] text-accent-light-gray">High-Quality Products</p>
            </div>
            <div>
              <h3 className="font-bold text-4xl">30,000+</h3>
              <p className="text-sm/[20px] text-accent-light-gray">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="bg-custom-main before:bg-no-repeat before:bg-[length:120%] xl:before:bg-[length:106%] before:bg-[position:-40px_-50px] xl:before:bg-[position:-30px_-50px] h-[448px] w-full xl:w-[600px] xl:h-[658px] before:-mx-[1rem] xl:before:mx-0 relative z-5 before:inset-0 before:absolute before:content-[''] xl:self-end">
          <div className="pt-10 flex flex-col gap-5">
            <div className="self-end">
              <img src={StarSvg} alt="Star Icon" className="w-20 h-20 xl:w-26 xl:h-26 relative z-10" />
            </div>
            <div className="self-start">
              <img src={StarSvg} alt="Star Icon" className="w-10 h-10 xl:w-14 xl:h-14 relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
