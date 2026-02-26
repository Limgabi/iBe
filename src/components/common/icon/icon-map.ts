import Candy from '../../../assets/icons/candy.svg';
import Download from '../../../assets/icons/download.svg';
import HeartPrimary from '../../../assets/icons/heart-primary.svg';
import HeartSecondary from '../../../assets/icons/heart-secondary.svg';
import Inquiry from '../../../assets/icons/inquiry.svg';
import Kakao from '../../../assets/icons/kakao.svg';
import Rectangle from '../../../assets/icons/rectangle.svg';
import Rectangle2 from '../../../assets/icons/rectangle-2.svg';
import X from '../../../assets/icons/x.svg';

export const iconMap = {
  candy: Candy,
  download: Download,
  heartPrimary: HeartPrimary,
  heartSecondary: HeartSecondary,
  inquiry: Inquiry,
  kakao: Kakao,
  rectangle: Rectangle,
  'rectangle-2': Rectangle2,
  x: X,
} as const;

export type IconTypes = keyof typeof iconMap;
