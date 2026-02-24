"use client";

import { meongiB } from "@/src/app/fonts";
import Modal from "@/src/components/common/modal/modal";
import { useToast } from "@/src/components/common/toast/toast";
import EggCrackContent from "@/src/components/egg-crack-content";
import { useEffect, useRef, useState } from "react";

export default function Logo() {
  const { showToast } = useToast();

  const tapModeTimerRef = useRef<number | null>(null);
  const tapModeRef = useRef(false);
  const tapCountRef = useRef(0);

  const [open, setOpen] = useState(false);

  const TAP_WINDOW_MS = 5000;
  const TAP_TARGET = 3;

  const endTapMode = () => {
    tapModeRef.current = false;
    tapCountRef.current = 0;
    if (tapModeTimerRef.current) window.clearTimeout(tapModeTimerRef.current);
    tapModeTimerRef.current = null;
  };

  const startTapMode = () => {
    tapModeRef.current = true;
    tapCountRef.current = 0;

    if (tapModeTimerRef.current) window.clearTimeout(tapModeTimerRef.current);
    tapModeTimerRef.current = window.setTimeout(() => {
      endTapMode();
    }, TAP_WINDOW_MS);
  };

  const onClick = () => {
    if (open) return;

    // 첫 클릭 시 힌트 토스트 + 탭 모드 시작
    if (!tapModeRef.current) {
      showToast("…🥚", 1200);
      startTapMode();
      return;
    }

    // 탭 모드 중이면 3탭 카운트
    tapCountRef.current += 1;

    if (tapCountRef.current >= TAP_TARGET) {
      showToast("계란 발견!", 800);
      setOpen(true);
      endTapMode();
    }
  };

  useEffect(() => {
    return () => endTapMode();
  }, []);

  return (
    <>
      <button
        type="button"
        className="touch-manipulation select-none"
        aria-label="iBe logo easter egg"
        onClick={onClick}
        onDragStart={(e) => e.preventDefault()}
      >
        <h1 className={`${meongiB.className} text-main-title select-none`}>
          LUCKY
          <br />
          DRAW
        </h1>
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <EggCrackContent />
        </Modal>
      )}
    </>
  );
}
