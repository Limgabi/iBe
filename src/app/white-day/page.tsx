import { meongiB } from '@/src/app/fonts';
import Icon from '@/src/components/common/icon/icon';
import InquiryButton from '@/src/components/common/inquiry/inquiry-button';
import heartImg from '@/src/assets/images/white-day/heart.png';
import heart2Img from '@/src/assets/images/white-day/heart2.png';
import mainCakeImg from '@/src/assets/images/white-day/main-cake.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
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
          className="absolute rotate-40 opacity-40 -left-13 top-48"
        />
        <Image
          src={heartImg}
          alt="heart"
          width={130}
          height={130}
          className="absolute -rotate-20 opacity-10 -right-12 top-60"
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

        <div className="w-full pb-18 pt-6 flex flex-col gap-7 items-center">
          <div className="flex flex-col gap-1 text-[#B5644E] text-center leading-[160%]">
            <p className="font-extrabold text-xl">상대방은 어떤 디저트 타입일까?</p>
            <p className="font-semibold text-base">
              성격을 골라 어울리는 디저트를 찾고
              <br />
              편지를 완성해 선물해 보세요!
            </p>
          </div>

          <Link
            href="/white-day/gift/new?step=1"
            className="flex w-fit items-center gap-1 rounded-[365px] bg-[#B5644E] px-6 py-3 text-button text-white"
          >
            <span>선물 만들기</span>
            <Icon name="gift" width={16} height={16} />
          </Link>
        </div>

        <InquiryButton theme="white-day" />
      </div>
    </>
  );
}
