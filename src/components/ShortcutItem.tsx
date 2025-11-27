"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  name: string;
  href: string;
  image: string;
  isTint: boolean;
}

const ShortcutItem = ({ name, href, image, isTint = false }: Props) => {
  return (
    <li
      className={`p-6 rounded-2xl ${
        isTint ? "bg-primary-tint" : "bg-primary"
      } text-white flex flex-col gap-2.5 bg-no-repeat bg-bottom-right bg-size-[90px_auto]`}
      style={{ backgroundImage: `url('/asset/${image}.svg')` }}>
      <h6 className="text-[20px] font-semibold">{name}</h6>
      <Link href={href} className="flex items-center text-sm opacity-60">
        <p>바로가기</p>
        <ChevronRight size={14} />
      </Link>
    </li>
  );
};

export default ShortcutItem;
