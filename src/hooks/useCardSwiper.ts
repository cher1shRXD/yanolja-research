import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

export function useCardSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  const autoPlayOn = () => {
    swiperRef.current?.autoplay.start();
  };

  const autoPlayOff = () => {
    swiperRef.current?.autoplay.stop();
  };

  const onSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const onSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return {
    activeIndex,
    handlePrev,
    handleNext,
    handleDotClick,
    autoPlayOn,
    autoPlayOff,
    onSwiper,
    onSlideChange,
  };
}
