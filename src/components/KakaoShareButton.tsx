"use client";

import Image from "next/image";

import linkImg from "../assets/icons/link.png";

interface LuckyResult {
  title: string;
  message: string;
}

export default function KakaoShareButton({ title, message }: LuckyResult) {
  const handleClickShare = () => {
    if (!window.Kakao) return;

    if (!window.Kakao.isInitialized()) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `iBe - 행운 뽑기 | 오늘의 운세: ${title}`,
        description: message,
        imageUrl: "https://ibe-lucky.vercel.app/og-card.png",
        imageWidth: 375,
        imageHeight: 215,
        link: {
          mobileWebUrl: "https://ibe-lucky.vercel.app",
          webUrl: "https://ibe-lucky.vercel.app",
        },
      },
      buttons: [
        {
          title: "나도 뽑으러 가기",
          link: {
            mobileWebUrl: "https://ibe-lucky.vercel.app",
            webUrl: "https://ibe-lucky.vercel.app",
          },
        },
      ],
    });
  };

  return (
    <button
      className="h-14 w-full rounded-[365px] bg-[#F0ABA9] text-[16px] text-white font-bold transition active:scale-[0.99]"
      onClick={handleClickShare}
    >
      <span className="inline-flex items-center justify-center gap-2">
        <span>카카오톡 공유하기</span>
        <Image src={linkImg} alt="" width={16} height={16} />
      </span>
    </button>
  );
}
