import { useState, useCallback } from 'react';
import { CursorContext } from '@/hooks/useCursor';

export default function CursorProvider({ children }: { children: React.ReactNode }) {
  const [isHovering, setIsHoveringState] = useState(false);

  const setIsHovering = useCallback((v: boolean) => {
    setIsHoveringState(v);
  }, []);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
}
