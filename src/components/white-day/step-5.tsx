import Button from "@/src/components/common/button/button";
import LoadingDots from "@/src/components/common/loading/loading-dots";
import KakaoShareButton from "@/src/components/white-day/kakao-share-button";
import { useWhiteDayContext } from "@/src/contexts/white-day";
import { db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Gift = {
  sender: string;
  receiver: string;
  emoji: string;
  title: string;
  letter: string;
};

export default function Step5() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const giftId = searchParams.get("giftId");

  const { resetWhiteDay } = useWhiteDayContext();

  const [gift, setGift] = useState<Gift | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGift = async () => {
      if (!giftId) {
        setIsLoading(false);
        return;
      }

      try {
        const giftRef = doc(db, "gifts", giftId);
        const giftSnap = await getDoc(giftRef);

        if (giftSnap.exists()) {
          setGift(giftSnap.data() as Gift);
        } else {
          setGift(null);
        }
      } catch (error) {
        console.error("Failed to fetch gift:", error);
        setGift(null);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchGift();
  }, [giftId]);

  const handleClickCreateNewGift = () => {
    router.push("/white-day/gift/new?step=1");
    resetWhiteDay();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 items-center flex-1 h-full min-h-0 justify-center">
        <span className="text-[20px] text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          선물 만드는 중
        </span>
        <LoadingDots background="#B5644E" />
      </div>
    );
  }

  if (!giftId || !gift) {
    return (
      <div className="flex flex-col gap-5 items-center flex-1 h-full min-h-0 justify-center">
        <span className="text-[20px] text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          선물 정보를 찾을 수 없어요
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15 overflow-y-auto">
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          [{gift.sender}]님의
          <br />
          마음을 담은
          <br />
          선물이 준비되었어요!
        </p>

        <div className="flex flex-col gap-5 rounded-lg py-6 px-5 border border-[#F8DCC4] bg-[#FFFFFF] text-[#B5644E] w-full items-center">
          <span className="text-sm leading-[160%] font-black">{`To. ${gift.receiver}`}</span>

          <div className="flex flex-col gap-3">
            <span className="inline-flex h-30 items-center text-[120px] leading-none">
              {gift.emoji}
            </span>
            <span className="font-extrabold text-sm leading-[160%]">
              {gift.title}
            </span>
          </div>

          <div className="rounded-lg bg-[#FFFBE8] p-4">
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
      </div>

      <div className="flex flex-col gap-2">
        <KakaoShareButton giftId={giftId} gift={gift} />
        <Button
          theme="white-day"
          text="새로운 선물 만들기"
          className="w-full text-center items-center"
          onClick={handleClickCreateNewGift}
        />
      </div>
    </div>
  );
}
