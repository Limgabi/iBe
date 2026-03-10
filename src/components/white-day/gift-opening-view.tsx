import { motion } from "framer-motion";
import Image from "next/image";
import heartImg from "@/src/assets/images/white-day/heart.png";
import heart2Img from "@/src/assets/images/white-day/heart2.png";

export default function GiftOpeningView() {
  return (
    <div className="absolute inset-0 z-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 0.35, y: -30, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="absolute left-6 top-24"
        >
          <Image src={heart2Img} alt="heart2" width={96} height={96} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 0.25, y: -40, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute right-4 bottom-24"
        >
          <Image src={heartImg} alt="heart" width={110} height={110} />
        </motion.div>
      </div>

      <div className="relative flex h-full items-center justify-center -translate-y-6">
        <motion.div
          className="absolute bottom-40 h-37 w-76.75 rounded-[20px] shadow-[0_12px_32px_rgba(181,100,78,0.18)]"
          style={{
            background: "linear-gradient(180deg, #FEDBC1 0%, #FFEBD3 75%)",
          }}
          initial={{ scale: 0.92, y: 24, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
        />

        <motion.div
          className="relative z-10 flex h-53.5 w-[256px] flex-col justify-between rounded-[8.75px] bg-white p-5.25 pb-6.5 shadow-[0_20px_40px_rgba(181,100,78,0.16)]"
          initial={{ y: 100, rotate: 6, opacity: 0 }}
          animate={{ y: -36, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div
              className="h-3 w-39.25 rounded-full bg-[#FAE5CF]"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.72, duration: 0.28 }}
            />
            <motion.div
              className="h-3 w-47.5 rounded-full bg-[#FBE9D3]"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.86, duration: 0.28 }}
            />
            <motion.div
              className="h-3 w-47.5 rounded-full bg-[#FCF0DB]"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.28 }}
            />
          </div>

          <motion.p
            className="text-start text-[12px] font-semibold text-[#B5644E] leading-[160%]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.35 }}
          >
            마음이 담긴 편지를 꺼내는 중...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
