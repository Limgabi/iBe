import { StaticImageData } from "next/image";
import yakgwaImg from "../assets/images/yakgwa.png";
import envelopeImg from "../assets/images/envelope.png";
import kiteImg from "../assets/images/kite.png";
import luckyPouchImg from "../assets/images/lucky-pouch.png";
import moonJarImg from "../assets/images/moon-jar.png";
import songpyeonImg from "../assets/images/songpyeon.png";
import jeogoriImg from "../assets/images/jeogori.png";
import spoonImg from "../assets/images/spoon.png";
import yutImg from "../assets/images/yut.png";

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
