import * as CartActionTypes from "../context/CartActionTypes";
import { useCartContext } from "../hooks/useCartContext";

const ProductCard = ({ product }) => {
  const { dispatch} = useCartContext();
  const { productName, quantity: stock} = product;
  const handleAddToCart = ()=>{
    const cartItem = {
      product,
      quantity: 1
    }
    dispatch({type: CartActionTypes.ADD_TO_CART, payload: cartItem})
  }
  return (
    <div className="product-card">
      <h3>
        { productName }
      </h3>
      <p>Stock: { stock }</p>
      <button onClick={ handleAddToCart }>Add To Card</button>
    </div>
  )
}

export default ProductCard