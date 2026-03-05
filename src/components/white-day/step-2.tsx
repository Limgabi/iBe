import Icon from "@/src/components/common/icon/icon";
import {
  WHITE_DAY_KEYS,
  WHITE_DAY_OPTIONS,
} from "@/src/components/white-day/constants";
import { useWhiteDayContext } from "@/src/contexts/white-day";
import Link from "next/link";

export default function Step2() {
  const { receiver, selections, setSelection } = useWhiteDayContext();

  return (
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

      <Link
        href="/white-day/gift/new?step=3"
        className="flex w-fit items-center gap-1 rounded-[365px] bg-[#B5644E] px-6 py-3 text-button text-white"
      >
        <span>다음으로</span>
        <Icon name="arrowRight" width={16} height={16} />
      </Link>
    </div>
  );
}
