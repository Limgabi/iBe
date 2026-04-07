import { HelloPetResult, MBTI } from "@/src/contexts/hello-pet";

import enfjImg from "@/src/assets/images/hello-pet/enfj.png";
import enfpImg from "@/src/assets/images/hello-pet/enfp.png";
import entjImg from "@/src/assets/images/hello-pet/entj.png";
import entpImg from "@/src/assets/images/hello-pet/entp.png";
import esfjImg from "@/src/assets/images/hello-pet/esfj.png";
import esfpImg from "@/src/assets/images/hello-pet/esfp.png";
import estjImg from "@/src/assets/images/hello-pet/estj.png";
import estpImg from "@/src/assets/images/hello-pet/estp.png";
import infjImg from "@/src/assets/images/hello-pet/infj.png";
import infpImg from "@/src/assets/images/hello-pet/infp.png";
import intjImg from "@/src/assets/images/hello-pet/intj.png";
import intpImg from "@/src/assets/images/hello-pet/intp.png";
import isfjImg from "@/src/assets/images/hello-pet/isfj.png";
import isfpImg from "@/src/assets/images/hello-pet/isfp.png";
import istjImg from "@/src/assets/images/hello-pet/istj.png";
import istpImg from "@/src/assets/images/hello-pet/istp.png";

export const PET_IMAGES = [
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

const CARD_IMAGE_BY_MBTI: Record<MBTI, string> = {
  INFJ: "/hello-pet/cards/infj.png",
  ENFJ: "/hello-pet/cards/enfj.png",
  ISTJ: "/hello-pet/cards/istj.png",
  ISFJ: "/hello-pet/cards/isfj.png",
  ENFP: "/hello-pet/cards/enfp.png",
  ESFP: "/hello-pet/cards/esfp.png",
  INTP: "/hello-pet/cards/intp.png",
  ESFJ: "/hello-pet/cards/esfj.png",
  ISFP: "/hello-pet/cards/isfp.png",
  INFP: "/hello-pet/cards/infp.png",
  ESTP: "/hello-pet/cards/estp.png",
  ESTJ: "/hello-pet/cards/estj.png",
  ENTJ: "/hello-pet/cards/entj.png",
  INTJ: "/hello-pet/cards/intj.png",
  ENTP: "/hello-pet/cards/entp.png",
  ISTP: "/hello-pet/cards/istp.png",
};

const TITLE_BY_MBTI: Record<MBTI, string> = {
  INFJ: "판다",
  INFP: "양",
  INTJ: "여우",
  INTP: "고양이",
  ISFJ: "펭귄",
  ISFP: "코알라",
  ISTJ: "거북이",
  ISTP: "너구리",

  ENFJ: "햄스터",
  ENFP: "물고기",
  ENTJ: "고슴도치",
  ENTP: "앵무새",
  ESFJ: "토끼",
  ESFP: "병아리",
  ESTJ: "다람쥐",
  ESTP: "강아지",
};

const DESCRIPTION_BY_MBTI: Record<MBTI, string> = {
  INFJ: "차분한 매력을 가진 판다와 닮았어요!",
  INFP: "부드럽고 포근한 양과 닮았어요!",
  INTJ: "영리하게 흐름을 이끄는 여우와 닮았어요!",
  INTP: "자유롭고 독립적인 고양이와 닮았어요!",
  ISFJ: "서로를 의지하며 사는 펭귄과 닮았어요!",
  ISFP: "여유롭게 살아가는 코알라와 닮았어요!",
  ISTJ: "묵묵히 자기 길을 가는 거북이와 닮았어요!",
  ISTP: "환경에 잘 녹아드는 너구리와 닮았어요!",

  ENFJ: "성실하고 섬세한 햄스터와 닮았어요!",
  ENFP: "자유롭게 헤엄치는 물고기와 닮았어요!",
  ENTJ: "곁단단 속따뜻 고슴도치와 닮았어요!",
  ENTP: "재잘재잘 매력적인 앵무새와 닮았어요!",
  ESFJ: "온화하고 사랑스러운 토끼와 닮았어요!",
  ESFP: "사랑스러운 병아리와 닮았어요!",
  ESTJ: "부지런하고 성실한 다람쥐와 닮았어요!",
  ESTP: "활발하고 사랑스러운 강아지와 닮았어요!",
};

export const HELLO_PET_RESULT_BY_MBTI: Record<MBTI, HelloPetResult> = (
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
      image: CARD_IMAGE_BY_MBTI[mbti],
      title: TITLE_BY_MBTI[mbti],
      desc: DESCRIPTION_BY_MBTI[mbti],
    };
    return acc;
  },
  {} as Record<MBTI, HelloPetResult>,
);
