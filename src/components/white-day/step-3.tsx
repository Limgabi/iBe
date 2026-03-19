import { useRouter } from "next/navigation";
import Image from "next/image";

import { useWhiteDayContext } from "@/src/contexts/white-day";
import Button from "../common/button/button";
import Icon from "../common/icon/icon";

export default function Step3() {
  const router = useRouter();

  const { receiver, result } = useWhiteDayContext();

  const dessertType = result?.title.split(" 타입")[0];

  const handleClickNext = () => {
    router.push("/white-day/gift/new?step=4");
  };

  return (
    <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15 overflow-y-auto scrollbar-hide">
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          {receiver}님은
          <br />
          <span className="font-black text-[#E47F26]">{dessertType}</span> 같은
          사람
        </p>

        <Image
          src={result?.image.src ?? ""}
          alt="디저트 이미지"
          width={120}
          height={120}
          className="w-30 h-30 object-contain"
          priority
        />

        <div className="flex flex-col gap-3 w-full text-sm leading-[160%] text-[#B5644E]">
          <div className="flex flex-col gap-2 rounded-lg py-5 px-4 bg-[#FFFFFF] items-center">
            <div className="flex items-center gap-1">
              <span className="font-extrabold">{result?.title}</span>
              <Image
                src={result?.image.src ?? ""}
                alt="디저트 이미지"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
                priority
              />
            </div>
            <p className="font-medium">{result?.desc}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg py-5 px-4 bg-[#FFFFFF] items-center">
            <span className="font-extrabold">좋아하는 말</span>
            <div className="flex flex-col items-center font-medium">
              {result?.recommendedPhrases.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button
        icon={<Icon name="arrowRight" width={16} height={16} color="#FFFFFF" />}
        onClick={handleClickNext}
      >
        편지 쓰러 가기
      </Button>
    </div>
  );
}
