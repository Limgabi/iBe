import { ThemeProvider } from "@/src/contexts/theme";
import getThemeMetadata from "@/src/utils/get-theme-metadata";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = getThemeMetadata({
  theme: "white-day",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme="white-day">
      <div className="flex min-h-screen items-center justify-center bg-[#030303]">
        <main className="relative min-h-screen w-full max-w-97.5 overflow-hidden bg-[#FFFBE8]">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
