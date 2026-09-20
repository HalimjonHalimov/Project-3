import { createContext } from "react";
import { useContextGuard } from "../useContextGuard";

export const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContextGuard(ThemeContext, "useTheme");
};
