import { createContext, useReducer } from "react";

export const ProductContext = createContext();

export const productsReducer = (state, action) => {};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer({
    products: null,
  });
  return (
    <ProductContext.Provider value={{...state, dispatch}}>
        { children }
    </ProductContext.Provider>
  )
};
