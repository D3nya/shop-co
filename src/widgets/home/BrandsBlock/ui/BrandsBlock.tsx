import CalvinSvg from "@/shared/assets/icons/brands/calvin.svg";
import GucciSvg from "@/shared/assets/icons/brands/gucci.svg";
import PradaSvg from "@/shared/assets/icons/brands/prada.svg";
import VersaceSvg from "@/shared/assets/icons/brands/versace.svg";
import ZaraSvg from "@/shared/assets/icons/brands/zara.svg";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface BrandsBlockProps {
  className?: string;
}

export const BrandsBlock: React.FC<BrandsBlockProps> = ({ className }) => {
  return (
    <section className={classNames(className, "bg-black")}>
      <div className="container">
        <ul className="flex items-center flex-wrap justify-center xl:justify-between gap-y-5 gap-x-4 xl:gap-x-20 py-10">
          <li>
            <img src={VersaceSvg} alt="Versace Icon" className="w-[116px] h-[23px] xl:w-[166px] xl:h-[33px]" />
          </li>
          <li>
            {" "}
            <img src={ZaraSvg} alt="Zara Icon" className="w-[63px] h-[26px] xl:w-[91px] xl:h-[38px]" />
          </li>
          <li>
            {" "}
            <img src={GucciSvg} alt="Gucci Icon" className="w-[110px] h-[25px] xl:w-[156px] xl:h-[36px]" />
          </li>
          <li>
            {" "}
            <img src={PradaSvg} alt="Prada Icon" className="w-[127px] h-[21px] xl:w-[194px] xl:h-[32px]" />
          </li>
          <li>
            {" "}
            <img src={CalvinSvg} alt="Calvin Icon" className="w-[134px] h-[21px] xl:w-[206px] xl:h-[35px]" />
          </li>
        </ul>
      </div>
    </section>
  );
};
