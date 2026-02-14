'use client';

import Icon from '@/src/components/common/icon/icon';

interface LuckyResult {
  id: string;
  title: string;
  message: string;
}

export default function KakaoShareButton({ id, title, message }: LuckyResult) {
  const handleClickShare = () => {
    if (!window.Kakao) return;

    if (!window.Kakao.isInitialized()) return;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `iBe - 행운 뽑기 | 오늘의 운세: ${title}`,
        description: message,
        imageUrl: `https://ibe-lucky.vercel.app/cards/${id}.png`,
        imageWidth: 295,
        imageHeight: 386,
        link: {
          mobileWebUrl: 'https://ibe-lucky.vercel.app',
          webUrl: 'https://ibe-lucky.vercel.app',
        },
      },
      buttons: [
        {
          title: '나도 뽑으러 가기',
          link: {
            mobileWebUrl: 'https://ibe-lucky.vercel.app',
            webUrl: 'https://ibe-lucky.vercel.app',
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
      <Icon name="kakao" width={295} height={48} />
    </button>
  );
}
