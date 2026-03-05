"use client";

import Step1 from "@/src/components/white-day/step-1";
import Step2 from "@/src/components/white-day/step-2";
import { WhiteDayProvider } from "@/src/contexts/white-day";
import { useMemo } from "react";

interface GiftCreateFlowParams {
  stepParam?: string;
}

export default function GiftCreateFlow({ stepParam }: GiftCreateFlowParams) {
  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));

  const step = useMemo(() => {
    const raw = Number(stepParam ?? "1");
    const safe = Number.isFinite(raw) ? raw : 1;
    return clamp(safe, 1, 5);
  }, [stepParam]);

  return (
    <WhiteDayProvider>
      <div className="flex flex-col flex-1 min-h-0 w-full">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
      </div>
    </WhiteDayProvider>
  );
}
