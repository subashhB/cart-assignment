import { createContext, useReducer } from "react";

import * as CartActionTypes from "./CartActionTypes";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
        return {
            cartItems: [...state.cartItems, action.payload]
        }
    case CartActionTypes.COMPLETE_ORDER:
        return{
            cartItems: []
        }
    case CartActionTypes.INCREASE_QUANTITY:
        return{
            cartItems: state.cartItems.map((cartItem)=> cartItem.product.id === action.payload.product.id && cartItem.quantity++)
        }
    case CartActionTypes.DECREASE_QUANTITY:
        return {
            cartItems: state.cartItems.map((cartItem) => cartItem.product.id === action.payload.product.id && cartItem.quantity-- )
        }
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: null,
  });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
