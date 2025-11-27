import { Brief } from "@/types/brief";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: Brief;
}

const BriefItem = ({ data }: Props) => {
  return (
    <div className="w-[270px]">
      <Link href={data.href}>
        <Image
          src={`/asset/insight/${data.image}`}
          alt={data.title}
          width={270}
          height={180}
          className="aspect-3/2 object-cover rounded-[20px] mb-[18px]"
        />
        <p className="text-primary text-sm mb-1">{data.tag}</p>
        <h5 className="text-[20px] font-medium leading-7 mb-1.5 break-keep hover:underline">
          {data.title}
        </h5>
        <small className="text-light-gray text-sm font-medium leading-[22px]">
          {data.date}
        </small>
      </Link>
    </div>
  );
};

export default BriefItem;
