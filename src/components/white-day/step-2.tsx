import Icon from "@/src/components/common/icon/icon";
import LoadingDots from "@/src/components/common/loading/loading-dots";
import {
  DESSERT_ICONS,
  WHITE_DAY_KEYS,
  WHITE_DAY_OPTIONS,
} from "@/src/components/white-day/constants";
import { useWhiteDayContext } from "@/src/contexts/white-day";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type DessertIcon = (typeof DESSERT_ICONS)[number];
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

export default function Step2() {
  const router = useRouter();
  const { receiver, selections, setSelection } = useWhiteDayContext();

  const [isLoading, setIsLoading] = useState(false);
  const [emoji, setEmoji] = useState<DessertIcon>("🧁");

  const timersRef = useRef<{ intervalId?: number; timeoutId?: number }>({});

  const handleClickNext = () => {
    if (isLoading) return;

    setIsLoading(true);

    const seq = pickUnique(DESSERT_ICONS, 5);
    setEmoji(seq[0]);

    let idx = 0;
    const intervalId = window.setInterval(() => {
      idx = Math.min(idx + 1, 4);
      setEmoji(seq[idx]);
    }, 1000);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      router.push("/white-day/gift/new?step=3");
    }, 5000);

    timersRef.current = { intervalId, timeoutId };
  };

  useEffect(() => {
    return () => {
      if (timersRef.current.intervalId)
        window.clearInterval(timersRef.current.intervalId);
      if (timersRef.current.timeoutId)
        window.clearTimeout(timersRef.current.timeoutId);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-8 items-center flex-1 h-full min-h-0 justify-center">
          <div className="flex flex-col gap-5 items-center">
            <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
              [{receiver}]님과
              <br />
              어울리는 디저트 고르는 중
            </p>
            <LoadingDots background="#B5644E" />
          </div>

          <div className="text-[200px]">{emoji}</div>
        </div>
      ) : (
        <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15">
          <div className="flex flex-col gap-12 w-full">
            <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
              [{receiver}]님의
              <br />
              성격을 선택해 주세요
            </p>

            <div className="flex flex-col gap-8">
              {WHITE_DAY_KEYS.map((key) => {
                const group = WHITE_DAY_OPTIONS[key];

                return (
                  <div
                    key={key}
                    className="flex flex-col gap-3 font-semibold text-sm leading-[160%] text-[#B5644E]"
                  >
                    <label>{group.title}</label>

                    <div className="flex justify-between gap-3">
                      {group.options.map((opt) => {
                        const selected = selections[key] === opt.value;

                        return (
                          <button
                            key={opt.value}
                            className={[
                              "w-[50%] py-2 rounded-4xl border outline-none cursor-pointer",
                              selected
                                ? "bg-[#F8DCC4] border-[#B5644E]"
                                : "border-[#F8DCC4] bg-[#FFFDF6]",
                            ].join(" ")}
                            onClick={() => setSelection(key, opt.value)}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="flex w-fit items-center gap-1 rounded-[365px] bg-[#B5644E] px-6 py-3 text-button text-white"
            onClick={handleClickNext}
          >
            <span>다음으로</span>
            <Icon name="arrowRight" width={16} height={16} />
          </button>
        </div>
      )}
    </>
  );
}
