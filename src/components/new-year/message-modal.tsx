"use client";

import KakaoShareButton from "@/src/components/new-year/kakao-share-button";
import { Ornament } from "@/src/data/ornaments";

import Image from "next/image";
import { useState } from "react";
import Modal from "../common/modal/modal";

interface MessageModalProps {
  open: boolean;
  ornament: Ornament | null;
  onClose: () => void;
}

export default function MessageModal({
  open,
  ornament,
  onClose,
}: MessageModalProps) {
  const [loaded, setLoaded] = useState(false);

  if (!open || !ornament) return null;

  return (
    <Modal onClose={onClose}>
      <div className="flx flex-col">
        <div className="pt-3 flex justify-center">
          <div className="relative w-73.75 h-96.5">
            <div
              className={[
                "absolute inset-0 rounded-xl bg-gray-100 animate-pulse transition-opacity duration-200",
                loaded ? "opacity-0" : "opacity-100",
              ].join(" ")}
              aria-hidden="true"
            />

            <Image
              src={ornament.resultSrc}
              fill
              sizes="295px"
              alt={ornament.title}
              priority
              className={[
                "object-contain rounded-xl transition-opacity duration-200",
                loaded ? "opacity-100" : "opacity-0",
              ].join(" ")}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
        </div>

        <p className="py-5 font-bold text-[14px] leading-[150%] tracking-[-0.03em] text-[#5F5F5F]">
          이미지를 꾹 눌러 저장해 보세요!
        </p>

        <KakaoShareButton
          id={ornament.messageId}
          title={ornament.title}
          message={ornament.message}
        />
      </div>
    </Modal>
  );
}
