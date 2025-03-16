import React from "react";
import StarSvg from "../../../assets/icons/rating/star.svg";
import HalfStarSvg from "../../../assets/icons/rating/half-star.svg";
import { classNames } from "../../../utils/classNames";

interface RatingProps {
  className?: string;
  rating: number;
  maxRating?: number;
  total?: boolean;
}

export const Rating: React.FC<RatingProps> = ({ className, rating, maxRating = 5, total = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className={classNames(className, "flex justify-start items-center gap-x-1 max-w-[130px] xl:max-w-[150px]")}>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;

        if (starValue <= fullStars) {
          return <img key={index} src={StarSvg} className="h-4 w-4 xl:h-5 xl:w-5" />;
        } else if (hasHalfStar && starValue === fullStars + 1) {
          return <img key={index} src={HalfStarSvg} className="h-4 w-4 xl:h-5 xl:w-5" />;
        }
      })}
      {total && (
        <div className="text-sm xl:text-base text-center ml-2">
          {Math.floor(rating * 10) / 10 + "/"}
          <span className="opacity-60">{maxRating}</span>
        </div>
      )}
    </div>
  );
};
