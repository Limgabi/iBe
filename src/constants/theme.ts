export const THEMES = {
  NEW_YEAR: "new-year",
  WHITE_DAY: "white-day",
} as const;

export type ThemeKey = (typeof THEMES)[keyof typeof THEMES];

export const THEME_UI = {
  "new-year": {
    inquiry: {
      primary: "#EA706C",
      primarySoft: "#FE8682",
      disabled: "#BDBDBD",
      outline: "#FBB4B2",
    },
    steps: {
      active: "#EA706C",
      inactive: "#FE8682",
    },
  },
  "white-day": {
    inquiry: {
      primary: "#F8DCC4",
      primarySoft: "#6ED3C4",
      disabled: "#BDBDBD",
      outline: "#F8DCC4",
    },
    steps: {
      active: "#CD8572",
      inactive: "#F0DDBD",
    },
  },
};
