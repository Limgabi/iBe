import Button from '@/src/components/common/button/button';
import Icon from '@/src/components/common/icon/icon';
import LoadingDots from '@/src/components/common/loading/loading-dots';
import RadioGroup from '@/src/components/common/radio-group/radio-group';
import {
  DESSERT_ICONS,
  WHITE_DAY_KEYS,
  WHITE_DAY_OPTIONS,
  WHITE_DAY_RESULT_BY_MBTI,
} from '@/src/components/white-day/constants';
import { useWhiteDayContext } from '@/src/contexts/white-day';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getMbtiFromSelections } from './get-mbti-from-selections';

type DessertIcon = (typeof DESSERT_ICONS)[number];
const pickUnique = <T,>(arr: readonly T[], count: number) => {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < Math.min(count, copy.length)) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return out;
};

export default function Step2() {
  const router = useRouter();

  const { receiver, selections, setSelection, setMbtiResult } = useWhiteDayContext();

  const allSelected = WHITE_DAY_KEYS.every((k) => selections[k] != null);

  const [isLoading, setIsLoading] = useState(false);
  const [emoji, setEmoji] = useState<DessertIcon>('🧁');

  const timersRef = useRef<{ intervalId?: number; timeoutId?: number }>({});

  const handleClickNext = () => {
    if (isLoading) return;
    if (!allSelected) return;

    // mbti 및 결과 저장
    const mbti = getMbtiFromSelections(selections);
    if (!mbti) return;

    const res = WHITE_DAY_RESULT_BY_MBTI[mbti];
    setMbtiResult(mbti, res);

    setIsLoading(true);
    const seq = pickUnique(DESSERT_ICONS, 5);
    setEmoji(seq[0]);
    let idx = 0;
    const intervalId = window.setInterval(() => {
      idx = Math.min(idx + 1, 4);
      setEmoji(seq[idx]);
    }, 1000);
    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      router.push('/white-day/gift/new?step=3');
    }, 5000);
    timersRef.current = { intervalId, timeoutId };
  };

  useEffect(() => {
    return () => {
      if (timersRef.current.intervalId)
        window.clearInterval(timersRef.current.intervalId);
      if (timersRef.current.timeoutId)
        window.clearTimeout(timersRef.current.timeoutId);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-8 items-center flex-1 h-full min-h-0 justify-center overflow-y-auto">
          <div className="flex flex-col gap-5 items-center">
            <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
              {receiver}님과
              <br />
              어울리는 디저트 고르는 중
            </p>
            <LoadingDots background="#B5644E" />
          </div>

          <span className="inline-flex items-center text-[200px] leading-none">
            {emoji}
          </span>
        </div>
      ) : (
        <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15 overflow-y-auto">
          <div className="flex flex-col gap-12 w-full">
            <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
              {receiver}님의
              <br />
              성격을 선택해 주세요
            </p>

            <div className="flex flex-col gap-8">
              {WHITE_DAY_KEYS.map((key) => {
                const group = WHITE_DAY_OPTIONS[key];

                return (
                  <RadioGroup
                    key={group.title}
                    theme="white-day"
                    label={group.title}
                    options={group.options}
                    value={selections[key]}
                    onChange={(v) => setSelection(key, v)}
                  />
                );
              })}
            </div>
          </div>

          <Button
            text="다음으로"
            icon={<Icon name="arrowRight" width={16} height={16} />}
            onClick={handleClickNext}
            theme="white-day"
            disabled={!allSelected}
          />
        </div>
      )}
    </>
  );
}
