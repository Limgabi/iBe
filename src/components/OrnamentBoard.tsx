"use client";

import MessageModal from "@/src/components/MessageModal";
import { buildBoard, Ornament } from "@/src/data/ornaments";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function OrnamentBoard() {
  const board = useMemo(() => buildBoard(9), []);
  const [selected, setSelected] = useState<Ornament | null>(null);

  return (
    <section className="items-center m-auto">
      <div className="grid grid-cols-3 gap-3 items-center justify-center">
        {board.map((item, i) => {
          return (
            <div
              key={i}
              className="flex text-xs items-start font-medium leading-[150%] text-[#D87875]"
            >
              <span className="align-text-top">{`(${i + 1})`}</span>
              {item ? (
                <Image
                  src={item.iconSrc}
                  width={84}
                  height={84}
                  alt={item.iconId}
                  priority={false}
                  onClick={() => setSelected(item)}
                />
              ) : (
                <div className="h-21 w-21" />
              )}
            </div>
          );
        })}
      </div>

      <MessageModal
        open={!!selected}
        ornament={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
