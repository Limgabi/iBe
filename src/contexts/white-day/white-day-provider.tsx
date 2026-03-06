import { useCallback, useMemo, useState } from "react";

import {
  MBTI,
  WhiteDayActions,
  WhiteDayContext,
  WhiteDayContextValue,
  WhiteDayResult,
  WhiteDaySelections,
} from "./white-day-context";

type WhiteDayProviderProps = {
  children: React.ReactNode;
};

const initialSelections: WhiteDaySelections = {
  dessertMode: null,
  dessertTaste: null,
  dessertComment: null,
  giftStyle: null,
};

export function WhiteDayProvider({ children }: WhiteDayProviderProps) {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [selections, setSelections] = useState<WhiteDaySelections>({
    dessertMode: null,
    dessertTaste: null,
    dessertComment: null,
    giftStyle: null,
  });
  const [mbti, setMbti] = useState<MBTI | null>(null);
  const [result, setResult] = useState<WhiteDayResult | null>(null);
  const [letter, setLetter] = useState("");

  const setSelection: WhiteDayActions["setSelection"] = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const setMbtiResult = (mbti: MBTI, result: WhiteDayResult) => {
    setMbti(mbti);
    setResult(result);
  };

  const resetWhiteDay = useCallback(() => {
    setSender("");
    setReceiver("");
    setSelections(initialSelections);
    setMbti(null);
    setResult(null);
    setLetter("");
  }, []);

  const value = useMemo<WhiteDayContextValue>(() => {
    return {
      sender,
      setSender,

      receiver,
      setReceiver,

      selections,
      setSelection,

      mbti,
      result,
      setMbtiResult,

      letter,
      setLetter,

      resetWhiteDay,
    };
  }, [sender, receiver, selections, mbti, result, letter, resetWhiteDay]);

  return (
    <WhiteDayContext.Provider value={value}>
      {children}
    </WhiteDayContext.Provider>
  );
}
