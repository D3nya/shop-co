import React from "react";
import { Link as RouterLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import Jeans from "../../../assets/img/selling/jeans.png";
import Shirt from "../../../assets/img/selling/shirt.png";
import Shorts from "../../../assets/img/selling/shorts.png";

import TShirt from "../../../assets/img/selling/t-shirt.png";
import { Rating } from "../../../components/shared/Rating";
import { Link } from "../../../components/ui/Link";
import { Title } from "../../../components/ui/Title";
import { classNames } from "../../../utils/classNames";

interface TopSellingProps {
  className?: string;
}

const TOP_SELLING = [
  { id: 1, img: Shirt, title: "Vertical Striped Shirt", rating: 5.0, price: 232, discount: 0.2 },
  { id: 2, img: TShirt, title: "Courage Graphiv T-Shirt", rating: 4.012, price: 145 },
  { id: 3, img: Shorts, title: "Loose Fit Bermuda Shorts", rating: 3.2, price: 80 },
  { id: 4, img: Jeans, title: "Faded Skinny Jeans", rating: 4.568, price: 210 },
];

export const TopSelling: React.FC<TopSellingProps> = ({ className }) => {
  return (
    <section className={classNames(className)}>
      <div className="container">
        <Title type="h2" position="center" className="mt-12 xl:mt-20">
          Top Selling
        </Title>

        <div className="-mr-[1rem] xl:mr-0 mt-8 xl:mt-14">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.5}
            a11y={{ prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
            breakpoints={{
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {TOP_SELLING.map(item => (
              <SwiperSlide key={item.id}>
                <RouterLink to={`/item/${item.id}`} className="h-[200px] w-[200px] xl:h-[300px] xl:w-[300px]">
                  <img
                    src={item.img}
                    alt={`${item.title} Photo`}
                    className="h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] rounded-2xl"
                  />
                </RouterLink>
                <RouterLink to={`/item/${item.id}`} className="block font-bold mt-2 xl:mt-4 xl:text-xl">
                  {item.title}
                </RouterLink>
                <div>
                  <Rating rating={item.rating} className="pt-1 xl:pt-2" />
                </div>
                <div className="pt-1 xl:pt-2 flex items-center gap-x-1 xl:gap-x-2">
                  <div
                    className={classNames(
                      "text-xl xl:text-2xl font-bold",
                      item.discount ? "opacity-40 line-through order-2" : "",
                    )}
                  >
                    {`$${item.price}`}
                  </div>
                  {item.discount && (
                    <>
                      <div className="text-xl xl:text-2xl font-bold order-1">
                        {`$${(item.price * (1 - item.discount)).toFixed()}`}
                      </div>
                      <div className="order-3 text-xs xl:text-sm font-medium text-red-500 px-2 py-1 bg-red-100 rounded-2xl">
                        {`-${(item.discount * 100).toFixed()}%`}
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Link to="/on-sale" className="xl:max-w-[210px] mt-6 xl:mt-9 xl:mx-auto" theme="white">
          View All
        </Link>

        <hr className="opacity-10 mt-16" />
      </div>
    </section>
  );
};
