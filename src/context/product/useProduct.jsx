import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must bu used with in ProductProvider");
  }
  return context;
};
