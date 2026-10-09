"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

export default function Myswiper({
  imagesList,
  slidesPerView,
  spaceBetween,
}: {
  imagesList: string[];
  slidesPerView?: number;
  spaceBetween?: number;
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop
      navigation
      //  pagination

      className="w-full"
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {imagesList.map((imaSrc, index) => (
        <SwiperSlide key={index}>
          <img
            src={imaSrc}
            alt=""
            className="w-full h-100 object-cover opacity-100"
          />
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
     */}
    </Swiper>
  );
}
