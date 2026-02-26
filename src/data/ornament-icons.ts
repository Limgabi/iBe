import { StaticImageData } from "next/image";
import yakgwaImg from "@/src/assets/images/new-year/yakgwa.png";
import envelopeImg from "@/src/assets/images/new-year/envelope.png";
import kiteImg from "@/src/assets/images/new-year/kite.png";
import luckyPouchImg from "@/src/assets/images/new-year/lucky-pouch.png";
import moonJarImg from "@/src/assets/images/new-year/moon-jar.png";
import songpyeonImg from "@/src/assets/images/new-year/songpyeon.png";
import jeogoriImg from "@/src/assets/images/new-year/jeogori.png";
import spoonImg from "@/src/assets/images/new-year/spoon.png";
import yutImg from "@/src/assets/images/new-year/yut.png";

export type OrnamentId =
  | "yakgwa"
  | "envelope"
  | "kite"
  | "lucky-pouch"
  | "moon-jar"
  | "songpyeon"
  | "jeogori"
  | "spoon"
  | "yut";

export interface OrnamentIcon {
  id: OrnamentId;
  iconSrc: StaticImageData;
}

export const ORNAMENT_ICONS: OrnamentIcon[] = [
  { id: "yakgwa", iconSrc: yakgwaImg },
  { id: "envelope", iconSrc: envelopeImg },
  { id: "kite", iconSrc: kiteImg },
  { id: "lucky-pouch", iconSrc: luckyPouchImg },
  { id: "moon-jar", iconSrc: moonJarImg },
  { id: "songpyeon", iconSrc: songpyeonImg },
  { id: "jeogori", iconSrc: jeogoriImg },
  { id: "spoon", iconSrc: spoonImg },
  { id: "yut", iconSrc: yutImg },
];
