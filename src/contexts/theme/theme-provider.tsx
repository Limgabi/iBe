"use client";

import { ReactNode } from "react";
import { ThemeContext, ThemeType } from "./theme-context";

type ThemeProviderProps = {
  theme: ThemeType;
  children: ReactNode;
};

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return <ThemeContext value={{ theme }}>{children}</ThemeContext>;
}
