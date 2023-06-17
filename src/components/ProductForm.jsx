import { useEffect, useState } from "react";
import { useProductContext } from "../hooks/useProductContext";
import * as ActionTypes from "../context/actionTypes";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ productToUpdate }) => {
  const navigate = useNavigate();
  const { dispatch } = useProductContext();
  const initialState = {
    id: "",
    productName: "",
    stock: "",
  };

  const [product, setProduct] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    product.id = crypto.randomUUID();
    product.stock = parseInt(product.stock);
    dispatch({ type: ActionTypes.CREATE_PRODUCT, payload: product });
    setProduct(initialState);
    navigate('/');
  };

  const handleEdit = (e)=>{
    e.preventDefault();
    product.stock = parseInt(product.stock);
    console.log(product);
    dispatch({ type: ActionTypes.EDIT_PRODUCT, payload: product });
    navigate('/')
  }

  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow backspace or digits (0-9)
    if (!/[\d\b]/.test(keyValue)) {
      event.preventDefault();
    }
  };

  useEffect(()=>{
    if(productToUpdate){
      setProduct(productToUpdate);
    }
  },[productToUpdate])

  return (
    <form onSubmit={productToUpdate? handleEdit: handleSubmit}>
      <input
        type="text"
        value={product.productName}
        onChange={(e) => {
          setProduct({ ...product, productName: e.target.value });
        }}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        value={product.stock}
        onKeyDown={handleKeyPress}
        onChange={(e) => {
          setProduct({ ...product, stock: e.target.value });
        }}
        placeholder="Stock"
        required
      />
      <button type="submit">{ productToUpdate? 'Edit': 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
