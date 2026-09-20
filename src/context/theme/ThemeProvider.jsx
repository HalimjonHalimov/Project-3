import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
