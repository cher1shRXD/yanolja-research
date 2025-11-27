"use client";

import Image from "next/image";

interface Props {
  totalSlides: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  onPlayOn: () => void;
  onPlayOff: () => void;
}

export default function SwiperIndicator({
  totalSlides,
  activeIndex,
  onPrev,
  onNext,
  onDotClick,
  onPlayOn,
  onPlayOff,
}: Props) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-center gap-6">
      <Image
        src="/asset/icon_arrow_left.svg"
        alt="Previous"
        width={14}
        height={14}
        className="cursor-pointer"
        onClick={onPrev}
      />

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              activeIndex === index
                ? "bg-black"
                : "border border-gray-300 bg-white"
            }`}
          />
        ))}
      </div>

      <Image
        src="/asset/icon_play.svg"
        alt="Play"
        width={10}
        height={10}
        className="cursor-pointer"
        onClick={onPlayOn}
      />

      <Image
        src="/asset/icon_pause.svg"
        alt="Pause"
        width={10}
        height={10}
        className="cursor-pointer"
        onClick={onPlayOff}
      />

      <Image
        src="/asset/icon_arrow_right.svg"
        alt="Next"
        width={14}
        height={14}
        className="cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
}
