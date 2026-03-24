"use client";
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 *
 * This software is licensed under the Privy Public License.
 */

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface HighContrastContextType {
  isHighContrast: boolean;
  setIsHighContrast: (value: boolean) => void;
}

const HighContrastContext = createContext<HighContrastContextType>({
  isHighContrast: false,
  setIsHighContrast: () => { },
});

interface HighContrastProviderProps {
  children: ReactNode;
}

export function HighContrastProvider({ children }: HighContrastProviderProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [isHighContrast]);

  return (
    <HighContrastContext.Provider value={{ isHighContrast, setIsHighContrast }}>
      {children}
    </HighContrastContext.Provider>
  );
}

export function useHighContrast() {
  const context = useContext(HighContrastContext);
  if (context === undefined) {
    throw new Error(
      "useHighContrast must be used within a HighContrastProvider",
    );
  }
  return context;
}
