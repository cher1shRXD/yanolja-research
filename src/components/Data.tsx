"use client";

import Image from "next/image";
import SectionTitle from "./common/SectionTitle";

const Data = () => {
  return (
    <div className="w-[275px]">
      <SectionTitle title="데이터" href="#" />
      <div className="w-full pt-[54px] pb-[47px] bg-secondary flex flex-col items-center gap-7 rounded-2xl">
        <Image src="/asset/icon_mail.svg" alt="Mail Icon" width={118} height={118} />
        <p className="px-[30px] text-center leading-6 text-white font-semibold">야놀자리서치가 활용한 데이터를 편하게 사용해보세요!</p>
      </div>
    </div>
  )
}

export default Data