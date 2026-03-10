"use client";

import { Gift } from "@/src/components/white-day/step-5";
import { db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import GiftIntroView from "@/src/components/white-day/gift-intro-view";
import GiftDetailView from "@/src/components/white-day/gift-detail-view";
import LoadingDots from "@/src/components/common/loading/loading-dots";
import GiftOpeningView from "@/src/components/white-day/gift-opening-view";

type ViewPhase = "intro" | "opening" | "detail";

export default function GiftViewer() {
  const { id: giftId } = useParams();

  const [gift, setGift] = useState<Gift | null>(null);
  const [viewPhase, setViewPhase] = useState<ViewPhase>("intro");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGift = async () => {
      if (!giftId) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const giftRef = doc(db, "gifts", giftId as string);
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

  const handleOpenGift = () => {
    setViewPhase("opening");

    window.setTimeout(() => {
      setViewPhase("detail");
    }, 1600);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 items-center flex-1 h-full min-h-0 justify-center">
        <span className="text-[20px] text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          선물 가져오는 중
        </span>
        <LoadingDots background="#B5644E" />
      </div>
    );
  }

  if (!gift) {
    return (
      <div className="flex flex-col gap-5 items-center flex-1 h-full min-h-0 justify-center">
        <span className="text-[20px] text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          선물 정보를 찾을 수 없어요
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex-1 overflow-hidden">
      {viewPhase === "intro" && (
        <GiftIntroView receiver={gift.receiver} onOpenGift={handleOpenGift} />
      )}

      {viewPhase === "opening" && <GiftOpeningView />}

      {viewPhase === "detail" && <GiftDetailView gift={gift} />}
    </div>
  );
}
