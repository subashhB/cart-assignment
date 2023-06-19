import * as CartActionTypes from "../context/CartActionTypes";
import { useCartContext } from "../hooks/useCartContext";

const ProductCard = ({ product }) => {
  const { dispatch} = useCartContext();
  const { productName, stock, price} = product;
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
      <h5>Price(per Piece): { price }</h5>
      <p>Stock: { stock }</p>
      <button onClick={ handleAddToCart }>Add To Card</button>
    </div>
  )
}

export default ProductCard