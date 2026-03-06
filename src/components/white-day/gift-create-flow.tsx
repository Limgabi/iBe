"use client";

import Step1 from "@/src/components/white-day/step-1";
import Step2 from "@/src/components/white-day/step-2";
import { WhiteDayProvider } from "@/src/contexts/white-day";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Stepper from "@/src/components/common/stepper/stepper";

export default function GiftCreateFlow() {
  const searchParams = useSearchParams();

  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));

  const step = useMemo(() => {
    const raw = Number(searchParams.get("step") ?? "1");
    const safe = Number.isFinite(raw) ? raw : 1;
    return clamp(safe, 1, 5);
  }, [searchParams]);

  return (
    <WhiteDayProvider>
      <Stepper
        theme="white-day"
        currentStep={step}
        steps={[
          { key: "s1", content: <Step1 /> },
          { key: "s2", content: <Step2 /> },
          { key: "s3", content: <Step3 /> },
          { key: "s4", content: <Step4 /> },
        ]}
      />
    </WhiteDayProvider>
  );
}
