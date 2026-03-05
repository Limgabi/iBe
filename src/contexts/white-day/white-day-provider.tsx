import { useMemo, useState } from "react";

import {
  WhiteDayActions,
  WhiteDayContext,
  WhiteDayContextValue,
  WhiteDaySelections,
} from "./white-day-context";

type WhiteDayProviderProps = {
  children: React.ReactNode;
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

  const setSelection: WhiteDayActions["setSelection"] = (key, value) => {
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

  const value = useMemo<WhiteDayContextValue>(() => {
    return {
      sender,
      setSender,

      receiver,
      setReceiver,

      selections,
      setSelection,
      resetSelections,
    };
  }, [sender, receiver, selections]);

  return (
    <WhiteDayContext.Provider value={value}>
      {children}
    </WhiteDayContext.Provider>
  );
}
