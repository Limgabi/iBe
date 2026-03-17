/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Button from "@/src/components/common/button/button";
import GiftCard from "@/src/components/white-day/gift-card";
import { Gift } from "@/src/components/white-day/step-5";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { WHITE_DAY_RESULT_BY_MBTI } from "@/src/components/white-day/data/desserts";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";

interface GiftDetailViewProps {
  gift: Gift | null;
}

export default function GiftDetailView({ gift }: GiftDetailViewProps) {
  const router = useRouter();

  const cardRef = useRef<HTMLDivElement>(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleClickCreateNewGift = () => {
    router.push("/white-day");
  };

  if (!gift) return;

  useEffect(() => {
    let isMounted = true;

    const convert = async () => {
      try {
        if (!cardRef.current) return;

        await document.fonts.ready;
        await new Promise((resolve) => setTimeout(resolve, 700));

        const dataUrl = await toPng(cardRef.current, {
          cacheBust: true,
          pixelRatio: 2,
        });

        if (isMounted) {
          setImageUrl(dataUrl);
        }
      } catch (error) {
        console.error("PNG 변환 실패", error);
      }
    };

    convert();

    return () => {
      isMounted = false;
    };
  }, [gift]);

  const giftResult = WHITE_DAY_RESULT_BY_MBTI[gift.mbti];
  const dessertType = giftResult?.title.split(" 타입")[0];

  const getEulReul = (word: string) => {
    const normalizedWord = word.trim();
    if (!normalizedWord) return "";

    const lastChar = normalizedWord.charCodeAt(normalizedWord.length - 1);
    const hasBatchim = (lastChar - 44032) % 28 !== 0;

    return hasBatchim ? "을" : "를";
  };

  return (
    <motion.div
      className="relative z-10 px-5 pb-14.25 flex flex-col gap-15 items-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E] pt-10">
          {gift.sender}님이
          <br />
          당신을 떠올리며
          <br />
          <span className="font-black text-[#E47F26]">{dessertType}</span>
          {getEulReul(dessertType)} 보냈어요
        </p>

        <div className="flex flex-col gap-6">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.35 }}
          >
            <div ref={cardRef}>
              {imageUrl ? (
                <img src={imageUrl} alt="선물 카드" className="w-full" />
              ) : (
                <GiftCard gift={gift} />
              )}
            </div>
          </motion.div>

          <p className="font-bold text-[14px] leading-[150%] tracking-[-0.03em] text-[#B5644E] text-center">
            이미지를 꾹 눌러 저장해보세요!
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.35 }}
      >
        <Button
          className="text-center items-center"
          onClick={handleClickCreateNewGift}
        >
          나도 편지 만들기
        </Button>
      </motion.div>
    </motion.div>
  );
}
