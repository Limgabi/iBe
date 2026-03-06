import StepIndicator from "@/src/components/common/stepper/step-indicator";
import { ThemeKey } from "@/src/constants/theme";
import { ReactNode } from "react";

interface StepItem {
  key: string;
  title?: string;
  content: ReactNode;
}

interface StepperProps {
  theme: ThemeKey;
  steps: StepItem[];
  currentStep: number; // 1-based
}

export default function Stepper({ theme, steps, currentStep }: StepperProps) {
  const totalStep = steps.length;
  const safeCurrent = Math.min(Math.max(1, currentStep), totalStep);
  const current = steps[safeCurrent - 1];

  return (
    <div className="flex flex-col gap-12 w-full flex-1 min-h-0">
      <div className="flex justify-center">
        <StepIndicator
          theme={theme}
          currentStep={safeCurrent}
          totalStep={totalStep}
        />
      </div>

      <div className="flex flex-col w-full flex-1 min-h-0">
        {current?.content}
      </div>
    </div>
  );
}
