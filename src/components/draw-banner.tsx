import Image from "next/image";
import newyearImg from "../assets/images/newyear.png";
import shadowImg from "../assets/images/shadow.png";
import cloudyTopImg from "../assets/images/cloudy-top.png";
import cloudyRightImg from "../assets/images/cloudy-right.png";
import cloudyLeftImg from "../assets/images/cloudy-left.png";
import cloudyBottomLeftImg from "../assets/images/cloudy-bottom-left.png";
import cloudyBottomRightImg from "../assets/images/cloudy-bottom-right.png";
import unionLeftImg from "../assets/images/union-left.png";
import unionRightImg from "../assets/images/union-right.png";
import flowerImg from "../assets/images/flower.png";
import { meongiB } from "@/src/app/fonts";
import Icon from "@/src/components/common/icon/icon";

export default function DrawBanner() {
  return (
    <div className="relative flex flex-col gap-8 w-full pt-25 items-center overflow-hidden">
      {/* 배경 레이어 */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={cloudyTopImg}
          width={216}
          height={108}
          alt="cloudy-top"
          className="absolute top-0 left-5"
        />
        <Image
          src={cloudyRightImg}
          width={137}
          height={69}
          alt="cloudy-right"
          className="absolute top-16.5 right-0"
        />
        <Image
          src={cloudyLeftImg}
          width={137}
          height={69}
          alt="cloudy-left"
          className="absolute top-36 -left-4"
        />
        <Image
          src={unionLeftImg}
          width={63}
          height={16}
          alt="union-left"
          className="absolute top-24 -left-4"
        />
        <Image
          src={unionRightImg}
          width={63}
          height={16}
          alt="union-right"
          className="absolute top-5 -right-3"
        />
        <Image
          src={flowerImg}
          width={16}
          height={16}
          alt="flower-right"
          className="absolute top-46 right-10.75"
        />
        <Image
          src={flowerImg}
          width={16}
          height={16}
          alt="flower-left"
          className="absolute top-55 left-5"
        />
        <Image
          src={flowerImg}
          width={16}
          height={16}
          alt="flower-left"
          className="absolute top-60 -right-1"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 pb-4">
        {/* 컨텐츠 레이어 */}
        <div className="flex flex-col gap-0.5 text-[#EA706C] text-center">
          <h1 className={`${meongiB.className} text-[56px] leading-[85%]`}>
            LUCKY
            <br />
            DRAW
          </h1>
          <div className="flex gap-1 items-center justify-center">
            <h2 className="text-[16px] font-extrabold leading-[150%]">
              아이비의 행운 뽑기
            </h2>
            <Icon name="rectangle" width={8} height={8} />
            <Icon name="rectangle-2" width={8} height={8} />
          </div>
        </div>
        <div className="relative">
          <Image
            src={newyearImg}
            width={333}
            height={244}
            alt="newyear"
            className="relative bottom-2.5 z-10"
          />
          <Image
            src={shadowImg}
            width={271}
            height={71}
            alt="shadow"
            className="absolute bottom-5.5 left-1/2 -translate-x-1/2 z-0"
          />
        </div>
      </div>

      <div className="relative w-full">
        {/* 그라데이션 바 */}
        <div
          className="h-16.5 w-full pointer-events-none absolute bottom-0 left-0"
          style={{
            background:
              "linear-gradient(180deg, #FFF1EB 0%, #FFFAF7 50%, #FFF1EB 100%)",
          }}
        />
        <Image
          src={flowerImg}
          width={16}
          height={16}
          alt="flower-left"
          className="absolute bottom-13 left-13"
        />
        {/* 바닥 구름(그라데이션 바 위로) */}
        <Image
          src={cloudyBottomLeftImg}
          width={60}
          height={69}
          alt="cloudy-bottom-left"
          className="pointer-events-none absolute bottom-1 -left-5"
        />
        <Image
          src={cloudyBottomRightImg}
          width={60}
          height={69}
          alt="cloudy-bottom-right"
          className="pointer-events-none absolute bottom-2 -right-3"
        />
      </div>
    </div>
  );
}
