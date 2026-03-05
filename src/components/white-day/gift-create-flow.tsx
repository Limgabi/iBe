'use client';

import Step1 from '@/src/components/white-day/step-1';
import Step2 from '@/src/components/white-day/step-2';
import { WhiteDayProvider } from '@/src/contexts/white-day';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Step3 from './step-3';

export default function GiftCreateFlow() {
  const searchParams = useSearchParams();

  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));

  const step = useMemo(() => {
    const raw = Number(searchParams.get('step') ?? '1');
    const safe = Number.isFinite(raw) ? raw : 1;
    return clamp(safe, 1, 5);
  }, [searchParams]);

  return (
    <WhiteDayProvider>
      <div className="flex flex-col flex-1 min-h-0 w-full">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
      </div>
    </WhiteDayProvider>
  );
}
