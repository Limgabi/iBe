"use client";

import MessageModal from "@/src/components/new-year/message-modal";
import SparkleBurst from "@/src/components/new-year/sparkle-burst";
import { buildBoard, Ornament } from "@/src/data/ornaments";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

export default function OrnamentBoard() {
  const board = useMemo(() => buildBoard(9), []);
  const [selected, setSelected] = useState<Ornament | null>(null);

  const [drawingIndex, setDrawingIndex] = useState<number | null>(null);
  const [burstSeed, setBurstSeed] = useState(0);
  const drawingTimer = useRef<number | null>(null);

  const isDrawing = drawingIndex !== null;

  const preloadOptimized = (src: string, width = 640, quality = 75) => {
    const url = `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
    const img = new window.Image();
    img.decoding = "async";
    img.loading = "eager";
    img.src = url;
  };

  const onPick = (item: Ornament, index: number) => {
    if (isDrawing) return;

    preloadOptimized(item.resultSrc, 640, 75);

    setDrawingIndex(index);
    setBurstSeed((s) => s + 1);

    // eslint-disable-next-line react-hooks/purity
    const wait = 420 + Math.floor(Math.random() * 200);

    if (drawingTimer.current) window.clearTimeout(drawingTimer.current);
    drawingTimer.current = window.setTimeout(() => {
      setSelected(item);
      setDrawingIndex(null);
    }, wait);
  };

  return (
    <section className="items-center m-auto">
      <div className="grid grid-cols-3 gap-x-4 gap-y-7 items-center justify-center">
        {board.map((item, i) => {
          const isActive = i === drawingIndex;
          const isDisabled = !item || isDrawing;
          const cursorClass = !item
            ? "cursor-not-allowed"
            : isDrawing
              ? "cursor-default"
              : "cursor-pointer";

          return (
            <button
              key={i}
              className={[
                "flex items-start text-ornament-number text-[#EA706C] transition will-change-transform select-none",
                cursorClass,
                !isDisabled ? "hover:scale-[1.02] active:scale-[0.98]" : "",
                isActive ? "ornament-pop" : "",
                isDrawing && !isActive ? "opacity-60" : "",
              ].join(" ")}
              disabled={isDisabled}
              onClick={() => item && onPick(item, i)}
            >
              <span className="align-text-top">{`(${i + 1})`}</span>
              {item ? (
                <>
                  <Image
                    src={item.iconSrc}
                    width={84}
                    height={84}
                    alt={item.iconId}
                    priority={false}
                  />
                  {isActive ? <SparkleBurst seed={burstSeed} /> : null}
                </>
              ) : (
                <div className="h-21 w-21" />
              )}
            </button>
          );
        })}
      </div>

      <MessageModal
        open={!!selected}
        ornament={selected}
        onClose={() => setSelected(null)}
      />

      <style jsx global>{`
        .ornament-pop {
          animation: ornamentPop 520ms cubic-bezier(0.2, 0.9, 0.2, 1);
        }
        @keyframes ornamentPop {
          0% {
            transform: scale(1);
          }
          35% {
            transform: scale(0.92) rotate(-2deg);
          }
          70% {
            transform: scale(1.08) rotate(2deg);
          }
          100% {
            transform: scale(1);
          }
        }

        .sparkle {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.95);
          transform: translate(-50%, -50%) scale(0.2);
          opacity: 0;
          animation: sparkleBurst 520ms ease-out forwards;
          filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.25));
        }
        @keyframes sparkleBurst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
          }
          12% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty)))
              scale(1);
          }
        }
      `}</style>
    </section>
  );
}
