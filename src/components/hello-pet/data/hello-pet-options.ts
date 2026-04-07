import { HelloPetSelections } from "@/src/contexts/hello-pet";

type OptionItem<T> = { value: T; label: string };
type OptionGroup<T> = { title: string; options: readonly OptionItem<T>[] };

type HelloPetOptions = {
  [K in keyof HelloPetSelections]-?: OptionGroup<
    NonNullable<HelloPetSelections[K]>
  >;
};

export const HELLO_PET_KEYS = [
  "animalEncounterStyle",
  "petNamingStyle",
  "newPlaceStyle",
  "walkStyle",
] as const;

export type HelloPetKey = (typeof HELLO_PET_KEYS)[number];

export const HELLO_PET_OPTIONS = {
  animalEncounterStyle: {
    title: "귀여운 동물을 발견했다. 당신은?",
    options: [
      { value: "approach", label: "가까이 가본다" },
      { value: "admire", label: "멀리서 귀여워한다" },
    ],
  },
  petNamingStyle: {
    title: "반려동물이 생겼다. 이름을 지어준다면?",
    options: [
      { value: "meaningful", label: "의미 있는 이름" },
      { value: "fitting", label: "잘 어울리는 이름" },
    ],
  },
  newPlaceStyle: {
    title: "반려동물과 새로운 장소를 간다면?",
    options: [
      { value: "check-first", label: "상태 체크가 먼저" },
      { value: "help-adapt", label: "적응 도와주는 게 먼저" },
    ],
  },
  walkStyle: {
    title: "반려동물과 산책을 한다면?",
    options: [
      { value: "routine", label: "루틴처럼 같은 시간" },
      { value: "free", label: "그날그날 여유될 때" },
    ],
  },
} as const satisfies HelloPetOptions;
