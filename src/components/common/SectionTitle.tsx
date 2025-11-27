import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

const SectionTitle = ({ title, href }: Props) => {
  return (
    <Link href={href} className="">
      <h4 className="text-[28px] font-semibold leading-8 whitespace-nowrap tracking-[-0.035rem] text-black flex gap-1 items-center mb-5">
        {title}
        <Image src="/asset/arrow_right.svg" alt={href} width={20} height={20} />
      </h4>
    </Link>
  );
};

export default SectionTitle;
