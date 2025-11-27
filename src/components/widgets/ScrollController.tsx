import Image from "next/image";

interface Props {
  type: "prev" | "next";
  onClick: () => void;
}

const ScrollController = ({ type, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-[54px] h-[54px] rounded-full bg-white drop-shadow-[0px_6px_24px_rgba(0,0,0,0.2)] absolute top-[40%] ${
        type === "prev" ? "left-[-35px]" : "right-[-35px]"
      } z-50 flex items-center justify-center`}>
      {type === "prev" ? (
        <Image
          src="/asset/icon_arrow_left.svg"
          alt="previous"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src="/asset/icon_arrow_right.svg"
          alt="next"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default ScrollController;
