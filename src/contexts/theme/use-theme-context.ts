"use client";

import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export function useThemeContext() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error(
      "useThemeContext는 ThemeProvider 내부에서만 사용할 수 있습니다.",
    );
  }

  return ctx;
}
