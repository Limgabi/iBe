import yakgwaImg from "../assets/images/yakgwa.png";
import envelopeImg from "../assets/images/envelope.png";
import kiteImg from "../assets/images/kite.png";
import luckyPouchImg from "../assets/images/lucky-pouch.png";
import moonJarImg from "../assets/images/moon-jar.png";
import songpyeonImg from "../assets/images/songpyeon.png";
import { StaticImageData } from "next/image";

export type Ornament = {
  id: string;
  iconSrc: StaticImageData;
  title: string;
  message: string;
};

export const ORNAMENTS: Ornament[] = [
  {
    id: "yakgwa",
    iconSrc: yakgwaImg,
    title: "먹을 복 가득 🍚",
    message:
      "축하합니다!\n당신은 오늘 맛있는 설 음식들을 한가득 먹을 예정이에요!\n먹어도 살이 안 찐다는 어마어마한 행운!\n오늘 하루가 맛있는 행복으로 가득할 거예요!",
  },
  {
    id: "envelope",
    iconSrc: envelopeImg,
    title: "오늘 운세 매우 좋음 ✌️✨",
    message:
      "축하합니다!\n오늘의 운세는 ‘상상 초과의 좋음'이에요!\n움직이는 것마다 행운이 따라오고,시도하는 것마다 기분 좋은 결과가 찾아올 예정!\n오늘 하루를 맘껏 즐기세요~",
  },
  {
    id: "kite",
    iconSrc: kiteImg,
    title: "잔소리 NO!",
    message:
      "축하합니다!\n오늘 하루만큼은 잔소리가 스스르\n피해 가는 행운이 찾아왔어요.\n잔소리 걱정 없이 마음 편히\n웃으면서 설날을 즐기세요!",
  },
  {
    id: "lucky-pouch",
    iconSrc: luckyPouchImg,
    title: "세뱃돈 기운 UP!",
    message:
      "럭키!\n오늘 당신의 지갑에 기분 좋은 기운이 스며들었어요!\n직접 받든, 마음으로 받든 왠지 모르게 든든한 하루가 될 거예요.\n풍요로운 설날 보내요!",
  },
  {
    id: "moon-jar",
    iconSrc: moonJarImg,
    title: "당신은 천사 👼",
    message:
      "헉 당신은 사실 인간계에 잠시 머물러 있는 천사였군요!\n왜인지 당신 곁에 있으면 기분이 좋아지더라고요.\n오늘은 천사인 당신에게는 작은 행운들이 톡톡 튀어나올 거예요!",
  },
  {
    id: "songpyeon",
    iconSrc: songpyeonImg,
    title: "먹을 복 가득 🍚",
    message:
      "축하합니다!\n당신은 오늘 맛있는 설 음식들을 한가득 먹을 예정이에요!\n먹어도 살이 안 찐다는 어마어마한 행운!\n오늘 하루가 맛있는 행복으로 가득할 거예요!",
  },
];
