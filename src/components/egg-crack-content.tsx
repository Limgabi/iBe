"use client";

import { useMemo, useRef, useState } from "react";

export default function EggCrackContent() {
  const [tap, setTap] = useState(0); // 0~3
  const [phase, setPhase] = useState<
    "idle" | "cracking" | "hatched" | "reward"
  >("idle");

  const rewardTimerRef = useRef<number | null>(null);

  const showEgg = phase === "idle" || phase === "cracking";
  const showChick = phase === "hatched";
  const showClover = phase === "reward";

  const title = useMemo(() => {
    if (showClover) return "행운 획득! ✨";
    if (showChick) return "부화 성공! 🐣";
    return "계란을 깨보세요 🥚";
  }, [showChick, showClover]);

  const desc = useMemo(() => {
    if (showClover) return "오늘 좋은 일이 생길 거예요";
    if (showChick) return "끈기 있는 당신… 병아리가 행운을 두고 갔어요";
    if (tap === 0) return "계란을 3번 톡톡 해보세요";
    return `${tap}/3`;
  }, [showChick, showClover, tap]);

  const handleTap = () => {
    if (phase !== "idle") return;

    setTap((prev) => {
      const next = Math.min(prev + 1, 3);

      if (next >= 3) {
        setPhase("cracking");

        window.setTimeout(() => {
          setPhase("hatched");

          rewardTimerRef.current = window.setTimeout(() => {
            setPhase("reward");
          }, 1400);
        }, 700);

        return 3;
      }

      return next;
    });
  };

  const eggFace = useMemo(() => (showEgg ? "🥚" : ""), [showEgg]);

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-sm text-black/70 text-center">{desc}</div>

      <div className="relative mt-2 h-35 w-full max-w-[320px] overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03]">
        {/* 지지직 레이어 */}
        {phase === "cracking" && (
          <>
            <div
              className="absolute inset-0 z-10 egg-static"
              aria-hidden="true"
            />
            <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2 text-[22px] egg-zap">
              ⚡️⚡️
            </div>
          </>
        )}

        {/* 계란(탭 영역) */}
        <button
          type="button"
          onClick={handleTap}
          className="absolute left-1/2 top-10 -translate-x-1/2 z-30 select-none"
          aria-label="tap egg"
        >
          <div
            className={[
              "text-[56px] leading-none",
              phase === "cracking" ? "egg-shake" : "",
            ].join(" ")}
          >
            {eggFace}
          </div>

          {/* 금 간 느낌 */}
          {tap === 1 && phase === "idle" && (
            <div className="absolute left-1/2 top-0 -translate-x-1/2 text-[14px] text-black/40">
              ╱╲
            </div>
          )}
          {tap === 2 && phase === "idle" && (
            <div className="absolute left-1/2 top-0 -translate-x-1/2 text-[14px] text-black/45">
              ╱╲╱╲
            </div>
          )}
        </button>

        {/* 병아리 총총총 */}
        {showChick && (
          <div className="absolute bottom-6 -left-10 z-40 chick-walk text-[40px] leading-none">
            🐣
          </div>
        )}

        {showClover && (
          <div className="absolute left-1/2 bottom-4 -translate-x-1 z-50">
            <div className="clover-pop text-[44px] leading-none">🍀</div>
          </div>
        )}

        <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-black/10" />
      </div>

      <style jsx>{`
        .egg-shake {
          animation: shake 0.12s infinite;
        }
        @keyframes shake {
          0% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(-1px) rotate(-2deg);
          }
          50% {
            transform: translateX(1px) rotate(2deg);
          }
          75% {
            transform: translateX(-1px) rotate(-1deg);
          }
          100% {
            transform: translateX(0) rotate(0deg);
          }
        }

        .egg-static {
          background-image: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.05) 1px,
            rgba(255, 255, 255, 0) 1px,
            rgba(255, 255, 255, 0) 3px
          );
          opacity: 0.5;
          animation: flicker 0.08s infinite;
        }
        @keyframes flicker {
          0% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.55;
          }
          100% {
            opacity: 0.35;
          }
        }

        .egg-zap {
          animation: zap 0.25s infinite;
        }
        @keyframes zap {
          0% {
            transform: translateX(-50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-50%) scale(1.08);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.85;
          }
        }

        .chick-walk {
          animation:
            walk 1.4s linear forwards,
            bounce 0.25s infinite;
        }
        @keyframes walk {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(420px);
          }
        }
        @keyframes bounce {
          0% {
            margin-bottom: 0;
          }
          50% {
            margin-bottom: 2px;
          }
          100% {
            margin-bottom: 0;
          }
        }

        .clover-pop {
          animation: pop 0.35s ease-out forwards;
        }
        @keyframes pop {
          from {
            transform: translate(-50%, 6px) scale(0.92);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0px) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
