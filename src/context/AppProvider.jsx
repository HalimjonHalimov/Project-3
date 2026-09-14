import { ThemeProvider } from "./theme/ThemeProvider";
import { ProductProvider } from "./product/ProductProvider";

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <ProductProvider>{children}</ProductProvider>
    </ThemeProvider>
  );
};
