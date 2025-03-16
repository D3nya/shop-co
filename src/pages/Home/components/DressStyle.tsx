import React from "react";
import { classNames } from "../../../utils/classNames";
import { Title } from "../../../components/ui/Title";
import { Link } from "react-router";

interface DressStyleProps {
  className?: string;
}

export const DressStyle: React.FC<DressStyleProps> = ({ className }) => {
  return (
    <section className={classNames(className, "mt-12")}>
      <div className="container">
        <div className="bg-accent-gray rounded-xl">
          <Title type="h2" position="center" className="pt-10">
            Browse By Dress Style
          </Title>

          <div className="flex items-center justify-center flex-wrap gap-4 xl:gap-5 xl mt-7 xl:mt-16 pb-7 xl:pb-20 px-6 xl:px-16">
            <Link to="/casual" className="bg-white rounded-xl">
              <div className="bg-custom-dress-casual w-[310px] h-[190px] xl:w-[407px] xl:h-[289px] before:rounded-xl relative z-5 before:inset-0 before:absolute before:content-['']">
                <h3 className="text-2xl font-bold pt-4 pl-6 z-10 relative">Casual</h3>
              </div>
            </Link>

            <Link to="/formal" className="bg-white rounded-xl">
              <div className="bg-custom-dress-formal w-[310px] h-[190px] xl:w-[684px] xl:h-[289px] before:rounded-xl relative z-5 before:inset-0 before:absolute before:content-['']">
                <h3 className="text-2xl font-bold pt-4 pl-6 z-10 relative">Formal</h3>
              </div>
            </Link>

            <Link to="/party" className="bg-white rounded-xl">
              <div className="bg-custom-dress-party w-[310px] h-[190px] xl:w-[684px] xl:h-[289px] before:rounded-xl relative z-5 before:inset-0 before:absolute before:content-['']">
                <h3 className="text-2xl font-bold pt-4 pl-6 z-10 relative">Party</h3>
              </div>
            </Link>

            <Link to="/gym" className="bg-white rounded-xl">
              <div className="bg-custom-dress-gym w-[310px] h-[190px] xl:w-[407px] xl:h-[289px] before:rounded-xl relative z-5 before:inset-0 before:absolute before:content-['']">
                <h3 className="text-2xl font-bold pt-4 pl-6 z-10 relative">Gym</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
