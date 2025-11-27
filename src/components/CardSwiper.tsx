"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Link from "next/link";
import { SLIDES } from "@/constants/slides";
import { useCardSwiper } from "@/hooks/useCardSwiper";
import SwiperIndicator from "./SwiperIndicator";

export default function CardSwiper() {
  const {
    activeIndex,
    handlePrev,
    handleNext,
    handleDotClick,
    autoPlayOn,
    autoPlayOff,
    onSwiper,
    onSlideChange,
  } = useCardSwiper();

  return (
    <div className="max-w-300 pt-[50px] pb-9 relative">
      <Swiper
        effect={"cards"}
        modules={[EffectCards, Autoplay]}
        className="card-swiper"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        cardsEffect={{
          perSlideOffset: 7,
          perSlideRotate: 0,
          rotate: false,
          slideShadows: true,
        }}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}>
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-bottom bg-cover bg-no-repeat rounded-[30px] relative"
              style={{
                backgroundImage: `url('/asset/top_bg/${slide.image}')`,
              }}>
              <div className="absolute inset-0 bg-black/30 rounded-[30px] py-10 px-15 flex flex-col justify-between items-start text-white font-semibold">
                <div className="flex gap-2 items-center">
                  <i className="w-1 h-1 rounded-full bg-white" />
                  <h6 className="text-lg">인사이트</h6>
                </div>
                <h3 className="text-[44px] break-keep">{slide.content}</h3>
                <Link
                  href={slide.href}
                  className="bg-black px-[50px] py-5 rounded-full">
                  자세히 보기
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <SwiperIndicator
        totalSlides={SLIDES.length}
        activeIndex={activeIndex}
        onPrev={handlePrev}
        onNext={handleNext}
        onDotClick={handleDotClick}
        onPlayOn={autoPlayOn}
        onPlayOff={autoPlayOff}
      />
    </div>
  );
}
