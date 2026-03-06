import { THEME_UI, ThemeKey } from "@/src/constants/theme";

interface StepIndicatorProps {
  theme: ThemeKey;
  currentStep: number;
  totalStep: number;
}

export default function StepIndicator({
  theme,
  currentStep,
  totalStep,
}: StepIndicatorProps) {
  const { active, inactive } = THEME_UI[theme].steps;

  return (
    <div className="flex gap-0.75 items-center" aria-label="Progress steps">
      {Array.from({ length: totalStep }).map((_, idx) => {
        const stepNumber = idx + 1;
        const isActive = stepNumber <= currentStep;

        return (
          <span
            key={idx}
            className="h-1 w-7.5 rounded-[365px] transition-[background-color]"
            style={{ backgroundColor: isActive ? active : inactive }}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
