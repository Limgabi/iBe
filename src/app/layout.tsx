import type { Metadata } from "next";
import { pretendard } from "@/src/app/fonts";
import "./globals.css";
import KakaoScript from "@/src/components/KakaoScript";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "iBe",
  description: "아이비의 행운 뽑기",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "iBe",
    description: "아이비의 행운 뽑기",
    images: [
      {
        url: "/og-card.png",
      },
    ],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>
        {children}
        <KakaoScript />
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
        {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      </body>
    </html>
  );
}
