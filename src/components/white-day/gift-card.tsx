import Image from "next/image";

import { WHITE_DAY_RESULT_BY_MBTI } from "@/src/components/white-day/data/desserts";
import { Gift } from "@/src/components/white-day/step-5";

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  const giftResult = WHITE_DAY_RESULT_BY_MBTI[gift.mbti];

  return (
    <div className="flex flex-col gap-5 rounded-lg py-6 px-5 bg-[#FFFFFF] text-[#B5644E] w-full items-center shadow-[0px_0px_12px_0px_#0000001A]">
      {/** 편지 받는 사람 */}
      <span className="leading-[160%] font-black">{`To. ${gift.receiver}`}</span>

      {/** 디저트 타입 */}
      <div className="flex flex-col gap-3 items-center rounded-lg p-4 bg-[#FFFCF3] w-full">
        <Image
          src={giftResult.image.src}
          alt="디저트 이미지"
          width={100}
          height={100}
          className="w-25 h-25 object-contain"
          priority
        />
        <div className="flex flex-col gap-0.5 leading-[160%] text-center text-[#B5644E]">
          <span className="font-extrabold text-sm">
            당신은 {giftResult.title}
          </span>
          <span className="font-medium text-sm">{giftResult.desc}</span>
        </div>
      </div>

      {/** 편지 내용 */}
      <div
        className="w-full whitespace-pre-wrap text-sm font-medium text-[#B5644E] text-center"
        style={{
          lineHeight: "32px",
          backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 31px,
        #FFE1BE 31px,
        #FFE1BE 32px
      )
    `,
        }}
      >
        {gift.letter}
      </div>

      {/** 편지 보내는 사람 */}
      <span className="leading-[160%] font-black">{`From. ${gift.sender}`}</span>
    </div>
  );
}
