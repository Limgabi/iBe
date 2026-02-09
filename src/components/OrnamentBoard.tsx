import { Ornament, ORNAMENTS } from "@/src/data/ornaments";
import Image from "next/image";
import { useMemo } from "react";

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const buildBoard = (
  ornaments: Ornament[],
  totalSlots = 9,
): (Ornament | null)[] => {
  const picked = shuffle(ornaments).slice(
    0,
    Math.min(ornaments.length, totalSlots),
  );
  const empties = Array.from(
    { length: totalSlots - picked.length },
    () => null,
  );
  return shuffle<Ornament | null>([...picked, ...empties]);
};

export default function OrnamentBoard() {
  const slots = useMemo(() => buildBoard(ORNAMENTS, 9), []);

  return (
    <section className="items-center m-auto">
      <div className="grid grid-cols-3 gap-3 items-center justify-center">
        {slots.map((item, i) => {
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
                  alt={item.id}
                  priority={false}
                />
              ) : (
                <div className="h-21 w-21" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
