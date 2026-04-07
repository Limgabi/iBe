import type { HelloPetSelections } from "@/src/contexts/hello-pet";

type MBTI = `${"E" | "I"}${"N" | "S"}${"T" | "F"}${"J" | "P"}`;

const MBTI_MAP = {
  animalEncounterStyle: { approach: "E", admire: "I" },
  petNamingStyle: { meaningful: "N", fitting: "S" },
  productPickStyle: { "need-first": "T", "preference-first": "F" },
  walkStyle: { routine: "J", free: "P" },
} as const;

export function getMbtiFromSelections(
  selections: HelloPetSelections,
): MBTI | null {
  const e_i =
    selections.animalEncounterStyle &&
    MBTI_MAP.animalEncounterStyle[selections.animalEncounterStyle];
  const n_s =
    selections.petNamingStyle &&
    MBTI_MAP.petNamingStyle[selections.petNamingStyle];
  const t_f =
    selections.productPickStyle &&
    MBTI_MAP.productPickStyle[selections.productPickStyle];
  const j_p = selections.walkStyle && MBTI_MAP.walkStyle[selections.walkStyle];

  if (!e_i || !n_s || !t_f || !j_p) return null;
  return `${e_i}${n_s}${t_f}${j_p}`;
}
