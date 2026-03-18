"use client";

import Button from "@/src/components/common/button/button";
import GiftCard from "@/src/components/white-day/gift-card";
import { Gift } from "@/src/components/white-day/step-5";
import { WHITE_DAY_RESULT_BY_MBTI } from "@/src/components/white-day/data/desserts";
import { toPng } from "html-to-image";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface GiftDetailViewProps {
  gift: Gift | null;
}

export default function GiftDetailView({ gift }: GiftDetailViewProps) {
  const router = useRouter();
  const captureCardRef = useRef<HTMLDivElement>(null);

  const [giftCardImageUrl, setGiftCardImageUrl] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const handleClickCreateNewGift = () => {
    router.push("/white-day");
  };

  useEffect(() => {
    if (!gift || !captureCardRef.current) return;

    let isMounted = true;

    const generateGiftCardImage = async () => {
      setGiftCardImageUrl(null);
      setIsGeneratingImage(true);

      try {
        await document.fonts.ready;
        await new Promise((resolve) => window.setTimeout(resolve, 200));

        const dataUrl = await toPng(captureCardRef.current as HTMLDivElement, {
          backgroundColor: "#FFFFFF",
          cacheBust: true,
          pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        });

        if (isMounted) {
          setGiftCardImageUrl(dataUrl);
        }
      } catch (error) {
        console.error("Failed to generate gift card image:", error);
        if (isMounted) {
          setGiftCardImageUrl(null);
        }
      } finally {
        if (isMounted) {
          setIsGeneratingImage(false);
        }
      }
    };

    void generateGiftCardImage();

    return () => {
      isMounted = false;
    };
  }, [gift]);

  if (!gift) return null;

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

        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.35 }}
        >
          {giftCardImageUrl ? (
            <div className="flex flex-col gap-6">
              <Image
                src={giftCardImageUrl}
                alt={`${gift.sender}님이 보낸 선물 카드`}
                className="w-full rounded-lg shadow-[0px_0px_12px_0px_#0000001A]"
                width={680}
                height={980}
                draggable={false}
                unoptimized
              />
              <p className="font-bold text-[14px] leading-[150%] tracking-[-0.03em] text-center text-[#B5644E]">
                이미지를 꾹 눌러 저장해 보세요!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <GiftCard gift={gift} />
              <p className="font-bold text-[14px] leading-[150%] tracking-[-0.03em] text-center text-[#B5644E]">
                {isGeneratingImage
                  ? "저장 가능한 이미지를 준비하고 있어요"
                  : "이미지 준비에 실패했어요. 잠시 후 다시 시도해 주세요"}
              </p>
            </div>
          )}
        </motion.div>
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

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-[-9999px] top-0 w-[340px] opacity-0"
      >
        <div ref={captureCardRef}>
          <GiftCard gift={gift} className="w-[340px]" />
        </div>
      </div>
    </motion.div>
  );
}
