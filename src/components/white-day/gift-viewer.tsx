"use client";

import { Gift } from "@/src/components/white-day/step-5";
import { db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import GiftIntroView from "@/src/components/white-day/gift-intro-view";
import GiftDetailView from "@/src/components/white-day/gift-detail-view";

export default function GiftViewer() {
  const { id: giftId } = useParams();

  const [gift, setGift] = useState<Gift | null>(null);
  const [isViewDetail, setIsViewDetail] = useState(false);

  useEffect(() => {
    const fetchGift = async () => {
      if (!giftId) {
        return;
      }

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
      }
    };

    void fetchGift();
  }, [giftId]);

  return (
    <div className="relative flex-1 overflow-hidden">
      {!isViewDetail && (
        <GiftIntroView
          receiver={gift?.receiver ?? ""}
          setIsViewDetail={setIsViewDetail}
        />
      )}

      {isViewDetail && <GiftDetailView gift={gift} />}
    </div>
  );
}
