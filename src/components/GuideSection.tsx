import Image from "next/image";
import heartImg from "../assets/images/heart.png";

export default function GuideSection() {
  return (
    <section className="flex flex-col gap-5 pb-20 text-center items-center text-sm font-medium leading-[190%] text-[#454545] w-full">
      <Image src={heartImg} width={32} height={32} alt="heart" />
      <div>
        설날이에요! 🎉 <br />
        2026년을 시작하는 당신을 위해
        <br />
        행운 뽑기가 방금 막 배달되었어요!
        <br />
        <br />
        원하는 오너먼트를 눌러
        <br />
        행운을 받아보세요 ♡
      </div>
    </section>
  );
}
