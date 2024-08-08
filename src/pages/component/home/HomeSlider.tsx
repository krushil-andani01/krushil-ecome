import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSlider(props: any) {
  if (!props.lstCarousel) {
    return (
      <div className="text-center bg-white flex justify-center">
        <img
          src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif"
          className="h-96"
        />
      </div>
    );
  }
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {props.lstCarousel &&
          props.lstCarousel?.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="h-[600px] w-full">
                <img
                  src={item.imageUrl}
                  className=" h-full w-full object-fill"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
