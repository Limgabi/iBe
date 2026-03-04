import { meongiB } from "@/src/app/fonts";
import Icon from "@/src/components/common/icon/icon";
import InquiryButton from "@/src/components/common/inquiry/inquiry-button";
import heartImg from "@/src/assets/images/white-day/heart.png";
import heart2Img from "@/src/assets/images/white-day/heart2.png";
import mainCakeImg from "@/src/assets/images/white-day/main-cake.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303]">
      <main className="relative min-h-screen w-full max-w-97.5 overflow-hidden bg-[#FFFBE8]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={heartImg}
            alt="heart"
            width={118}
            height={118}
            className="absolute -rotate-30 opacity-10 left-10 top-8"
          />
          <Image
            src={heart2Img}
            alt="heart2"
            width={57}
            height={57}
            className="absolute rotate-45 opacity-20 right-10 top-7"
          />
          <Image
            src={heart2Img}
            alt="heart2"
            width={118}
            height={118}
            className="absolute rotate-45 opacity-40 -left-7 top-50"
          />
          <Image
            src={heartImg}
            alt="heart"
            width={130}
            height={130}
            className="absolute -rotate-20 opacity-10 -right-10 top-60"
          />
          <Image
            src={heartImg}
            alt="heart"
            width={42}
            height={42}
            className="absolute -rotate-20 opacity-15 left-10 bottom-50"
          />
          <Image
            src={heart2Img}
            alt="heart2"
            width={118}
            height={118}
            className="absolute rotate-25 opacity-20 -right-5 bottom-33"
          />
          <Image
            src={heartImg}
            alt="heart"
            width={200}
            height={200}
            className="absolute rotate-25 opacity-10 -left-10 -bottom-20"
          />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center">
          <h1
            className={`${meongiB.className} pt-25 w-full text-center text-main-title text-[#B5644E] select-none`}
          >
            Sweet <br /> Letter
          </h1>

          <div className="mt-10 w-fit">
            <Image src={mainCakeImg} alt="mainCake" width={281} height={323} />
          </div>

          <div className="w-full pb-18 pt-10 flex flex-col gap-7 items-center">
            <p className="font-semibold text-base leading-[160%] text-[#B5644E] text-center">
              그 사람을 떠올리며 성격을 고르면,
              <br />
              어울리는 달콤한 선물과 편지가 완성돼요.
            </p>

            <button className="w-fit flex gap-1 items-center text-white text-button px-6 py-3 rounded-[365px] bg-[#B5644E]">
              <span>선물 만들기</span>
              <Icon name="gift" width={16} height={16} />
            </button>
          </div>

          <InquiryButton theme="white-day" />
        </div>
      </main>
    </div>
  );
}
