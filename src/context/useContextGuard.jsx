import { useContext } from "react";

export const useContextGuard = (context, hookName) => {
  const value = useContext(context);
  if (value === null) {
    throw new Error(`${hookName} must be used within a Provider`);
  }

  return value;
};
