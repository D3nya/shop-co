import HalfStarSvg from "@/shared/assets/icons/rating/half-star.svg";
import StarSvg from "@/shared/assets/icons/rating/star.svg";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface RatingProps {
  className?: string;
  rating: number;
  maxRating?: number;
  total?: boolean;
}

export const Rating: React.FC<RatingProps> = ({ className, rating, maxRating = 5, total = true }) => {
  const normalizedRating = Math.min(Math.max(rating, 0), maxRating);
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className={classNames(className, "flex justify-start items-center gap-x-1 max-w-[130px] xl:max-w-[150px]")}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const starValue = index + 1;

        if (starValue <= fullStars) {
          return <img key={1} src={StarSvg} className="h-4 w-4 xl:h-5 xl:w-5" />;
        }
        else if (hasHalfStar && starValue === fullStars + 1) {
          return <img key={2} src={HalfStarSvg} className="h-4 w-4 xl:h-5 xl:w-5" />;
        }
        else { return null; }
      })}
      {total && (
        <div className="text-sm xl:text-base text-center ml-2">
          {`${Math.floor(rating * 10) / 10}/`}
          <span className="opacity-60">{maxRating}</span>
        </div>
      )}
    </div>
  );
};
