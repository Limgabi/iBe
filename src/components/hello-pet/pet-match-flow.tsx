"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Stepper from "@/src/components/common/stepper/stepper";
import { HelloPetProvider } from "@/src/contexts/hello-pet";
import Step1 from "@/src/components/hello-pet/step-1";
import Step2 from "@/src/components/hello-pet/step-2";

export default function PetMatchFlow() {
  const searchParams = useSearchParams();

  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));

  const step = useMemo(() => {
    const raw = Number(searchParams.get("step") ?? "1");
    const safe = Number.isFinite(raw) ? raw : 1;
    return clamp(safe, 1, 2);
  }, [searchParams]);

  return (
    <HelloPetProvider>
      <Stepper
        currentStep={step}
        steps={[
          { key: "s1", content: <Step1 /> },
          { key: "s2", content: <Step2 /> },
        ]}
        showStepIndicator={false}
      />
    </HelloPetProvider>
  );
}
