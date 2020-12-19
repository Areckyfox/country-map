import styled from "styled-components";
import { backgroundColors } from "../../helperStyle";

const MainSliderStyleStyle = styled.div`
  overflow: hidden;
  position: relative;

  .swiper-container {
    max-width: 800px;
  }

  .swiper-pagination {
    bottom: 7vh;
  }

  .swiper-pagination-bullet {
    width: 4.22vw;
    height: 0.625vw;
    border-radius: 0;
    background-color: ${backgroundColors.white};
  }

  .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
    opacity: 0.5;
  }

  .swiper-wrapper {
    padding-inline-start: 0;
  }

  .swiper-slide {
    cursor: pointer;
  }
  .img-container {
    background-color: ${backgroundColors.white};
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }
  .img-description {
  }
  .close {
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;

    &:hover {
      opacity: 1;
    }
    &:before,
    &:after {
      position: absolute;
      left: 15px;
      content: " ";
      height: 33px;
      width: 2px;
      background-color: #333;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export default MainSliderStyleStyle;
