import type { Product } from "../../model/productTypes";
import ProductDefalutImg from "@/shared/assets/img/product-default.png";
import { Rating } from "@/shared/ui/Rating";
import { classNames } from "@/shared/utils/classNames";
import React, { memo, useMemo } from "react";
import { Link } from "react-router";

interface ProductCardProps {
  className?: string;
  slider?: boolean;
  item: Product;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({ className, slider = false, item: { id, price, rating, title, discount = 0, img = ProductDefalutImg } }) => {
  const hasDiscount = useMemo(() => discount > 0, [discount]);

  const getDiscountedPrice = (price: number, discount: number) => (price * (1 - discount)).toFixed();
  const getDiscountPercentage = (discount: number) => (discount * 100).toFixed();

  return (
    <div className={className}>
      <Link to={`/item/${id}`} className={classNames(className, "block xl:h-[300px] xl:w-[300px] bg-accent-gray rounded-2xl", slider && "h-[200px] w-[200px]")}>
        <img
          src={img}
          alt={`${title} Image`}
          className="h-full w-full rounded-2xl aspect-square"
        />
      </Link>

      <Link to={`/item/${id}`} className="block font-bold mt-2 xl:mt-4 xl:text-xl truncate">
        {title}
      </Link>

      <div>
        <Rating rating={rating} className="pt-1 xl:pt-2" />
      </div>

      <div className="pt-1 xl:pt-2 flex items-center gap-x-1 xl:gap-x-2">
        <div
          className={classNames(
            "text-xl xl:text-2xl font-bold",
            hasDiscount ? "opacity-40 line-through order-2" : "",
          )}
        >
          {`$${price.toFixed()}`}
        </div>

        {hasDiscount && (
          <>
            <div className="text-xl xl:text-2xl font-bold order-1">
              {`$${getDiscountedPrice(price, discount)}`}
            </div>
            <div className="order-3 text-xs xl:text-sm font-medium text-red-500 px-2 py-1 bg-red-100 rounded-2xl">
              {`-${getDiscountPercentage(discount)}%`}
            </div>
          </>
        )}
      </div>
    </div>
  );
});
