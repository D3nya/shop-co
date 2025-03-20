import type { Review as ReviewType } from "../model/reviewTypes";
import { Rating } from "@/shared/ui/Rating";
import React from "react";
import OkSvg from "../../../shared/assets/icons/ok.svg";

interface ReviewProps {
  className?: string;
  review: ReviewType;
}

export const Review: React.FC<ReviewProps> = ({ className, review }) => {
  return (
    <div className={className}>
      <Rating rating={review.rating} total={false} />

      <div className="mt-3 flex items-center justify-start  gap-x-1">
        <div className="font-bold text-base xl:text-xl leading-1.5">
          {`${review.firstName} ${review.lastName.slice(0, 1).toUpperCase()}.`}
        </div>
        <div>{review.verified && <img src={OkSvg} alt="Ok Icon" className="h-5 w-5" />}</div>
      </div>

      <p className="mt-2 leading-[20px] text-sm xl:text-base text-accent-light-gray">
        {review.text.length > 170 ? `${review.text.slice(0, 167)}...` : review.text}
      </p>
    </div>
  );
};
