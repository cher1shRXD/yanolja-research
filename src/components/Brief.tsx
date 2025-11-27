"use client";

import { Swiper } from "swiper/react";
import SectionTitle from "./common/SectionTitle";
import { Autoplay, FreeMode, Scrollbar } from "swiper/modules";
import { BRIEF } from "@/constants/brief";
import { SwiperSlide } from "swiper/react";
import BriefItem from "./atoms/BriefItem";
import "swiper/css/scrollbar";
import ScrollController from "./widgets/ScrollController";
import { useCardSwiper } from "@/hooks/useCardSwiper";

const Brief = () => {
  const { onSwiper, handleNext, handlePrev } = useCardSwiper();

  return (
    <div className="w-[930px] relative">
      <SectionTitle title="인사이트 / 브리프" href="#" />
      <ScrollController type="prev" onClick={handlePrev} />
      <Swiper
        slidesPerView={3.15}
        spaceBetween={8}
        freeMode={true}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        onSwiper={onSwiper}
        modules={[FreeMode, Autoplay, Scrollbar]}
        className="brief-swiper">
        {BRIEF.map((brief) => (
          <SwiperSlide key={brief.id}>
            <BriefItem data={brief} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ScrollController type="next" onClick={handleNext} />
    </div>
  );
};

export default Brief;
