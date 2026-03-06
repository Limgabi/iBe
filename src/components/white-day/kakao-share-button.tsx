"use client";

import Icon from "@/src/components/common/icon/icon";
import { Gift } from "@/src/components/white-day/step-5";

interface KakaoShareButtonProps {
  giftId: string;
  gift: Gift;
}

export default function KakaoShareButton({
  giftId,
  gift,
}: KakaoShareButtonProps) {
  const handleClickShare = () => {
    if (!window.Kakao) return;

    if (!window.Kakao.isInitialized()) return;

    const targetUrl = `https://ibe-lucky.vercel.app/white-day/gift/${giftId}`;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "iBe - 행운 뽑기 | 선물이 도착했어요!",
        description: `To. ${gift.receiver}\n${gift.title}`,
        imageUrl: `https://ibe-lucky.vercel.app/white-day/og-card.png`,
        imageWidth: 375,
        imageHeight: 242,
        link: {
          mobileWebUrl: targetUrl,
          webUrl: targetUrl,
        },
      },
      buttons: [
        {
          title: "선물 받으러 가기",
          link: {
            mobileWebUrl: targetUrl,
            webUrl: targetUrl,
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={handleClickShare}
      className="border-none outline-none cursor-pointer"
    >
      <Icon name="whiteDayKakao" width={222} height={48} />
    </button>
  );
}
