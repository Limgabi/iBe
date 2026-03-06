import { useWhiteDayContext } from "@/src/contexts/white-day";
import { useRouter } from "next/navigation";
import Button from "../common/button/button";
import Icon from "../common/icon/icon";
import { useState } from "react";
import Textarea from "../common/textarea/textarea";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

type Tone = "formal" | "fun";

export default function Step4() {
  const router = useRouter();

  const { sender, receiver, result, setLetter } = useWhiteDayContext();

  const [selectedTone, setSelectedTone] = useState<Tone | null>(null);
  const [letterText, setLetterText] = useState("");

  const recommend = [
    { tone: "formal" as const, text: result?.formal ?? "" },
    { tone: "fun" as const, text: result?.fun ?? "" },
  ].filter((x) => x.text);

  const handleClickNext = async () => {
    setLetter(letterText);

    const dessertType = result?.title?.split(" ")?.[0] ?? "";

    await addDoc(collection(db, "gifts"), {
      sender,
      receiver,
      emoji: result?.emoji ?? "",
      title: `당신은 ${dessertType} 타입 ${result?.emoji ?? ""}`,
      letter: letterText,
    });

    router.push("/white-day/gift/new?step=5");
  };

  return (
    <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15 overflow-y-auto">
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          [{receiver}]님에게
          <br />
          특별한 편지를 작성해 주세요
        </p>

        <div className="flex flex-col gap-6 w-full text-sm text-[#B5644E]">
          <div className="flex flex-col gap-2">
            <label className="font-semibold leading-[160%]">
              추천 문구(선택하면 자동으로 입력돼요)
            </label>
            {recommend.map(({ tone, text }) => {
              const selected = selectedTone === tone;

              return (
                <button
                  key={tone}
                  type="button"
                  onClick={() => {
                    setSelectedTone(tone);
                    setLetterText(text);
                  }}
                  className={[
                    "py-3 px-4 rounded-md text-left border  leading-[150%] cursor-pointer",
                    selected
                      ? "font-bold bg-[#F8DCC4] border-[#B5644E]"
                      : "font-medium bg-[#FFFFFF] border-[#F8DCC4]",
                  ].join(" ")}
                >
                  {text}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold leading-[160%]">편지 내용</label>
            <Textarea
              theme="white-day"
              value={letterText}
              onChange={setLetterText}
              placeholder="편지를 작성해 주세요."
              className="h-46"
            />
          </div>
        </div>
      </div>

      <Button
        text="만들어진 선물 확인하기"
        icon={<Icon name="arrowRight" width={16} height={16} />}
        onClick={handleClickNext}
        theme="white-day"
        disabled={!letterText}
      />
    </div>
  );
}
