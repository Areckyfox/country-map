import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import MainSliderStyle from "./style";

SwiperCore.use([Pagination, Autoplay]);

const MainSlider = ({ dataSlider, close }) => {
  const slides = dataSlider.map((el, i) => {
    return (
      <>
        <SwiperSlide key={`slide-${i}`}>
          <div className="img-container">
            <div onClick={close} className="close" />
            <img src={el.img} alt={el.alt} />
            <h2>{el.alt}</h2>
          </div>
        </SwiperSlide>
      </>
    );
  });

  return (
    <MainSliderStyle className={`container-element`}>
      <Swiper
        id="main-slider"
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </MainSliderStyle>
  );
};

export default MainSlider;
