import Button from "@/src/components/common/button/button";
import GiftCard from "@/src/components/white-day/gift-card";
import { Gift } from "@/src/components/white-day/step-5";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface GiftDetailViewProps {
  gift: Gift | null;
}

export default function GiftDetailView({ gift }: GiftDetailViewProps) {
  const router = useRouter();

  const handleClickCreateNewGift = () => {
    router.push("/white-day");
  };

  if (!gift) return;

  return (
    <motion.div
      className="relative z-10 px-5 pb-14.25 flex flex-col gap-15 items-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E] pt-10">
          {gift.sender}님의
          <br />
          마음을 담은
          <br />
          선물이 준비되었어요!
        </p>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.35 }}
        >
          <GiftCard gift={gift} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.35 }}
      >
        <Button
          theme="white-day"
          text="나도 선물 만들기"
          className="text-center items-center"
          onClick={handleClickCreateNewGift}
        />
      </motion.div>
    </motion.div>
  );
}
