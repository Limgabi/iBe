import { meongiB } from "@/src/app/fonts";
import Icon from "@/src/components/common/icon/icon";
import { useState } from "react";
import LoadingDots from "@/src/components/common/icon/loading/loading-dots";

interface InquiryModalProps {
  open: boolean;
  onClose: () => void;
}

const GAS_WEB_APP_URL = process.env.NEXT_PUBLIC_GAS_WEB_APP_URL;

export default function InquiryModal({ open, onClose }: InquiryModalProps) {
  const [inquiryText, setInquiryText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const isEmpty = !inquiryText.trim();
  const isDisabled = isSending || isEmpty;
  const cursorClass = isSending
    ? "cursor-default"
    : isEmpty
      ? "cursor-not-allowed"
      : "cursor-pointer";

  const handleSendInquiry = async () => {
    const url = GAS_WEB_APP_URL;
    if (!url) {
      console.error(
        "환경변수 NEXT_PUBLIC_GAS_WEB_APP_URL이 설정되어 있지 않습니다.",
      );
      return;
    }

    const message = inquiryText.trim();
    if (!message) return;

    try {
      setIsSending(true);

      const res = await fetch(GAS_WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({ message }).toString(),
      });

      const json = await res.json().catch(() => ({}));
      if (!json.ok)
        throw new Error(
          json.error || "의견 전송에 실패했어요. 잠시 후 다시 시도해주세요.",
        );

      setInquiryText("");
      onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <div className="absolute inset-0 modal-backdrop" onClick={onClose} />

      <div className="relative mx-auto flex min-h-screen w-full max-w-97.5 items-center justify-center px-6">
        <div
          className="w-full max-w-97.5 rounded-[20px] bg-[#FFFFFF] py-8 px-5 modal-card flex flex-col gap-7 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4">
            <div className="relative flex w-full items-center">
              <span
                className={`${meongiB.className} absolute left-1/2 -translate-x-1/2 text-[14px] leading-[180%] tracking-[-0.03em] text-[#EA706C]`}
              >
                LUCKY DRAW
              </span>

              <button className="ml-auto cursor-pointer" onClick={onClose}>
                <Icon name="x" width={24} height={24} />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2 text-start">
                <p className="font-semibold text-xl leading-[130%] text-[#EA706C]">
                  의견을 자유롭게 말해주세요!
                </p>
                <p className="font-medium text-[14px] leading-[150%] text-[#5F5F5F]">
                  서비스에 대한 의견, 제안 등 더 나은 서비스를 위한
                  <br />
                  의견을 남겨주세요.
                </p>
              </div>
              <textarea
                className="border border-[#CBD5E1] rounded-md px-4 py-3 text-[14px] text-[#5F5F5F] leading-[150%] resize-none h-31 outline-[#FBB4B2] placeholder:text-[#A7ABB1]"
                placeholder="의견을 남겨주세요."
                onChange={(e) => setInquiryText(e.target.value)}
                value={inquiryText}
              />
            </div>
          </div>
          <button
            onClick={handleSendInquiry}
            disabled={isDisabled}
            className={[
              "rounded-[365px] h-12 py-3 w-full font-bold text-[16px] leading-[150%] text-white",
              isSending
                ? "bg-[#FE8682]"
                : isEmpty
                  ? "bg-[#BDBDBD]"
                  : "bg-[#EA706C]",
              cursorClass,
            ].join(" ")}
          >
            {isSending ? (
              <div className="flex items-center gap-2 justify-center">
                <span>보내는 중</span>
                <LoadingDots />
              </div>
            ) : (
              "의견 보내기"
            )}
          </button>
        </div>
      </div>
      <style jsx global>{`
        .modal-backdrop {
          background: #0000004d;
          animation: modalFadeIn 160ms ease-out both;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
