import Button from "@/src/components/common/button/button";
import Icon from "@/src/components/common/icon/icon";
import { useHelloPetContext } from "@/src/contexts/hello-pet";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { motion } from "framer-motion";
import LoadingDots from "@/src/components/common/loading/loading-dots";
import {
  HELLO_PET_KEYS,
  HELLO_PET_OPTIONS,
} from "@/src/components/hello-pet/data/hello-pet-options";
import RadioGroup from "@/src/components/common/radio-group/radio-group";
import {
  HELLO_PET_RESULT_BY_MBTI,
  PET_IMAGES,
} from "@/src/components/hello-pet/data/pets";
import { getMbtiFromSelections } from "@/src/components/hello-pet/get-mbti-from-selections";
import Image from "next/image";

type PetImage = (typeof PET_IMAGES)[number];

const pickUnique = <T,>(arr: readonly T[], count: number) => {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < Math.min(count, copy.length)) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return out;
};

export default function Step1() {
  const router = useRouter();

  const { selections, setSelection, setMbtiResult } = useHelloPetContext();

  const allSelected = HELLO_PET_KEYS.every((k) => selections[k] != null);

  const [isLoading, setIsLoading] = useState(false);
  const [petImage, setPetImage] = useState<PetImage>(PET_IMAGES[0]);

  const timersRef = useRef<{ intervalId?: number; timeoutId?: number }>({});

  const handleClickNext = () => {
    if (isLoading) return;
    if (!allSelected) return;

    // mbti 및 결과 저장
    const mbti = getMbtiFromSelections(selections);
    if (!mbti) return;

    const res = HELLO_PET_RESULT_BY_MBTI[mbti];
    setMbtiResult(mbti, res);

    setIsLoading(true);
    const seq = pickUnique(PET_IMAGES, 5);
    setPetImage(seq[0]);

    let idx = 0;
    const intervalId = window.setInterval(() => {
      idx = Math.min(idx + 1, 4);
      setPetImage(seq[idx]);
    }, 1000);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      router.push("/hello-pet/new?step=2");
    }, 5000);
    timersRef.current = { intervalId, timeoutId };
  };

  return (
    <>
      {isLoading ? (
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-8 items-center flex-1 h-full min-h-0 justify-center overflow-y-auto scrollbar-hide"
        >
          <div className="flex flex-col gap-5 items-center">
            <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#4073F0]">
              닮은 동물 고르는 중
            </p>
            <LoadingDots background="#4073F0" />
          </div>

          <Image
            src={petImage.src}
            alt="동물 이미지"
            width={280}
            height={280}
            className="w-70 h-70 object-contain"
            priority
          />
        </motion.div>
      ) : (
        <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-12 w-full">
            <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#4073F0]">
              더 가까운 쪽을
              <br />
              골라보세요
            </p>

            <div className="flex flex-col gap-8">
              {HELLO_PET_KEYS.map((key) => {
                const group = HELLO_PET_OPTIONS[key];

                return (
                  <RadioGroup
                    key={group.title}
                    label={group.title}
                    options={group.options}
                    value={selections[key]}
                    onChange={(v) => setSelection(key, v)}
                  />
                );
              })}
            </div>
          </div>

          <Button
            icon={
              <Icon name="arrowRight" width={16} height={16} color="#FFFFFF" />
            }
            onClick={handleClickNext}
            disabled={!allSelected}
          >
            다음으로
          </Button>
        </div>
      )}
    </>
  );
}
