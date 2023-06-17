import { useContext } from "react"
import { CartContext } from "../context/cartContext"

export const useCartContext = ()=>{
    const context = useContext(CartContext);
    if(!context){
        throw Error("useCartContext must be inside CartContextProvider!")
    }
    return context
}