import { useWhiteDayContext } from '@/src/contexts/white-day';
import Button from '../common/button/button';
import Icon from '../common/icon/icon';
import { useRouter } from 'next/navigation';

export default function Step3() {
  const router = useRouter();

  const { receiver, result } = useWhiteDayContext();

  const dessertType = result?.title.split(' ')[0];

  const handleClickNext = () => {
    router.push('/white-day/gift/new?step=4');
  };

  return (
    <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15">
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          [{receiver}]님은
          <br />
          <span className="text-[#E47F26]">{dessertType}</span> 같은 사람
        </p>

        <span className="inline-flex h-30 items-center text-[120px] leading-none">
          {result?.emoji}
        </span>

        <div className="flex flex-col gap-3 w-full text-sm leading-[160%] text-[#B5644E]">
          <div className="flex flex-col gap-2 rounded-lg py-5 px-4 bg-[#FFFFFF] items-center">
            <span className="font-extrabold">
              {dessertType} 타입 {result?.emoji}
            </span>
            <p className="font-medium">{result?.desc}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg py-5 px-4 bg-[#FFFFFF] items-center">
            <span className="font-extrabold">좋아하는 말</span>
            <div className="flex flex-col items-center font-medium">
              <p>{`"${result?.formal}"`} </p>
              <p>{`"${result?.fun}"`}</p>
            </div>
          </div>
        </div>
      </div>

      <Button
        text="편지쓰러 가기"
        icon={<Icon name="arrowRight" width={16} height={16} />}
        onClick={handleClickNext}
        theme="white-day"
      />
    </div>
  );
}
