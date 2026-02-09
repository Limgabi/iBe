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
    title: "",
    message: "",
  },
  {
    id: "envelope",
    iconSrc: envelopeImg,
    title: "",
    message: "",
  },
  {
    id: "kite",
    iconSrc: kiteImg,
    title: "",
    message: "",
  },
  {
    id: "lucky-pouch",
    iconSrc: luckyPouchImg,
    title: "",
    message: "",
  },
  {
    id: "moon-jar",
    iconSrc: moonJarImg,
    title: "",
    message: "",
  },
  {
    id: "songpyeon",
    iconSrc: songpyeonImg,
    title: "",
    message: "",
  },
];
