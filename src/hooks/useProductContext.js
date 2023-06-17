import { useContext } from "react"
import { ProductContext } from "../context/ProductContext";

export const useProductContext = () => {
    const context = useContext(ProductContext);
  if(!context) {
    throw Error("useProductContext must be inside ProductContextProvider!")
  }

  return context;
}

