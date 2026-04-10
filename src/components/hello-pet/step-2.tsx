import Image from "next/image";

import backgroundImg from "@/src/assets/images/hello-pet/background.png";
import { meongiB } from "@/src/app/fonts";
import { useHelloPetContext } from "@/src/contexts/hello-pet";
import { useState } from "react";
import Button from "@/src/components/common/button/button";
import { useRouter } from "next/navigation";
import KakaoShareButton from "@/src/components/hello-pet/kakao-share-button";

export default function Step2() {
  const router = useRouter();

  const { result, resetHelloPet } = useHelloPetContext();

  const { title, image } = result ?? {};

  const [loaded, setLoaded] = useState(false);

  const handleClickRetry = () => {
    router.push("/hello-pet");
    resetHelloPet();
  };

  return (
    <div className="relative min-h-screen w-full overflow-y-auto flex flex-col gap-12 px-5 pt-8 pb-14.25">
      <Image
        src={backgroundImg}
        alt="background"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 flex h-full flex-col items-center gap-7">
        <span
          className={`${meongiB.className} text-modal-service text-center text-[#4073F0]`}
        >
          Hello Pet!
        </span>

        <div className="flex flex-col gap-15 items-center">
          <div className="flex flex-col gap-8 items-center">
            <p className="font-bold text-2xl leading-[130%] tracking-[-0.02em] text-[#4073F0]">
              <strong className="font-black">{title}</strong>와 닮았어요!
            </p>
            <div className="flex flex-col gap-6">
              <div className="relative h-95 w-76.75 rounded-lg border border-white shadow-[0px_0px_12px_0px_#00000033]">
                <Image
                  src={image as string}
                  alt={title as string}
                  fill
                  sizes="307px"
                  priority
                  className={[
                    "rounded-xl object-contain transition-opacity duration-200",
                    loaded ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  onLoad={() => setLoaded(true)}
                />
              </div>

              <p className="font-bold text-[14px] leading-[150%] tracking-[-0.03em] text-[#46484F] text-center">
                이미지를 꾹 눌러 저장해 보세요!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <KakaoShareButton />
          <Button
            className="w-full text-center items-center"
            onClick={handleClickRetry}
          >
            다시 해보기
          </Button>
        </div>
      </div>
    </div>
  );
}
