"use client";

import Icon from "@/src/components/common/icon/icon";
import InquiryModal from "@/src/components/inquiry-modal";
import { useState } from "react";

export default function InquiryButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed left-1/2 bottom-10.75 z-50 w-full max-w-97.5 -translate-x-1/2">
        <div className="relative w-full">
          <button
            className="absolute right-5.5 bottom-0 h-12 w-12 rounded-full bg-[#EA706C] flex items-center justify-center cursor-pointer"
            aria-label="문의하기"
            onClick={() => setIsModalOpen(true)}
          >
            <Icon name="inquiry" width={16} height={16} />
          </button>
        </div>
      </div>
      <InquiryModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
