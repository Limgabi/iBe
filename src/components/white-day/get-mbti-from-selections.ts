import type { WhiteDaySelections } from '@/src/contexts/white-day';

type MBTI = `${'E' | 'I'}${'N' | 'S'}${'T' | 'F'}${'J' | 'P'}`;

const MBTI_MAP = {
  dessertMode: { share: 'E', solo: 'I' },
  dessertTaste: { newbie: 'N', classic: 'S' },
  dessertComment: { neat: 'T', soft: 'F' },
  giftStyle: { planned: 'J', vibes: 'P' },
} as const;

export function getMbtiFromSelections(selections: WhiteDaySelections): MBTI | null {
  const e_i = selections.dessertMode && MBTI_MAP.dessertMode[selections.dessertMode];
  const n_s =
    selections.dessertTaste && MBTI_MAP.dessertTaste[selections.dessertTaste];
  const t_f =
    selections.dessertComment && MBTI_MAP.dessertComment[selections.dessertComment];
  const j_p = selections.giftStyle && MBTI_MAP.giftStyle[selections.giftStyle];

  if (!e_i || !n_s || !t_f || !j_p) return null;
  return `${e_i}${n_s}${t_f}${j_p}`;
}
