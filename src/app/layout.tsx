import type { Metadata } from "next";
import { pretendard } from "@/src/app/fonts";
import "./globals.css";
import KakaoScript from "@/src/components/common/kakao-script/kakao-script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { ToastProvider } from "@/src/components/common/toast/toast";
import getThemeMetadata from "@/src/utils/get-theme-metadata";

export const metadata: Metadata = {
  ...getThemeMetadata({
    theme: "default",
  }),
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
        <ToastProvider>{children}</ToastProvider>
        <KakaoScript />
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
        {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      </body>
    </html>
  );
}
