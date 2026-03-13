import Button from "@/src/components/common/button/button";
import Icon from "@/src/components/common/icon/icon";
import Input from "@/src/components/common/input/input";
import { useWhiteDayContext } from "@/src/contexts/white-day";
import { useRouter } from "next/navigation";

export default function Step1() {
  const router = useRouter();

  const { sender, receiver, setSender, setReceiver } = useWhiteDayContext();

  const handleClickNext = () => {
    router.push("/white-day/gift/new?step=2");
  };

  return (
    <div className="flex flex-col justify-between items-center flex-1 min-h-0 overflow-y-auto scrollbar-hide">
      <div className="flex flex-col gap-12 w-full">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          누구에게
          <br />
          편지를 보내고 싶으신가요?
        </p>

        <div className="flex flex-col gap-6">
          <Input
            label="보내는 사람"
            placeholder="이름"
            value={sender}
            onChange={setSender}
            labelColor="text-[#B5644E]"
            theme="white-day"
          />
          <Input
            label="받는 사람"
            placeholder="이름"
            value={receiver}
            onChange={setReceiver}
            labelColor="text-[#B5644E]"
            theme="white-day"
          />
        </div>
      </div>

      <Button
        icon={<Icon name="arrowRight" width={16} height={16} />}
        onClick={handleClickNext}
        theme="white-day"
        disabled={!sender || !receiver}
      >
        다음으로
      </Button>
    </div>
  );
}
