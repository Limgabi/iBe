"use client";

import Script from "next/script";

export default function KakaoScript() {
  const onLoad = () => {
    const key = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    if (!key) return;

    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(key);
    }
  };

  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      async
      onLoad={onLoad}
    />
  );
}
