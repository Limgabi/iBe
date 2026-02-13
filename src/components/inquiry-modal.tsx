import { meongiB } from "@/src/app/fonts";
import Icon from "@/src/components/common/icon/icon";

interface InquiryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function InquiryModal({ open, onClose }: InquiryModalProps) {
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

              <button type="button" className="ml-auto" onClick={onClose}>
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
                className="border border-[#CBD5E1] rounded-md px-4 py-3 text-[14px] text-[#5F5F5F] leading-[150%] resize-none h-31 placeholder:text-[#A7ABB1]"
                placeholder="의견을 남겨주세요."
              ></textarea>
            </div>
          </div>
          <button className="rounded-[365px] h-12 py-3 w-full bg-[#EA706C] font-bold text-[16px] leading-[150%] text-white">
            의견 보내기
          </button>
        </div>
      </div>
    </div>
  );
}
