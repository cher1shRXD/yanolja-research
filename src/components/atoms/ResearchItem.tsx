"use client";

import { Research } from "@/types/research";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: Research;
}

const ResearchItem = ({ data }: Props) => {
  return (
    <div className="w-full">
      <Link href={data.href}>
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-[1.425/2]">
            <Image
              src={`/asset/report/${data.image}`}
              alt={data.date}
              className="object-cover hover:drop-shadow-xl transition-all"
              fill
            />
          </div>
          <small className="text-sm font-medium leading-[22px] text-light-gray">
            {data.date}
          </small>
        </div>
      </Link>
    </div>
  );
};

export default ResearchItem;
