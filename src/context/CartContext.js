import { createContext, useReducer } from "react";

import * as CartActionTypes from "./CartActionTypes";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const alreadyExists = state.cartItems.find((item)=> item.product.id === action.payload.product.id)
      if(alreadyExists){
        return {
          cartItems: state.cartItems.map((item)=> item.product.id === action.payload.product.id ? {...item, quantity: item.quantity++} : item )
        }
      }
        return {
            cartItems: [...state.cartItems, action.payload]
        }
    case CartActionTypes.COMPLETE_ORDER:
        return{
            cartItems: []
        }
    case CartActionTypes.INCREASE_QUANTITY:
        return{
            cartItems: state.cartItems.map((cartItem)=> cartItem.product.id === action.payload.product.id ? { ...cartItem, quantity: cartItem.quantity+1  }: cartItem )
        }
    case CartActionTypes.DECREASE_QUANTITY:
        return {
            cartItems: state.cartItems.map((cartItem) => cartItem.product.id === action.payload.product.id ? {...cartItem, quantity: cartItem.quantity-1}: cartItem )
        }
    case CartActionTypes.REMOVE_ITEM:
      return{
        cartItems: state.cartItems.filter((item)=> item.product.id !== action.payload.product.id)
      }
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      { children }
    </CartContext.Provider>
  );
};
