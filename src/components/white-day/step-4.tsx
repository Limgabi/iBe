import { useWhiteDayContext } from "@/src/contexts/white-day";
import { useRouter } from "next/navigation";
import Button from "../common/button/button";
import Icon from "../common/icon/icon";
import { useCallback, useMemo, useState } from "react";
import Textarea from "../common/textarea/textarea";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import debounce from "@/src/utils/debounce";

export default function Step4() {
  const router = useRouter();

  const { sender, receiver, result, setLetter, mbti } = useWhiteDayContext();

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [letterText, setLetterText] = useState("");

  const handleClickNext = useCallback(async () => {
    setLetter(letterText);

    const docRef = await addDoc(collection(db, "gifts"), {
      sender,
      receiver,
      mbti: mbti,
      letter: letterText,
    });

    router.push(`/white-day/gift/new?step=5&giftId=${docRef.id}`);
  }, [setLetter, letterText, sender, receiver, mbti, router]);

  const debouncedCreate = useMemo(
    () =>
      debounce(() => {
        void handleClickNext();
      }, 600),
    [handleClickNext],
  );

  return (
    <div className="flex flex-col justify-between items-center flex-1 h-full min-h-0 gap-15 overflow-y-auto scrollbar-hide">
      <div className="flex flex-col gap-12 w-full items-center">
        <p className="text-2xl text-center font-bold leading-[130%] tracking-[-0.02em] text-[#B5644E]">
          {receiver}님에게
          <br />
          특별한 편지를 작성해 주세요
        </p>

        <div className="flex flex-col gap-6 w-full text-sm text-[#B5644E]">
          <div className="flex flex-col gap-2">
            <label className="font-semibold leading-[160%]">
              좋아하는 말(선택하면 자동으로 입력돼요)
            </label>
            {result?.recommendedPhrases.map((text, idx) => {
              const selected = selectedIdx === idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedIdx(idx);
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
        text="편지 만들기"
        icon={<Icon name="arrowRight" width={16} height={16} />}
        onClick={debouncedCreate}
        disabled={!letterText}
        theme="white-day"
      />
    </div>
  );
}
