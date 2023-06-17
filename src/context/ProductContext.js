import { createContext, useReducer } from "react";
import * as actionTypes from "./actionTypes";

export const ProductContext = createContext();

export const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        products: action.payload,
      };
    case actionTypes.CREATE_PRODUCT:
      return { products: [...state.products, action.payload]};
    case actionTypes.DELETE_PRODUCT:
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: [],
  });
  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
