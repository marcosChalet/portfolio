import { useState } from 'react';
import { BarContext } from './BarContext';

export default function BarProvider({ children }: { children: JSX.Element }) {
  const [section, setSection] = useState(0);

  return (
    <BarContext.Provider value={{ section, setSection }}>
      {children}
    </BarContext.Provider>
  );
}
