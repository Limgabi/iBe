import { useMemo, useState } from "react";

import { WhiteDayContext, WhiteDayContextValue } from "./white-day-context";

type WhiteDayProviderProps = {
  children: React.ReactNode;
};

export function WhiteDayProvider({ children }: WhiteDayProviderProps) {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");

  const value = useMemo<WhiteDayContextValue>(() => {
    return {
      sender,
      setSender,
      receiver,
      setReceiver,
    };
  }, [sender, receiver]);

  return (
    <WhiteDayContext.Provider value={value}>
      {children}
    </WhiteDayContext.Provider>
  );
}
