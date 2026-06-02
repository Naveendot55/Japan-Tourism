import { createContext, useContext } from 'react';

interface CursorContextType {
  isHovering: boolean;
  setIsHovering: (v: boolean) => void;
}

export const CursorContext = createContext<CursorContextType>({
  isHovering: false,
  setIsHovering: () => {},
});

export function useCursor() {
  return useContext(CursorContext);
}
