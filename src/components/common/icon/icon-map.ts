import ArrowRight from "../../../assets/icons/arrow-right.svg";
import Download from "../../../assets/icons/download.svg";
import Gift from "../../../assets/icons/gift.svg";
import InquiryWhiteDay from "../../../assets/icons/inquiry-white-day.svg";
import Inquiry from "../../../assets/icons/inquiry.svg";
import Kakao from "../../../assets/icons/kakao.svg";
import Rectangle from "../../../assets/icons/rectangle.svg";
import Rectangle2 from "../../../assets/icons/rectangle-2.svg";
import WhiteDayKakao from "../../../assets/icons/white-day-kakao.svg";
import X from "../../../assets/icons/x.svg";

export const iconMap = {
  arrowRight: ArrowRight,
  download: Download,
  gift: Gift,
  inquiryWhiteDay: InquiryWhiteDay,
  inquiry: Inquiry,
  kakao: Kakao,
  rectangle: Rectangle,
  "rectangle-2": Rectangle2,
  whiteDayKakao: WhiteDayKakao,
  x: X,
} as const;

export type IconTypes = keyof typeof iconMap;
