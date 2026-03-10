import Image from "next/image";
import heartImg from "@/src/assets/images/white-day/heart.png";
import heart2Img from "@/src/assets/images/white-day/heart2.png";
import giftGif from "@/src/assets/images/white-day/gift.gif";
import { Dispatch, SetStateAction } from "react";

interface GiftIntroViewProps {
  receiver: string;
  setIsViewDetail: Dispatch<SetStateAction<boolean>>;
}
export default function GiftIntroView({
  receiver,
  setIsViewDetail,
}: GiftIntroViewProps) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={heart2Img}
          alt="heart2"
          width={118}
          height={118}
          className="absolute rotate-45 opacity-40 -left-7 top-30"
        />
        <Image
          src={heartImg}
          alt="heart"
          width={130}
          height={130}
          className="absolute -rotate-20 opacity-10 -right-10 top-40"
        />
        <Image
          src={heart2Img}
          alt="heart2"
          width={102}
          height={102}
          className="absolute rotate-25 opacity-20 right-3 bottom-5"
        />
        <Image
          src={heartImg}
          alt="heart"
          width={200}
          height={200}
          className="absolute rotate-25 opacity-10 -left-10 -bottom-25"
        />
      </div>

      <div className="relative z-10 flex h-full flex-col gap-20 items-center justify-center text-[#B5644E]">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] pt-10">
          {receiver}님에게
          <br />
          선물이
          <br />
          도착했어요!
        </p>

        <div className="flex flex-col gap-10 font-semibold leading-[160%] items-center text-center">
          <p>
            아래 선물 상자를 클릭해
            <br />
            선물을 받아보세요!
          </p>
          <Image
            src={giftGif}
            alt="giftBox"
            width={280}
            height={280}
            className="cursor-pointer rounded-[365px]"
            onClick={() => setIsViewDetail(true)}
          />
        </div>
      </div>
    </>
  );
}
