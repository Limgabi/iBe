"use client";

import Icon from "@/src/components/common/icon/icon";
import { WHITE_DAY_RESULT_BY_MBTI } from "@/src/components/white-day/data/desserts";
import { Gift } from "@/src/components/white-day/step-5";

interface KakaoShareButtonProps {
  giftId: string;
  gift: Gift;
}

export default function KakaoShareButton({
  giftId,
  gift,
}: KakaoShareButtonProps) {
  const mbtiResultTitle = WHITE_DAY_RESULT_BY_MBTI[gift.mbti].title;

  const handleClickShare = () => {
    if (!window.Kakao) return;

    if (!window.Kakao.isInitialized()) return;

    const targetUrl = `https://ibe-lucky.vercel.app/white-day/gift/${giftId}`;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "iBe - 행운 뽑기 | 선물이 도착했어요!",
        description: `To. ${gift.receiver}\n${mbtiResultTitle} 💌`,
        imageUrl: `https://ibe-lucky.vercel.app/white-day/share-thumbnail.png`,
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
