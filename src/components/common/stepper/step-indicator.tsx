import { THEME_UI } from "@/src/constants/theme";
import { useThemeContext } from "@/src/contexts/theme";

interface StepIndicatorProps {
  currentStep: number;
  totalStep: number;
}

export default function StepIndicator({
  currentStep,
  totalStep,
}: StepIndicatorProps) {
  const { theme } = useThemeContext();

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
