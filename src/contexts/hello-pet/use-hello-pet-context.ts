import { useContext } from "react";

import { HelloPetContext } from "./hello-pet-context";

export function useHelloPetContext() {
  const ctx = useContext(HelloPetContext);

  if (!ctx) {
    throw new Error(
      "useHelloPetContext HelloPetProvider 내부에서만 사용할 수 있습니다.",
    );
  }

  return ctx;
}
