import { createContext, useContext, type ParentProps } from "solid-js";
import { Dutkyo, type DutkyoOptions } from "./dutkyo";

interface DutkyoContext {
  dutkyo: Dutkyo;
}

export const DutkyoContext = createContext<DutkyoContext>();

export function DutkyoProvider(props: ParentProps<{ options: DutkyoOptions }>) {
  const dutkyo = new Dutkyo(props.options);

  return (
    <DutkyoContext.Provider value={{ dutkyo }}>
      {props.children}
    </DutkyoContext.Provider>
  );
}

export function useDutkyo() {
  return useContext(DutkyoContext)!;
}
