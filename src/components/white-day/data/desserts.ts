import { StaticImageData } from "next/image";

import { MBTI, WhiteDayResult } from "@/src/contexts/white-day";

import enfjImg from "@/src/assets/images/white-day/enfj.png";
import enfpImg from "@/src/assets/images/white-day/enfp.png";
import entjImg from "@/src/assets/images/white-day/entj.png";
import entpImg from "@/src/assets/images/white-day/entp.png";
import esfjImg from "@/src/assets/images/white-day/esfj.png";
import esfpImg from "@/src/assets/images/white-day/esfp.png";
import estjImg from "@/src/assets/images/white-day/estj.png";
import estpImg from "@/src/assets/images/white-day/estp.png";
import infjImg from "@/src/assets/images/white-day/infj.png";
import infpImg from "@/src/assets/images/white-day/infp.png";
import intjImg from "@/src/assets/images/white-day/intj.png";
import intpImg from "@/src/assets/images/white-day/intp.png";
import isfjImg from "@/src/assets/images/white-day/isfj.png";
import isfpImg from "@/src/assets/images/white-day/isfp.png";
import istjImg from "@/src/assets/images/white-day/istj.png";
import istpImg from "@/src/assets/images/white-day/istp.png";

export const DESSERT_IMAGES = [
  infjImg,
  enfjImg,
  istjImg,
  isfjImg,
  enfpImg,
  esfpImg,
  intpImg,
  esfjImg,
  isfpImg,
  infpImg,
  estpImg,
  estjImg,
  entjImg,
  intjImg,
  entpImg,
  istpImg,
] as const;

const IMAGE_BY_MBTI: Record<MBTI, StaticImageData> = {
  INFJ: infjImg,
  ENFJ: enfjImg,
  ISTJ: istjImg,
  ISFJ: isfjImg,
  ENFP: enfpImg,
  ESFP: esfpImg,
  INTP: intpImg,
  ESFJ: esfjImg,
  ISFP: isfpImg,
  INFP: infpImg,
  ESTP: estpImg,
  ESTJ: estjImg,
  ENTJ: entjImg,
  INTJ: intjImg,
  ENTP: entpImg,
  ISTP: istpImg,
};

const TITLE_BY_MBTI: Record<MBTI, string> = {
  INFJ: "우유맛 사탕 타입",
  INFP: "복숭아 젤리 타입",
  INTJ: "다크 초콜릿 타입",
  INTP: "콜라맛 사탕 타입",
  ISFJ: "버터 사탕 타입",
  ISFP: "포도 젤리 타입",
  ISTJ: "아몬드 사탕 타입",
  ISTP: "솔트 캔디 타입",

  ENFJ: "딸기맛 사탕 타입",
  ENFP: "레인보우 막대 사탕 타입",
  ENTJ: "커피 사탕 타입",
  ENTP: "팝핑 캔디 타입",
  ESFJ: "꿀 사탕 타입",
  ESFP: "솜사탕 타입",
  ESTJ: "민트맛 사탕 타입",
  ESTP: "레몬 사탕 타입",
};

const DESCRIPTION_BY_MBTI: Record<MBTI, string> = {
  INFJ: "조용해 보여도 속이 단단한 사람",
  INFP: "감성이 풍부하고 진심인 사람",
  INTJ: "담백하지만 밀도 높은 전략적인 사람",
  INTP: "은근히 중독성 있는 사람",
  ISFJ: "부드럽고 포근한 사람",
  ISFP: "잔잔하고 은은한 매력을 지닌 사람",
  ISTJ: "기본에 충실해서 더 믿음 가는 사람",
  ISTP: "차분하지만 실속 있는 사람",

  ENFJ: "주변을 환하게 만드는 파티의 중심인 사람",
  ENFP: "통통 튀는 에너지를 가진 사람",
  ENTJ: "방향을 잘 잡고 끌고 가는 사람",
  ENTP: "아이디어가 많고 대화가 즐거운 사람",
  ESFJ: "사람 사이를 잘 이어주는 사람",
  ESFP: "만나면 바로 기분 좋아지는 사람",
  ESTJ: "확실하고 추진력 있는 사람",
  ESTP: "지금 이 순간을 제대로 즐기는 사람",
};

const RECOMMENDED_PHRASES_BY_MBTI: Record<MBTI, string[]> = {
  INFJ: [
    "언제나 내 이야기 잘 들어줘서 고마워",
    "너랑 이야기하면 괜히 마음이 편해져",
    "너랑 이런저런 얘기하는 시간이 좋아",
  ],
  INFP: [
    "너 얘기 들으면 공감되는 게 많아",
    "너랑 얘기하다 보면 솔직하게 말하게 돼",
    "너랑 얘기하다 보면 시간이 금방 가는 것 같아",
  ],
  INTJ: [
    "네 계획에는 항상 이유가 있는 것 같아",
    "네가 말해주면 괜히 신뢰가 가",
    "너랑 이야기하면 새로운 걸 많이 알게 돼",
  ],
  INTP: [
    "너 얘기 들으면 새로운 관점이 많아서 재밌어",
    "너는 다른 사람들이 잘 생각 못 하는 걸 보는 것 같아",
    "역시 너다운 생각이다 싶었어",
  ],
  ISFJ: [
    "항상 조용히 챙겨줘서 고마워",
    "네가 챙겨줄 때마다 고마운 마음이 들어",
    "너 덕분에 마음이 편해질 때가 많아",
  ],
  ISFP: [
    "너랑 같이 있으면 마음이 편해져",
    "너만의 분위기가 있는 것 같아",
    "너랑 같이 있는 시간이 좋아",
  ],
  ISTJ: [
    "네가 있어서 든든해",
    "항상 한결같은 모습이 좋아",
    "너랑 있으면 괜히 마음이 놓여",
  ],
  ISTP: [
    "너는 말보다 행동으로 보여주는 것 같아",
    "너만의 생각 방식이 있는 것 같아",
    "너랑 이야기하면 새로운 걸 알게 될 때가 많아",
  ],
  ENFJ: [
    "너 덕분에 다들 편하게 얘기하는 것 같아",
    "너는 사람들의 좋은 모습을 잘 끌어내는 것 같아",
    "너랑 이야기하면 괜히 힘이 나",
  ],
  ENFP: [
    "너랑 있으면 분위기가 훨씬 밝아져",
    "너는 아이디어가 진짜 많은 것 같아",
    "너랑 이야기하면 항상 재밌어",
  ],
  ENTJ: [
    "네 말 들으면 방향이 딱 잡히는 느낌이야",
    "확신 있게 말하는 모습이 좋더라",
    "너 보면 괜히 나도 더 열심히 하게 돼",
  ],
  ENTP: [
    "너랑 대화하면 시간 가는 줄 모르겠어",
    "너는 아이디어가 진짜 많은 것 같아",
    "너랑 얘기하면 너무 재밌어",
  ],
  ESFJ: [
    "너랑 있으면 괜히 편해",
    "너 덕분에 항상 편하게 얘기하는 것 같아",
    "항상 먼저 챙겨줘서 고마워",
  ],
  ESFP: [
    "너랑 있으면 항상 재밌어",
    "너랑 있으면 시간 가는 줄 모르겠어",
    "너 덕분에 분위기가 더 재밌어지는 것 같아",
  ],
  ESTJ: [
    "네가 있어서 진짜 든든해",
    "너랑 이야기하면 정리가 잘 되는 느낌이야",
    "너 덕분에 나도 더 열심히 하게 되는 것 같아",
  ],
  ESTP: [
    "너는 새로운 거에 거리낌이 없는 것 같아",
    "너랑 있으면 지루할 틈이 없어",
    "너랑 노는 게 제일 재밌어",
  ],
};

export const WHITE_DAY_RESULT_BY_MBTI: Record<MBTI, WhiteDayResult> = (
  [
    "INFJ",
    "ENFJ",
    "ISTJ",
    "ISFJ",
    "ENFP",
    "ESFP",
    "INTP",
    "ESFJ",
    "ISFP",
    "INFP",
    "ESTP",
    "ESTJ",
    "ENTJ",
    "INTJ",
    "ENTP",
    "ISTP",
  ] as const
).reduce(
  (acc, mbti) => {
    acc[mbti] = {
      image: IMAGE_BY_MBTI[mbti],
      title: TITLE_BY_MBTI[mbti],
      desc: DESCRIPTION_BY_MBTI[mbti],
      recommendedPhrases: RECOMMENDED_PHRASES_BY_MBTI[mbti],
    };
    return acc;
  },
  {} as Record<MBTI, WhiteDayResult>,
);
