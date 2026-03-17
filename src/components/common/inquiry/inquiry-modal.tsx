import { useState } from "react";
import LoadingDots from "@/src/components/common/loading/loading-dots";
import Modal from "../modal/modal";
import { THEME_UI } from "@/src/constants/theme";
import Textarea from "@/src/components/common/textarea/textarea";
import { useThemeContext } from "@/src/contexts/theme";

interface InquiryModalProps {
  open: boolean;
  onClose: () => void;
}

const GAS_WEB_APP_URL = process.env.NEXT_PUBLIC_GAS_WEB_APP_URL;

export default function InquiryModal({ open, onClose }: InquiryModalProps) {
  const { theme } = useThemeContext();

  const ui = THEME_UI[theme].inquiry;

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
    <Modal onClose={onClose} gapClassName="gap-4" zClassName="z-50">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 text-start">
            <p className="text-modal-title" style={{ color: ui.primary }}>
              의견을 자유롭게 말해주세요!
            </p>
            <p className="text-modal-body text-[#5F5F5F]">
              서비스에 대한 의견, 제안 등 더 나은 서비스를 위한
              <br />
              의견을 남겨주세요.
            </p>
          </div>
          <Textarea
            value={inquiryText}
            onChange={setInquiryText}
            placeholder="의견을 남겨주세요."
            className="h-31"
          />
        </div>
        <button
          onClick={handleSendInquiry}
          disabled={isDisabled}
          className={[
            "rounded-[365px] h-12 py-3 w-full text-button text-white",
            cursorClass,
          ].join(" ")}
          style={{
            backgroundColor: isSending
              ? ui.primarySoft
              : isEmpty
                ? ui.disabled
                : ui.textButton,
          }}
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
    </Modal>
  );
}
