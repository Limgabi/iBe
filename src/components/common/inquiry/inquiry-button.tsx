'use client';

import Icon from '@/src/components/common/icon/icon';
import InquiryModal from '@/src/components/common/inquiry/inquiry-modal';
import { THEME_UI, ThemeKey } from '@/src/constants/theme';
import { useState } from 'react';

interface InquiryButtonProps {
  theme: ThemeKey;
}

export default function InquiryButton({ theme }: InquiryButtonProps) {
  const ui = THEME_UI[theme].inquiry;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed left-1/2 bottom-10.75 z-50 w-full max-w-97.5 -translate-x-1/2">
        <div className="relative w-full">
          <button
            className="absolute right-5.5 bottom-0 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: ui.iconButton }}
            aria-label="문의하기"
            onClick={() => setIsModalOpen(true)}
          >
            <Icon
              name={theme === 'new-year' ? 'inquiry' : 'inquiryWhiteDay'}
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
      <InquiryModal
        theme={theme}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
