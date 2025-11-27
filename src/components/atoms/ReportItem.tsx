import { Report } from "@/types/report";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: Report;
}

const ReportItem = ({ data }: Props) => {
  return (
    <div className="w-[250px]">
      <Link href={data.href}>
        <div className="relative w-[250px] h-[350px] mb-4 overflow-hidden rounded-2xl">
          <Image
            src={`/asset/trends/${data.image}`}
            alt={data.title}
            className="w-full h-full object-cover"
            width={250}
            height={350}
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
          <div className="absolute bottom-0 left-0 right-0 px-7 py-[30px] flex flex-col gap-4 justify-end text-white">
            <h5 className="text-[20px] font-medium leading-7 break-keep">
              {data.title}
            </h5>
            <small className="text-sm font-medium leading-[22px] opacity-80">
              {data.date}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ReportItem;
