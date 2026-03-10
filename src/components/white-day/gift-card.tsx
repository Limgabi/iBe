import { Gift } from "@/src/components/white-day/step-5";

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  return (
    <div className="flex flex-col gap-5 rounded-lg py-6 px-5 bg-[#FFFFFF] text-[#B5644E] w-full items-center shadow-[0px_0px_12px_0px_#0000001A]">
      <span className="text-sm leading-[160%] font-black">{`To. ${gift.receiver}`}</span>

      <div className="flex flex-col gap-3">
        <span className="inline-flex h-30 items-center text-[120px] leading-none">
          {gift.emoji}
        </span>
        <span className="font-extrabold text-sm leading-[160%] text-center">
          {gift.title}
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
