export const THEMES = {
  NEW_YEAR: 'new-year',
  WHITE_DAY: 'white-day',
} as const;

export type ThemeKey = (typeof THEMES)[keyof typeof THEMES];

export const THEME_UI = {
  'new-year': {
    inquiry: {
      iconButton: '#EA706C',
      textButton: '#EA706C',
      primary: '#EA706C',
      primarySoft: '#FE8682',
      disabled: '#BDBDBD',
      outline: '#FBB4B2',
    },
    steps: {
      active: '#EA706C',
      inactive: '#FE8682',
    },
  },
  'white-day': {
    inquiry: {
      iconButton: '#F8DCC4',
      textButton: '#B5644E',
      primary: '#B5644E',
      primarySoft: '#CF7C66',
      disabled: '#BDBDBD',
      outline: '#EFA895',
    },
    steps: {
      active: '#CD8572',
      inactive: '#F0DDBD',
    },
  },
};
