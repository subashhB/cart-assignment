import { useCartContext } from "../hooks/useCartContext";
import * as CartActionTypes from "../context/CartActionTypes";

const CartItems = ({ cartItems, dispatch }) => {
  let grandTotal = 0;
  if (cartItems.length > 0) {
    grandTotal = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }

  const handleDecrease = (cartItem) => {
    if (cartItem.quantity === 1) {
      dispatch({ type: CartActionTypes.REMOVE_ITEM, payload: cartItem });
    } else {
      dispatch({ type: CartActionTypes.DECREASE_QUANTITY, payload: cartItem });
    }
  };

  const handleIncrease = (cartItem) => {
    dispatch({ type: CartActionTypes.INCREASE_QUANTITY, payload: cartItem });
  };

  const handleRemove = (cartItem)=>{
    dispatch({type: CartActionTypes.REMOVE_ITEM, payload: cartItem});
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Product Name</th>
            <th>Price(per Piece)</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        {cartItems && (
          <tbody>
            {cartItems.map((cartItem, i) => (
              <tr key={cartItem.product.id}>
                <td>{i + 1}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.price}</td>
                <td>
                  <span className="cart-ops" onClick={() => handleDecrease(cartItem)}>
                    -
                  </span>
                  {cartItem.quantity}
                  <span className="cart-ops" onClick={() => handleIncrease(cartItem)}>
                    +
                  </span>
                </td>
                <td>{cartItem.product.price * cartItem.quantity} <button onClick={()=>{handleRemove(cartItem)}}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <div style={{ margin: "20px" }}>
        <h3>Grand Total: </h3>
        {grandTotal}
      </div>
    </>
  );
};

const CartPage = () => {
  const { cartItems, dispatch } = useCartContext();
  console.log(cartItems);
  return (
    <div>
      <CartItems cartItems={cartItems} dispatch={dispatch} />
    </div>
  );
};

export default CartPage;
