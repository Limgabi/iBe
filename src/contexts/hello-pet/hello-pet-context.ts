import { createContext } from "react";

import { StaticImageData } from "next/image";

/** 동물 발견 반응 */
export type AnimalEncounterStyle = "approach" | "admire";
/** 반려동물 이름 짓기 스타일 */
export type PetNamingStyle = "meaningful" | "fitting";
/** 새로운 장소에서의 반응 */
export type NewPlaceStyle = "check-first" | "help-adapt";
/** 산책 스타일 */
export type WalkStyle = "routine" | "free";

export type MBTI =
  | "INFJ"
  | "ENFJ"
  | "ISTJ"
  | "ISFJ"
  | "ENFP"
  | "ESFP"
  | "INTP"
  | "ESFJ"
  | "ISFP"
  | "INFP"
  | "ESTP"
  | "ESTJ"
  | "ENTJ"
  | "INTJ"
  | "ENTP"
  | "ISTP";

export type HelloPetSelections = {
  animalEncounterStyle: AnimalEncounterStyle | null;
  petNamingStyle: PetNamingStyle | null;
  newPlaceStyle: NewPlaceStyle | null;
  walkStyle: WalkStyle | null;
};

export type HelloPetResult = {
  image: string;
  title: string;
  desc: string;
};

export type HelloPetState = {
  selections: HelloPetSelections;
  mbti: MBTI | null;
  result: HelloPetResult | null;
};

export type HelloPetActions = {
  setSelection: <K extends keyof HelloPetSelections>(
    key: K,
    value: HelloPetSelections[K],
  ) => void;
  setMbtiResult: (mbti: MBTI, result: HelloPetResult) => void;
  resetHelloPet: () => void;
};

export type HelloPetContextValue = HelloPetState & HelloPetActions;

export const HelloPetContext = createContext<HelloPetContextValue | null>(null);
