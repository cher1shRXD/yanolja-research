"use client";

import { News } from "@/types/news";
import Link from "next/link";

interface Props {
  data: News;
}

const NewsItem = ({ data }: Props) => {
  return (
    <Link href={data.href} className="w-full h-8 flex items-start justify-between">
      <p className="font-medium hover:underline">{data.title}</p>
      <small className="text-sm text-light-gray">{data.date}</small>
    </Link>
  )
}

export default NewsItem