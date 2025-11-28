"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./common/SectionTitle";
import ScrollController from "./widgets/ScrollController";
import { Autoplay, FreeMode, Scrollbar } from "swiper/modules";
import { RESEARCHES } from "@/constants/research";
import ResearchItem from "./atoms/ResearchItem";
import { useCardSwiper } from "@/hooks/useCardSwiper";

const Research = () => {
  const { onSwiper, handleNext, handlePrev } = useCardSwiper();

  return (
    <div className="w-full relative">
      <SectionTitle title="연구보고서" href="#" />
      <ScrollController type="prev" onClick={handlePrev} />
      <Swiper
        slidesPerView={4.5}
        spaceBetween={40}
        freeMode={true}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        onSwiper={onSwiper}
        modules={[FreeMode, Autoplay, Scrollbar]}
        className="scroll-swiper">
        {RESEARCHES.map((research, idx) => (
          <SwiperSlide key={idx}>
            <ResearchItem data={research} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ScrollController type="next" onClick={handleNext} />
    </div>
  );
};

export default Research;
