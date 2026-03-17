import Button from "@/src/components/common/button/button";
import LoadingDots from "@/src/components/common/loading/loading-dots";
import GiftCard from "@/src/components/white-day/gift-card";
import KakaoShareButton from "@/src/components/white-day/kakao-share-button";
import { MBTI, useWhiteDayContext } from "@/src/contexts/white-day";
import { db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Gift = {
  sender: string;
  receiver: string;
  mbti: MBTI;
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
    router.push("/white-day");
    resetWhiteDay();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 items-center flex-1 h-full min-h-0 justify-center">
        <span className="text-[20px] text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          편지를 만드는 중
        </span>
        <LoadingDots background="#B5644E" />
      </div>
    );
  }

  if (!giftId || !gift) {
    return (
      <div className="flex flex-col gap-5 items-center flex-1 h-full min-h-0 justify-center">
        <span className="text-[20px] text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          편지 정보를 찾을 수 없어요
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15 overflow-y-auto scrollbar-hide">
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          {gift.sender}님의
          <br />
          마음을 담은
          <br />
          편지가 준비되었어요!
        </p>

        <GiftCard gift={gift} />
      </div>

      <div className="flex flex-col gap-2">
        <KakaoShareButton giftId={giftId} gift={gift} />
        <Button
          className="w-full text-center items-center"
          onClick={handleClickCreateNewGift}
        >
          새로운 편지 만들기
        </Button>
      </div>
    </div>
  );
}
