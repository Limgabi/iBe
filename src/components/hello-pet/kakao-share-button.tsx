"use client";

import Icon from "@/src/components/common/icon/icon";
import { useHelloPetContext } from "@/src/contexts/hello-pet";

export default function KakaoShareButton() {
  const { result } = useHelloPetContext();

  const handleClickShare = () => {
    if (!window.Kakao) return;

    if (!window.Kakao.isInitialized()) return;

    const targetUrl = "https://ibe-lucky.vercel.app/hello-pet";

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `iBe - ${result?.title}`,
        description: result?.desc,
        imageUrl: `https://ibe-lucky.vercel.app/${result?.image}`,
        imageWidth: 375,
        imageHeight: 463,
        link: {
          mobileWebUrl: targetUrl,
          webUrl: targetUrl,
        },
      },
      buttons: [
        {
          title: "닮은 동물 찾으러 가기",
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
