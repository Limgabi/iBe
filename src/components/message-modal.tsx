"use client";

import KakaoShareButton from "@/src/components/kakao-share-button";
import { Ornament } from "@/src/data/ornaments";

import ImageDownloadButton from "@/src/components/image-download-button";
import { meongiB } from "@/src/app/fonts";
import Icon from "@/src/components/common/icon/icon";
import Image from "next/image";
import { useState } from "react";

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
    <div className="fixed inset-0 z-100" aria-modal="true" role="dialog">
      <div className="absolute inset-0 modal-backdrop" onClick={onClose} />

      <div className="relative mx-auto flex min-h-screen w-full max-w-97.5 items-center justify-center px-6">
        <div
          className="w-full max-w-97.5 rounded-[20px] bg-[#FFFFFF] py-8 px-5 modal-card flex flex-col gap-3 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex w-full items-center">
            <span
              className={`${meongiB.className} absolute left-1/2 -translate-x-1/2 text-[14px] leading-[180%] tracking-[-0.03em] text-[#EA706C]`}
            >
              LUCKY DRAW
            </span>

            <button type="button" className="ml-auto" onClick={onClose}>
              <Icon name="x" width={24} height={24} />
            </button>
          </div>

          <div className="pt-3 pb-6 flex justify-center">
            {!loaded && (
              <div className="inset-0 rounded-xl bg-gray-100 animate-pulse min-w-73.75 w-73.75 max-w-73.75 h-96.5" />
            )}

            <Image
              src={ornament.resultSrc}
              width={295}
              height={386}
              sizes="295px"
              alt={ornament.title}
              onLoadingComplete={() => setLoaded(true)}
              priority
            />
          </div>

          <div className="flex gap-7 items-center justify-center">
            <KakaoShareButton
              title={ornament.title}
              message={ornament.message}
            />
            <ImageDownloadButton
              resultSrc={ornament.resultSrc}
              fileName={`iBe_${ornament.title}.png`}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .modal-backdrop {
          background: #0000004d;
          animation: modalFadeIn 160ms ease-out both;
        }
        .modal-card {
          transform-origin: 50% 70%;
          animation: modalCardIn 220ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }
        .modal-message {
          animation: modalRise 260ms ease-out 60ms both;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalCardIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes modalRise {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
