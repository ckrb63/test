import { create } from "zustand";

interface State {
  example: string;
}

export const useSampleStore = create<State>(() => {
  return { example: "123" };
});
