import StepIndicator from "@/src/components/common/stepper/step-indicator";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface StepItem {
  key: string;
  title?: string;
  content: ReactNode;
}

interface StepperProps {
  steps: StepItem[];
  currentStep: number; // 1-based
  showStepIndicator?: boolean;
}

export default function Stepper({
  steps,
  currentStep,
  showStepIndicator = true,
}: StepperProps) {
  const totalStep = steps.length;
  const safeCurrent = Math.min(Math.max(1, currentStep), totalStep);
  const current = steps[safeCurrent - 1];

  return (
    <div className="flex flex-col gap-12 w-full flex-1 min-h-0">
      {showStepIndicator && (
        <div className="flex justify-center">
          <StepIndicator currentStep={safeCurrent} totalStep={totalStep} />
        </div>
      )}

      <div className="relative w-full flex-1 min-h-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={current?.key ?? safeCurrent}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full min-h-0 flex flex-col"
          >
            {current?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
