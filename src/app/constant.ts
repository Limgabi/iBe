type ThemeService = {
  link?: string;
  title?: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
};

export const THEME_SERVICES: ThemeService[] = [
  {},
  {
    link: "/new-year",
    title: "LUCKY DRAW",
    description: "설날 맞이 행운 뽑기",
    bgColor: "#FFF2EC",
    textColor: "#EA706C",
  },
  {
    link: "/white-day",
    title: "Sweet Letter",
    description: "화이트데이 사탕 & 편지",
    bgColor: "#FFFBE8",
    textColor: "#B5644E",
  },
  {
    link: "/hello-pet",
    title: "Hello Pet!",
    description: "닮은 동물 찾기",
    bgColor: "#D8EEFF",
    textColor: "#4073F0",
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
