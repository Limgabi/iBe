"use client";

import KakaoShareButton from "@/src/components/KakaoShareButton";
import { Ornament } from "@/src/data/ornaments";

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
  if (!open || !ornament) return null;

  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <div className="absolute inset-0 modal-backdrop" onClick={onClose} />

      <div className="relative mx-auto flex min-h-screen w-full max-w-97.5 items-center justify-center px-6">
        <div
          className="w-full max-w-97.5 rounded-[20px] bg-[#FFF6F2] pt-10 px-5 pb-8 modal-card flex flex-col gap-7 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-5 text-[#D87875]">
            <h2 className="text-2xl font-extrabold leading-normal tracking-tight">
              {ornament.title}
            </h2>

            <div className="whitespace-pre-line break-normal text-center text-[14px] tracking-[-0.03em] leading-[1.8] modal-message">
              {ornament.message}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <KakaoShareButton
              title={ornament.title}
              message={ornament.message}
            />
            <button
              className="h-14 w-full rounded-[365px] bg-[#D87875] text-[16px] text-white font-bold transition active:scale-[0.99]"
              onClick={onClose}
            >
              닫기
            </button>
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
