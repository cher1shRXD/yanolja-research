"use client";

import { NEWS } from "@/constants/news";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NewsItem from "./atoms/NewsItem";

const News = () => {
  const [page, setPage] = useState<0 | 1>(0);

  return (
    <div className="flex-1">
      <div className="mb-[30px] w-full flex justify-between items-start">
        <div className="flex items-center gap-5">
          <h5
            className={`text-[28px] font-semibold ${
              page === 0 ? "text-black" : "text-light-gray"
            } cursor-pointer leading-8`}
            onClick={() => setPage(0)}>
            언론보도
          </h5>
          <div className="w-px h-8 bg-light-gray" />
          <h5
            className={`text-[28px] font-semibold ${
              page === 1 ? "text-black" : "text-light-gray"
            } cursor-pointer leading-8`}
            onClick={() => setPage(1)}>
            보도자료
          </h5>
        </div>
        <Link href="#" className="flex items-center">
          <p>더보기</p>
          <Image
            src="/asset/arrow_right.svg"
            alt="더보기"
            width={12}
            height={12}
          />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-6">
        {page === 0
          ? NEWS.filter((n) => n.type === "언론보도").map((news, index) => (
              <NewsItem key={index} data={news} />
            ))
          : NEWS.filter((n) => n.type === "보도자료").map((news, index) => (
              <NewsItem key={index} data={news} />
            ))}
      </div>
    </div>
  );
};

export default News;
