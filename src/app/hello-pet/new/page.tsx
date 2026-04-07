"use client";

import { meongiB } from "@/src/app/fonts";
import Stepper from "@/src/components/common/stepper/stepper";
import Step1 from "@/src/components/hello-pet/step-1";
import Step2 from "@/src/components/hello-pet/step-2";
import { HelloPetProvider } from "@/src/contexts/hello-pet";
import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";

function HelloPetPageContent() {
  const searchParams = useSearchParams();

  const step = useMemo(() => {
    const raw = Number(searchParams.get("step") ?? "1");
    const safe = Number.isFinite(raw) ? raw : 1;
    return Math.max(1, Math.min(safe, 2));
  }, [searchParams]);

  return (
    <HelloPetProvider>
      {step === 2 ? (
        <Step2 />
      ) : (
        <div className="mx-auto flex min-h-screen max-w-md flex-1 flex-col gap-12 px-5 pt-8 pb-14.25">
          <span
            className={`${meongiB.className} text-modal-service text-center text-[#4073F0]`}
          >
            Hello Pet!
          </span>

          <Stepper
            currentStep={step}
            steps={[{ key: "s1", content: <Step1 /> }]}
            showStepIndicator={false}
          />
        </div>
      )}
    </HelloPetProvider>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HelloPetPageContent />
    </Suspense>
  );
}
