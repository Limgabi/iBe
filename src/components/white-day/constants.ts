import type { WhiteDaySelections } from "@/src/contexts/white-day";

type OptionItem<T> = { value: T; label: string };
type OptionGroup<T> = { title: string; options: readonly OptionItem<T>[] };

type WhiteDayOptions = {
  [K in keyof WhiteDaySelections]-?: OptionGroup<
    NonNullable<WhiteDaySelections[K]>
  >;
};

export const WHITE_DAY_KEYS = [
  "dessertMode",
  "dessertTaste",
  "dessertComment",
  "giftStyle",
] as const;

export type WhiteDayKey = (typeof WHITE_DAY_KEYS)[number];

export const WHITE_DAY_OPTIONS = {
  dessertMode: {
    title: "디저트 모드",
    options: [
      { value: "share", label: "나눠 먹는 달달러" },
      { value: "solo", label: "혼자 음미 달달러" },
    ],
  },
  dessertTaste: {
    title: "디저트 취향",
    options: [
      { value: "newbie", label: "신상 · 조합 덕후" },
      { value: "classic", label: "클래식 · 검증파" },
    ],
  },
  dessertComment: {
    title: "디저트 감상평",
    options: [
      { value: "neat", label: "깔끔 스윗 멘트" },
      { value: "soft", label: "말랑 스윗 멘트" },
    ],
  },
  giftStyle: {
    title: "선물 스타일",
    options: [
      { value: "planned", label: "계획대로 착착" },
      { value: "vibes", label: "그날 감성 픽" },
    ],
  },
} as const satisfies WhiteDayOptions;

export const DESSERT_ICONS = [
  "🧁",
  "🍰",
  "🍩",
  "🍮",
  "🍭",
  "🍬",
  "🍪",
  "🍯",
  "🍨",
  "🍧",
  "🥞",
  "🥨",
  "🥐",
  "🥯",
  "🧇",
  "🥧",
] as const;
