"use client";

import { useTheme } from "next-themes";

export const CurrentTheme = () => {
  const { theme } = useTheme();
  return theme;
};

// import { createContext, useContext } from "react";

// export const ThemeContext = createContext();
// export function useTheme() {
//   return useContext(ThemeContext);
// }
