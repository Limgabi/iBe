import { createContext, Dispatch, SetStateAction } from "react";

export type WhiteDayState = {
  sender: string;
  receiver: string;
};

export type WhiteDayActions = {
  setSender: Dispatch<SetStateAction<string>>;
  setReceiver: Dispatch<SetStateAction<string>>;
};

export type WhiteDayContextValue = WhiteDayState & WhiteDayActions;

export const WhiteDayContext = createContext<WhiteDayContextValue | null>(null);
