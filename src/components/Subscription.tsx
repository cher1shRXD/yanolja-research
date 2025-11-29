"use client";

import { SNS } from "@/constants/sns";
import Sns from "./atoms/Sns";
import Link from "next/link";

const Subscription = () => {
  return (
    <div className="w-full flex justify-between items-start">
      <div>
        <h2 className="text-[32px] mb-[26px] font-semibold">야놀자리서치의 더 많은 소식을 SNS로 만나보세요.</h2>
        <div className="w-full flex gap-[26px]">
          {
            SNS.map((sns, index) => (
              <Sns key={index} data={sns} />
            ))
          }
        </div>
      </div>
      <Link href="#" className="bg-button text-white py-5 px-[50px] leading-5 font-medium rounded-full cursor-pointer">구독신청하기</Link>
    </div>
  )
}

export default Subscription