import type { Metadata } from "next";
import { pretendard } from "@/src/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "iBe",
  description: "아이비의 행운 뽑기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  );
}
