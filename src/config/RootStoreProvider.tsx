import { ReactNode, createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

import rootStore, { RootStore } from "../stores";

const StoreContext = createContext<RootStore | undefined>(undefined);

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const root = useLocalObservable(() => rootStore);
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

export function useStores() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider")
  }
  return context
}