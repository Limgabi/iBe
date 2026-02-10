import { ORNAMENT_ICONS } from "@/src/data/ornamentIcons";
import { ORNAMENT_MESSAGES } from "@/src/data/ornamentMessage";
import { StaticImageData } from "next/image";

export interface Ornament {
  iconId: string;
  iconSrc: StaticImageData;
  messageId: string;
  title: string;
  message: string;
}

const shuffle = <T>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/**
 * 아이콘/문구 중복 없이 랜덤 섞기
 */
export const buildBoard = (totalSlots = 9): Ornament[] => {
  const icons = shuffle(ORNAMENT_ICONS).slice(0, totalSlots);
  const msgs = shuffle(ORNAMENT_MESSAGES).slice(0, totalSlots);

  return icons.map((icon, idx) => {
    const msg = msgs[idx];
    return {
      iconId: icon.id,
      iconSrc: icon.iconSrc,
      messageId: msg.id,
      title: msg.title,
      message: msg.message,
    };
  });
};
