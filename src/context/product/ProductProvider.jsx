import { useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";

const initialState = {
  products: [],
  cart: [],
  totalPrice: 0,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, products: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    case "SET_LOADING":
      return { ...state, loading: payload };
    case "ADD_CART": {
      const isInclude = state.cart.some((item) => item.id === payload);
      if (isInclude) {
        const updatedCart = state.cart.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item,
        );
        return { ...state, cart: updatedCart };
      }
      const product = state.products.find((item) => item.id === payload);
      const cartProduct = { ...product, quantity: 1 };
      return { ...state, cart: [...state.cart, cartProduct] };
    }
    case "REMOVE_CART": {
      const isInclude = state.cart.some((item) => item.id === payload);
      if (isInclude) {
        const updatedCart = state.cart
          .map((item) =>
            item.id === payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity >= 1);
        return { ...state, cart: updatedCart };
      }
      return state;
    }
    case "GET_TOTAL_PRICE": {
      const total = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      return { ...state, totalPrice: total };
    }
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const response = await fetch(
          "https://jsonfakery.com/products/random/10",
        );
        const data = await response.json();
        dispatch({ type: "GET_PRODUCTS", payload: data });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };
    fetchingData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_PRICE" });
  }, [state.cart]);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
