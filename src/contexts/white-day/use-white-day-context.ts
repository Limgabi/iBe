import { useContext } from "react";

import { WhiteDayContext } from "./white-day-context";

export function useWhiteDayContext() {
  const ctx = useContext(WhiteDayContext);

  if (!ctx) {
    throw new Error(
      "useWhiteDayContext WhiteDayProvider 내부에서만 사용할 수 있습니다.",
    );
  }

  return ctx;
}
