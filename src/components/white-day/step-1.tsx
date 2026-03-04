import Icon from "@/src/components/common/icon/icon";
import Input from "@/src/components/common/input/input";
import Link from "next/link";
import { useState } from "react";

export default function Step1() {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");

  return (
    <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0">
      <div className="flex flex-col gap-12 w-full">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          누구에게
          <br />
          선물을 보내고 싶으신가요?
        </p>

        <div className="flex flex-col gap-6">
          <Input
            label="보내는 사람"
            placeholder="이름"
            value={sender}
            onChange={setSender}
            labelColor="text-[#B5644E]"
          />
          <Input
            label="받는 사람"
            placeholder="이름"
            value={receiver}
            onChange={setReceiver}
            labelColor="text-[#B5644E]"
          />
        </div>
      </div>

      <Link
        href="/white-day/gift/new?step=2"
        className="flex w-fit items-center gap-1 rounded-[365px] bg-[#B5644E] px-6 py-3 text-button text-white"
      >
        <span>다음으로</span>
        <Icon name="arrowRight" width={16} height={16} />
      </Link>
    </div>
  );
}
