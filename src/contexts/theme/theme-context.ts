"use client";

import { createContext } from "react";

export type ThemeType = "default" | "new-year" | "white-day" | "hello-pet";

export type ThemeContextValue = {
  theme: ThemeType;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "default",
});
