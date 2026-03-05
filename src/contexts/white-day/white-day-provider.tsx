import { useMemo, useState } from 'react';

import {
  MBTI,
  WhiteDayActions,
  WhiteDayContext,
  WhiteDayContextValue,
  WhiteDayResult,
  WhiteDaySelections,
} from './white-day-context';

type WhiteDayProviderProps = {
  children: React.ReactNode;
};

export function WhiteDayProvider({ children }: WhiteDayProviderProps) {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [selections, setSelections] = useState<WhiteDaySelections>({
    dessertMode: null,
    dessertTaste: null,
    dessertComment: null,
    giftStyle: null,
  });
  const [mbti, setMbti] = useState<MBTI | null>(null);
  const [result, setResult] = useState<WhiteDayResult | null>(null);

  const setSelection: WhiteDayActions['setSelection'] = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const resetSelections = () => {
    setSelections({
      dessertMode: null,
      dessertTaste: null,
      dessertComment: null,
      giftStyle: null,
    });
  };

  const setMbtiResult = (mbti: MBTI, result: WhiteDayResult) => {
    setMbti(mbti);
    setResult(result);
  };

  const resetResult = () => {
    setMbti(null);
    setResult(null);
  };

  const value = useMemo<WhiteDayContextValue>(() => {
    return {
      sender,
      setSender,

      receiver,
      setReceiver,

      selections,
      setSelection,
      resetSelections,

      mbti,
      result,
      setMbtiResult,
      resetResult,
    };
  }, [sender, receiver, selections, mbti, result]);

  return (
    <WhiteDayContext.Provider value={value}>{children}</WhiteDayContext.Provider>
  );
}
