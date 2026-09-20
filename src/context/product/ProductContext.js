import { useContextGuard } from "../useContextGuard";
import { createContext } from "react";

export const ProductContext = createContext(null);

export const useProduct = () => {
  return useContextGuard(ProductContext, "useProduct");
};
