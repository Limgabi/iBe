import { WHITE_DAY_RESULT_BY_MBTI } from "@/src/components/white-day/data/desserts";
import { Gift } from "@/src/components/white-day/step-5";
import Image from "next/image";

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  const giftResult = WHITE_DAY_RESULT_BY_MBTI[gift.mbti];

  return (
    <div className="flex flex-col gap-5 rounded-lg py-6 px-5 bg-[#FFFFFF] text-[#B5644E] w-full items-center shadow-[0px_0px_12px_0px_#0000001A]">
      <span className="text-sm leading-[160%] font-black">{`To. ${gift.receiver}`}</span>

      <div className="flex flex-col gap-3">
        <Image
          src={giftResult.image.src}
          alt="디저트 이미지"
          width={100}
          height={100}
          className="w-25 h-25 object-contain"
          priority
        />
        <span className="font-extrabold text-sm leading-[160%] text-center">
          {giftResult.title}
        </span>
      </div>

      <div className="rounded-lg bg-[#FFFBE8] p-4 w-full">
        <div
          className="whitespace-pre-wrap text-sm font-medium text-[#B5644E]"
          style={{
            lineHeight: "25px",
            backgroundImage: `
        repeating-linear-gradient(
          to bottom,
          transparent 0,
          transparent 24px,
          #FFE1BE 24px,
          #FFE1BE 25px
        )
      `,
          }}
        >
          {gift.letter}
        </div>
      </div>
    </div>
  );
}
