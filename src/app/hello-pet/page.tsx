import Image from "next/image";
import backgroundImg from "@/src/assets/images/hello-pet/background.png";
import mainPetImg from "@/src/assets/images/hello-pet/main-pet.png";
import InquiryButton from "@/src/components/common/inquiry/inquiry-button";
import { meongiB } from "@/src/app/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={backgroundImg}
        alt="background"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 flex h-full flex-col items-center gap-7">
        <h1
          className={`${meongiB.className} pt-25 w-full select-none text-center leading-[80%] text-[80px] text-[#4073F0]`}
        >
          Hello <br /> Pet!
        </h1>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-[#4073F0] text-center">
            <p className="font-black text-[22px] leading-[160%]">
              나와 닮은 동물은?
            </p>
            <p className="font-bold text-base leading-[150%]">
              간단한 테스트를 통해
              <br />
              나와 닮은 동물을 알아보세요
            </p>
          </div>
        </div>
        <Link
          href="/hello-pet/new?step=1"
          className="flex w-fit items-center gap-1 rounded-[365px] bg-[#4073F0] px-6 py-3 text-button text-white"
        >
          <span>테스트하기</span>
        </Link>
      </div>

      <InquiryButton />

      <Image src={mainPetImg} alt="main-pet" className="absolute bottom-0" />
    </div>
  );
}
