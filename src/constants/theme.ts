export const THEMES = {
  NEW_YEAR: "new-year",
  WHITE_DAY: "white-day",
} as const;

export type ThemeKey = (typeof THEMES)[keyof typeof THEMES];

export const THEME_UI = {
  "new-year": {
    inquiry: {
      iconButton: "#EA706C",
      textButton: "#EA706C",
      primary: "#EA706C",
      primarySoft: "#FE8682",
      disabled: "#BDBDBD",
      outline: "#FBB4B2",
      text: "#EA706C",
    },
    steps: {
      active: "#EA706C",
      inactive: "#FE8682",
    },
  },
  "white-day": {
    inquiry: {
      iconButton: "#F8DCC4",
      textButton: "#B5644E",
      primary: "#B5644E",
      primarySoft: "#CF7C66",
      disabled: "#BDBDBD",
      outline: "#EFA895",
      text: "#B5644E",
    },
    steps: {
      active: "#CD8572",
      inactive: "#F0DDBD",
    },
  },
};

export const THEME_META_DATA = {
  "new-year": {
    title: "iBe - 행운 뽑기 | 설날 맞이 행운 뽑기",
    description:
      "2026년을 시작하는 당신을 위해 행운 뽑기가 방금 막 배달되었어요!",
    ogImage: "/new-year/og-card.png",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "설날 맞이 행운 뽑기 OG 이미지",
  },
  "white-day": {
    title: "iBe - 행운 뽑기 | Sweet Letter",
    description:
      "상대방은 어떤 디저트 타입일까?\n성격을 골라 디저트와 편지를 선물해요",
    ogImage: "/white-day/og-card.png",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "Sweet Letter OG 이미지",
  },
};
