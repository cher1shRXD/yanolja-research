"use client";

import type { Sns } from "@/types/sns";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: Sns;
}

const Sns = ({ data }: Props) => {
  return (
    <Link href={data.href}>
      <Image src={`/asset/sns/${data.image}`} alt={data.image.split(".")[0]} width={26} height={26} />
    </Link>
  )
}

export default Sns