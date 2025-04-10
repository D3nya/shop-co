import { ProductCard } from "@/entities/product";
import ArrowSvg from "@/shared/assets/icons/arrow.svg";
import FilterSvg from "@/shared/assets/icons/filter.svg";
import { SHOP_ITEMS } from "@/shared/config/consts/shopItems";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface ShopPageProps {
  className?: string;
}

export const ShopPage: React.FC<ShopPageProps> = ({ className }) => {
  return (
    <div className="container">
      <section>Home Casual</section>
      <div className="flex justify-between">
        <aside className="hidden max-w-[300px] xl:w-full">aside</aside>

        <section className="xl:grow w-full">
          <div className="flex justify-between items-baseline gap-x-2">
            <h2 className="text-2xl font-bold">Shop</h2>

            <div className="flex grow items-center justify-between">
              <p className="text-sm text-accent-light-gray">Showing 1-10 of 100 Products</p>
              <button type="button" className="bg-accent-gray p-2 rounded-full">
                <img src={FilterSvg} alt="Filter Icon" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-6 mt-9">
            {SHOP_ITEMS.map(item => <ProductCard key={item.id} item={item} />)}
          </div>

          <hr className="w-full opacity-10 mt-6" />

          <div className="flex justify-between items-center mt-8 gap-x-2">
            <button type="button" className="flex items-center gap-x-2 rounded-xl hover:opacity-60 transition-opacity border p-2 font-medium border-black/10">
              <img src="" alt="" />
              <img src={ArrowSvg} alt="Right Arrow Icon" className="w-4 h-4" />

              Previous
            </button>
            <div className="flex">
              <button type="button" className={classNames("py-2 px-4 font-medium text-accent-light-gray", true && "bg-accent-gray rounded-xl text-black")}>1</button>
              <button type="button" className={classNames("py-2 px-4 font-medium text-accent-light-gray", false && "bg-accent-gray rounded-xl text-black")}>4</button>
            </div>
            <button type="button" className="flex items-center gap-x-2 rounded-xl hover:opacity-60 transition-opacity border p-2 font-medium border-black/10">
              Next
              <img
                src={ArrowSvg}
                alt="Left Arrow Icon"
                className="w-4 h-4 transform-[scaleX(-1)]"
              />

            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
