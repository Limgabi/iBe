import Image from "next/image";
import flowerImg from "../assets/images/flower.png";

export default function GuideSection() {
  return (
    <section className="relative flex flex-col gap-5 pb-18 text-center items-center text-sm font-medium leading-[190%] text-[#D87875] w-full">
      <div>
        설날이에요 🎉 <br />
        2026년을 시작하는 당신을 위해
        <br />
        행운 뽑기가 방금 막 배달되었어요!
        <br />
        <br />
        원하는 오너먼트를 눌러
        <br />
        행운을 받아보세요 ♥
      </div>

      <Image
        src={flowerImg}
        width={16}
        height={16}
        alt="flower"
        className="absolute top-2 left-8"
      />
      <Image
        src={flowerImg}
        width={16}
        height={16}
        alt="flower"
        className="absolute top-12 right-9"
      />
      <Image
        src={flowerImg}
        width={16}
        height={16}
        alt="flower"
        className="absolute top-29.5 left-18"
      />
      <Image
        src={flowerImg}
        width={16}
        height={16}
        alt="flower"
        className="absolute top-40 right-14.25"
      />
      <Image
        src={flowerImg}
        width={16}
        height={16}
        alt="flower"
        className="absolute top-40 left-5.5"
      />
    </section>
  );
}
