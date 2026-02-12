import Download from "../../../assets/icons/download.svg";
import Kakao from "../../../assets/icons/kakao.svg";
import Rectangle from "../../../assets/icons/rectangle.svg";
import Rectangle2 from "../../../assets/icons/rectangle-2.svg";
import X from "../../../assets/icons/x.svg";

export const iconMap = {
  download: Download,
  kakao: Kakao,
  rectangle: Rectangle,
  "rectangle-2": Rectangle2,
  x: X,
} as const;

export type IconTypes = keyof typeof iconMap;
