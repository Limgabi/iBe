"use client";

import { createContext } from "react";

export type ThemeType = "new-year" | "white-day";

export type ThemeContextValue = {
  theme: ThemeType;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
