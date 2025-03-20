import type { Swiper as SwiperType } from "swiper";
import { Review } from "@/entities/review";
import ArrowSvg from "@/shared/assets/icons/arrow.svg";
import { Title } from "@/shared/ui/Title";
import { classNames } from "@/shared/utils/classNames";
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { REVIEWS } from "../model/reviewsConstants";

interface ReviewsBlockProps {
  className?: string;
}

export const ReviewsBlock: React.FC<ReviewsBlockProps> = ({ className }) => {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className={classNames(className, "mt-12 overflow-hidden")}>
      <div className="container relative z-10">
        <Title type="h2" position="left">
          Our Happy Customers
        </Title>

        <div className="">
          <Swiper
            className="overflow-visible!"
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            slidesPerView={1}
            watchSlidesProgress
            spaceBetween={16}
            a11y={{ prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
            breakpoints={{
              1280: {
                slidesPerView: 3,
                initialSlide: 2,
                spaceBetween: 20,
              },
            }}
          >
            {REVIEWS.map(review => (
              <SwiperSlide
                key={review.id}
                className="p-6 mt-6 border border-black/10 rounded-xl h-[190px]! xl:h-[240px]! [&:not(.swiper-slide-visible)]:blur-[2px]"
              >
                <Review review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center gap-x-4 absolute right-0 -top-6">
            <button type="button" onClick={() => swiperRef.current?.slidePrev()}>
              <img src={ArrowSvg} alt="Right Arrow Icon" className="w-6 h-6 hover:opacity-60 transition-opacity" />
            </button>
            <button type="button" onClick={() => swiperRef.current?.slideNext()}>
              <img
                src={ArrowSvg}
                alt="Left Arrow Icon"
                className="w-6 h-6 transform-[scaleX(-1)] hover:opacity-60 transition-opacity"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
