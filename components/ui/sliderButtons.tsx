"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type sliderButtonsType = {
  containerStyles: string;
  buttonStyles: string;
  iconStyles: string;
};
export function SliderButtons({
  containerStyles,
  buttonStyles,
  iconStyles,
}: sliderButtonsType) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles}>
        <PiCaretLeftBold
          className={iconStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={buttonStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}
