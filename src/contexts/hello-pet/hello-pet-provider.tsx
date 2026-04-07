import { useCallback, useMemo, useState } from "react";

import {
  MBTI,
  HelloPetActions,
  HelloPetContext,
  HelloPetContextValue,
  HelloPetResult,
  HelloPetSelections,
} from "./hello-pet-context";

type HelloPetProviderProps = {
  children: React.ReactNode;
};

const initialSelections: HelloPetSelections = {
  animalEncounterStyle: null,
  petNamingStyle: null,
  productPickStyle: null,
  walkStyle: null,
};

export function HelloPetProvider({ children }: HelloPetProviderProps) {
  const [selections, setSelections] = useState<HelloPetSelections>({
    animalEncounterStyle: null,
    petNamingStyle: null,
    productPickStyle: null,
    walkStyle: null,
  });
  const [mbti, setMbti] = useState<MBTI | null>(null);
  const [result, setResult] = useState<HelloPetResult | null>(null);

  const setSelection: HelloPetActions["setSelection"] = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const setMbtiResult = (mbti: MBTI, result: HelloPetResult) => {
    setMbti(mbti);
    setResult(result);
  };

  const resetHelloPet = useCallback(() => {
    setSelections(initialSelections);
    setMbti(null);
    setResult(null);
  }, []);

  const value = useMemo<HelloPetContextValue>(() => {
    return {
      selections,
      setSelection,

      mbti,
      result,
      setMbtiResult,

      resetHelloPet,
    };
  }, [selections, mbti, result, resetHelloPet]);

  return <HelloPetContext value={value}>{children}</HelloPetContext>;
}
