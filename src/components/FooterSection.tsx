import Image from "next/image";
import footerCloudyLeftImg from "../assets/images/footer-cloudy-left.png";
import footerCloudyCenterImg from "../assets/images/footer-cloudy-center.png";
import footerCloudyRightImg from "../assets/images/footer-cloudy-right.png";

export default function FooterSection() {
  return (
    <div className="relative bottom-0 w-full h-27 overflow-hidden">
      <Image
        src={footerCloudyLeftImg}
        width={216}
        height={50}
        alt="footer-cloudy-left"
        className="absolute -bottom-10 -left-10"
      />
      <Image
        src={footerCloudyCenterImg}
        width={216}
        height={50}
        alt="footer-cloudy-center"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      />
      <Image
        src={footerCloudyRightImg}
        width={216}
        height={50}
        alt="footer-cloudy-right"
        className="absolute -bottom-30 -right-5"
      />
    </div>
  );
}
