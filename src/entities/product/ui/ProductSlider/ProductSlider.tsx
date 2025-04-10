import type { Product } from "../../model/productTypes";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductSliderProps {
  className?: string;
  products: Product[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ className, products }) => {
  return (
    <Swiper
      className={className}
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
      {products.map(item => (
        <SwiperSlide key={item.id}>
          <ProductCard item={item} slider />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
