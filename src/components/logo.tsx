"use client";

import { meongiB } from "@/src/app/fonts";
import { useToast } from "@/src/components/common/toast/toast";
import { useEffect, useRef, useState } from "react";

export default function Logo() {
  const { showToast } = useToast();

  const longPressTimerRef = useRef<number | null>(null);
  const tapModeTimerRef = useRef<number | null>(null);

  const tapModeRef = useRef(false);
  const tapCountRef = useRef(0);

  const [open, setOpen] = useState(false);

  const LONGPRESS_MS = 700;
  const TAP_WINDOW_MS = 5000;
  const TAP_TARGET = 3;

  const clearTimers = () => {
    if (longPressTimerRef.current)
      window.clearTimeout(longPressTimerRef.current);
    if (tapModeTimerRef.current) window.clearTimeout(tapModeTimerRef.current);
    longPressTimerRef.current = null;
    tapModeTimerRef.current = null;
  };

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

  const onPointerDown = () => {
    if (open) return;

    // 롱프레스 타이머 시작
    longPressTimerRef.current = window.setTimeout(() => {
      showToast("…🥚", 1200);
      startTapMode();
    }, LONGPRESS_MS);
  };

  const onPointerUp = () => {
    if (longPressTimerRef.current)
      window.clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = null;
  };

  const onClick = () => {
    if (!tapModeRef.current || open) return;

    tapCountRef.current += 1;

    if (tapCountRef.current >= TAP_TARGET) {
      showToast("계란 발견!", 3000);
      setOpen(true);
      endTapMode();
    }
  };

  useEffect(() => {
    return () => {
      clearTimers();
      endTapMode();
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
        className="touch-manipulation"
        aria-label="iBe logo easter egg"
        onClick={onClick}
      >
        <h1 className={`${meongiB.className} text-main-title`}>
          LUCKY
          <br />
          DRAW
        </h1>
      </button>
    </>
  );
}
