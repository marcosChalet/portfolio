import { createContext } from 'react';

type BarType = {
  section: number;
  setSection: (n: number) => void;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const BarContext = createContext<BarType>(null!);
