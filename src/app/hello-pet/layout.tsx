import { ThemeProvider } from "@/src/contexts/theme";
import getThemeMetadata from "@/src/utils/get-theme-metadata";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = getThemeMetadata({
  theme: "hello-pet",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme="hello-pet">
      <div className="flex min-h-screen items-center justify-center bg-[#030303]">
        <main className="relative min-h-screen w-full max-w-97.5 overflow-hidden bg-[#F5FBFF]">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
