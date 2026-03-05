import type { WhiteDaySelections } from '@/src/contexts/white-day';

type OptionItem<T> = { value: T; label: string };
type OptionGroup<T> = { title: string; options: readonly OptionItem<T>[] };

type WhiteDayOptions = {
  [K in keyof WhiteDaySelections]-?: OptionGroup<NonNullable<WhiteDaySelections[K]>>;
};

export const WHITE_DAY_KEYS = [
  'dessertMode',
  'dessertTaste',
  'dessertComment',
  'giftStyle',
] as const;

export type WhiteDayKey = (typeof WHITE_DAY_KEYS)[number];

export const WHITE_DAY_OPTIONS = {
  dessertMode: {
    title: '디저트 모드',
    options: [
      { value: 'share', label: '나눠 먹는 달달러' },
      { value: 'solo', label: '혼자 음미 달달러' },
    ],
  },
  dessertTaste: {
    title: '디저트 취향',
    options: [
      { value: 'newbie', label: '신상 · 조합 덕후' },
      { value: 'classic', label: '클래식 · 검증파' },
    ],
  },
  dessertComment: {
    title: '디저트 감상평',
    options: [
      { value: 'neat', label: '깔끔 스윗 멘트' },
      { value: 'soft', label: '말랑 스윗 멘트' },
    ],
  },
  giftStyle: {
    title: '선물 스타일',
    options: [
      { value: 'planned', label: '계획대로 착착' },
      { value: 'vibes', label: '그날 감성 픽' },
    ],
  },
} as const satisfies WhiteDayOptions;

export const DESSERT_ICONS = [
  '🧁',
  '🍰',
  '🍩',
  '🍮',
  '🍭',
  '🍬',
  '🍪',
  '🍯',
  '🍨',
  '🍧',
  '🥞',
  '🥨',
  '🥐',
  '🥯',
  '🧇',
  '🥧',
] as const;

type Result = {
  emoji: string;
  title: string;
  desc: string;
  formal: string;
  fun: string;
};

export type MBTI =
  | 'INFJ'
  | 'ENFJ'
  | 'ISTJ'
  | 'ISFJ'
  | 'ENFP'
  | 'ESFP'
  | 'INTP'
  | 'ESFJ'
  | 'ISFP'
  | 'INFP'
  | 'ESTP'
  | 'ESTJ'
  | 'ENTJ'
  | 'INTJ'
  | 'ENTP'
  | 'ISTP';

const EMOJI_BY_MBTI: Record<MBTI, string> = {
  INFJ: '🧁',
  ENFJ: '🍰',
  ISTJ: '🍩',
  ISFJ: '🍮',
  ENFP: '🍭',
  ESFP: '🍬',
  INTP: '🍪',
  ESFJ: '🍯',
  ISFP: '🍨',
  INFP: '🍧',
  ESTP: '🥞',
  ESTJ: '🥨',
  ENTJ: '🥐',
  INTJ: '🥯',
  ENTP: '🧇',
  ISTP: '🥧',
};

const TITLE_BY_MBTI: Record<MBTI, string> = {
  INFJ: '컵케이크 같은 타입',
  ENFJ: '케이크 같은 타입',
  ISTJ: '도넛 같은 타입',
  ISFJ: '푸딩 같은 타입',
  ENFP: '막대사탕 같은 타입',
  ESFP: '캔디 같은 타입',
  INTP: '쿠키 같은 타입',
  ESFJ: '꿀 같은 타입',
  ISFP: '아이스크림 같은 타입',
  INFP: '셔벗 같은 타입',
  ESTP: '팬케이크 같은 타입',
  ESTJ: '프레첼 같은 타입',
  ENTJ: '크루아상 같은 타입',
  INTJ: '베이글 같은 타입',
  ENTP: '와플 같은 타입',
  ISTP: '파이 같은 타입',
};

const DESC_BY_MBTI: Record<MBTI, string> = {
  INFJ: '작고 귀여워 보여도 속은 깊고 진한 사람.',
  ENFJ: '주변을 환하게 만드는 달콤한 존재.',
  ISTJ: '기본에 충실해서 더 믿음 가는 사람.',
  ISFJ: '부드럽고 포근한 다정함.',
  ENFP: '톡톡 튀고 기분 좋아지는 에너지.',
  ESFP: '가볍고 사랑스러운 매력.',
  INTP: '담백하지만 은근히 중독성 있는 사람.',
  ESFJ: '달콤하게 사람을 이어주는 존재.',
  ISFP: '부드럽고 은은하게 스며드는 매력.',
  INFP: '상큼하고 감성 톡 터지는 사람.',
  ESTP: '지금 이 순간을 제대로 즐기는 사람.',
  ESTJ: '단단하고 확실한 매력.',
  ENTJ: '겉은 단단, 속은 결이 살아있는 사람.',
  INTJ: '담백하지만 밀도 있는 매력.',
  ENTP: '빈틈 많은 듯 보이지만 매력으로 꽉 찬 사람.',
  ISTP: '겉은 차분, 속은 뜨거운 매력.',
};

const FORMAL_LETTER_BY_MBTI: Record<MBTI, string> = {
  INFJ: '너는 생각보다 훨씬 따뜻한 사람이야.',
  ENFJ: '너는 사람을 참 편하게 만들어.',
  ISTJ: '너는 항상 책임감이 느껴져.',
  ISFJ: '너는 늘 조용히 챙겨줘서 고마워.',
  ENFP: '너 덕분에 분위기가 환해져.',
  ESFP: '너는 같이 있으면 정말 즐거워.',
  INTP: '네 생각은 항상 새롭고 흥미로워.',
  ESFJ: '너는 주변을 참 잘 챙겨.',
  ISFP: '네 섬세함이 참 예쁘다.',
  INFP: '네 감정은 늘 진심이라 더 소중해.',
  ESTP: '너는 순간을 정말 잘 즐겨.',
  ESTJ: '너는 믿고 따를 수 있는 사람이야.',
  ENTJ: '너는 확신이 있어서 더 멋져.',
  INTJ: '너는 조용히 다 계획해두는 사람이구나.',
  ENTP: '너랑 있으면 지루할 틈이 없어.',
  ISTP: '너는 말보다 행동으로 보여줘서 멋져.',
};

const FUN_LETTER_BY_MBTI: Record<MBTI, string> = {
  INFJ: '화이트데이 핑계로 말해… 너는 조용히 따뜻한 게 제일 반칙이야 🧁',
  ENFJ: '화이트데이니까 고백(?) 하나… 너 없으면 분위기 바로 심심해져 🍰',
  ISTJ: '화이트데이 기념으로 인정… 너는 ‘믿음’이라는 단어가 제일 잘 어울려 🍩',
  ISFJ: '화이트데이라서 말해… 너처럼 티 안 나게 챙기는 사람 흔치 않아 🍮',
  ENFP: '화이트데이니까 솔직히… 너 오면 공기가 달달해지는 거 맞다 🍭',
  ESFP: '화이트데이 기념 한 줄… 너랑 있으면 그냥 웃을 일이 늘어 🍬',
  INTP: '화이트데이 핑계로… 가끔 네 한마디가 제일 핵심이라 웃김 🍪',
  ESFJ: '화이트데이니까 적어본다… 너는 사람들 잘 모이게 만드는 재능이 있어 🍯',
  ISFP: '화이트데이 기념으로… 너는 조용히 센스 챙기는 게 참 멋이야 🍨',
  INFP: '화이트데이니까 살짝만… 너는 진심이 보여서 더 믿음이 가 🍧',
  ESTP: '화이트데이 기념 한마디… 너랑 있으면 ‘일단 해보자’가 쉬워져 🥞',
  ESTJ: '화이트데이니까 말해… 너는 결정 빨라서 같이 있으면 마음이 편해 🥨',
  ENTJ: '화이트데이 핑계로 인정… 너는 방향 잡아주면 속도가 진짜 빠르다 🥐',
  INTJ: '화이트데이니까 적는다… 너는 말은 적어도 준비는 늘 완벽하더라 🥯',
  ENTP: '화이트데이 기념으로… 너랑 얘기하면 딴 길로 새도 그게 재밌어 🧇',
  ISTP: '화이트데이니까 한 줄… 너는 말보다 행동으로 해결해버려서 멋있어 🥧',
};

export const WHITE_DAY_RESULT_BY_MBTI: Record<MBTI, Result> = (
  [
    'INFJ',
    'ENFJ',
    'ISTJ',
    'ISFJ',
    'ENFP',
    'ESFP',
    'INTP',
    'ESFJ',
    'ISFP',
    'INFP',
    'ESTP',
    'ESTJ',
    'ENTJ',
    'INTJ',
    'ENTP',
    'ISTP',
  ] as const
).reduce(
  (acc, mbti) => {
    acc[mbti] = {
      emoji: EMOJI_BY_MBTI[mbti],
      title: TITLE_BY_MBTI[mbti],
      desc: DESC_BY_MBTI[mbti],
      formal: FORMAL_LETTER_BY_MBTI[mbti],
      fun: FUN_LETTER_BY_MBTI[mbti],
    };
    return acc;
  },
  {} as Record<MBTI, Result>,
);
