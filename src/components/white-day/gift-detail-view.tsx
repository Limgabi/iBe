import Button from '@/src/components/common/button/button';
import GiftCard from '@/src/components/white-day/gift-card';
import { Gift } from '@/src/components/white-day/step-5';
import { useRouter } from 'next/navigation';

interface GiftDetailViewProps {
  gift: Gift | null;
}

export default function GiftDetailView({ gift }: GiftDetailViewProps) {
  const router = useRouter();

  const handleClickCreateNewGift = () => {
    router.push('/white-day');
  };

  if (!gift) return;

  return (
    <div className="relative z-10 px-5 pb-14.25 flex flex-col gap-15 items-center">
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E] pt-15">
          {gift.sender}님의
          <br />
          마음을 담은
          <br />
          선물이 준비되었어요!
        </p>

        <GiftCard gift={gift} />
      </div>

      <Button
        theme="white-day"
        text="나도 선물 만들기"
        className="text-center items-center"
        onClick={handleClickCreateNewGift}
      />
    </div>
  );
}
