import { createContext } from "react";

/** 디저트 모드 */
export type DessertMode = "share" | "solo";
/** 디저트 취향 */
export type DessertTaste = "newbie" | "classic";
/** 디저트 감상평 */
export type DessertComment = "neat" | "soft";
/** 선물 스타일 */
export type GiftStyle = "planned" | "vibes";

export type WhiteDaySelections = {
  dessertMode: DessertMode | null;
  dessertTaste: DessertTaste | null;
  dessertComment: DessertComment | null;
  giftStyle: GiftStyle | null;
};

export type WhiteDayState = {
  sender: string;
  receiver: string;
  selections: WhiteDaySelections;
};

export type WhiteDayActions = {
  setSender: (v: string) => void;
  setReceiver: (v: string) => void;

  setSelection: <K extends keyof WhiteDaySelections>(
    key: K,
    value: WhiteDaySelections[K],
  ) => void;

  resetSelections: () => void;
};

export type WhiteDayContextValue = WhiteDayState & WhiteDayActions;

export const WhiteDayContext = createContext<WhiteDayContextValue | null>(null);
