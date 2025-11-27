"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./common/SectionTitle";
import { REPORTS } from "@/constants/report";
import ReportItem from "./atoms/ReportItem";
import ScrollController from "./widgets/ScrollController";
import "swiper/css";
import { useCardSwiper } from "@/hooks/useCardSwiper";
import SwiperIndicator from "./widgets/SwiperIndicator";

const Report = () => {
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
    <div className="flex-1 relative">
      <SectionTitle title="동향보고서" href="#" />
      <ScrollController type="prev" onClick={handlePrev} />
      <Swiper
        slidesPerView={1}
        className="report-swiper"
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        spaceBetween={32}
      >
        {REPORTS.map((report, idx) => (
          <SwiperSlide key={idx}>
            <ReportItem data={report} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ScrollController type="next" onClick={handleNext} />
      <SwiperIndicator
        totalSlides={REPORTS.length}
        activeIndex={activeIndex}
        onPrev={handlePrev}
        onNext={handleNext}
        onDotClick={handleDotClick}
        onPlayOn={autoPlayOn}
        onPlayOff={autoPlayOff}
        showButtons={false}
      />
    </div>
  );
};

export default Report;
