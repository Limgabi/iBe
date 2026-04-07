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
  "productPickStyle",
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
  productPickStyle: {
    title: "반려동물 용품을 고른다면?",
    options: [
      { value: "preference-first", label: "좋아할지 먼저 생각" },
      { value: "need-first", label: "필요한지 먼저 고민" },
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
