import { StaticImageData } from "next/image";
import yakgwaImg from "../../../assets/images/new-year/yakgwa.png";
import envelopeImg from "../../../assets/images/new-year/envelope.png";
import kiteImg from "../../../assets/images/new-year/kite.png";
import luckyPouchImg from "../../../assets/images/new-year/lucky-pouch.png";
import moonJarImg from "../../../assets/images/new-year/moon-jar.png";
import songpyeonImg from "../../../assets/images/new-year/songpyeon.png";
import jeogoriImg from "../../../assets/images/new-year/jeogori.png";
import spoonImg from "../../../assets/images/new-year/spoon.png";
import yutImg from "../../../assets/images/new-year/yut.png";

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
