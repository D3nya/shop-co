import type { Swiper as SwiperType } from "swiper";
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSvg from "../../../assets/icons/arrow.svg";
import OkSvg from "../../../assets/icons/ok.svg";
import { Rating } from "../../../components/shared/Rating";

import { Title } from "../../../components/ui/Title";
import { classNames } from "../../../utils/classNames";

interface ReviewsProps {
  className?: string;
}

const REVIEWS = [
  {
    id: 1,
    rating: 5,
    verified: true,
    firstName: "Sarah",
    lastName: "Moas",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    rating: 3.57,
    verified: true,
    firstName: "Alex",
    lastName: "Kolson",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    rating: 4.323,
    verified: true,
    firstName: "James",
    lastName: "Leo",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    rating: 3.87,
    verified: false,
    firstName: "Mooen",
    lastName: "Keol",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 5,
    rating: 2.13,
    verified: true,
    firstName: "Welpo",
    lastName: "Roam",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 6,
    rating: 3.13,
    verified: true,
    firstName: "Welpo",
    lastName: "Roam",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 7,
    rating: 4.13,
    verified: true,
    firstName: "Welpo",
    lastName: "Roam",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
];

export const Reviews: React.FC<ReviewsProps> = ({ className }) => {
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
            {REVIEWS.map(item => (
              <SwiperSlide
                key={item.id}
                className="p-6 mt-6 border border-black/10 rounded-xl h-[190px]! xl:h-[240px]! [&:not(.swiper-slide-visible)]:blur-[2px]"
              >
                <Rating rating={item.rating} total={false} />
                <div className="mt-3 flex items-center justify-start  gap-x-1">
                  <div className="font-bold text-base xl:text-xl leading-1.5">
                    {`${item.firstName} ${item.lastName.slice(0, 1).toUpperCase()}.`}
                  </div>
                  <div>{item.verified && <img src={OkSvg} alt="Ok Icon" className="h-5 w-5" />}</div>
                </div>
                <p className="mt-2 leading-[20px] text-sm xl:text-base opacity-60">
                  {item.review.length > 170 ? `${item.review.slice(0, 167)}...` : item.review}
                </p>
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
