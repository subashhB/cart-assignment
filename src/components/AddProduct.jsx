import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    product.id = crypto.randomUUID();
    product.quantity = parseInt(product.quantity);
    console.log(product);
  };

  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow backspace or digits (0-9)
    if (!/[\d\b]/.test(keyValue)) {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={product.quantity}
        onKeyDown={ handleKeyPress }
        onChange={(e) => {
          setProduct({ ...product, quantity: e.target.value });
        }}
        placeholder="Stock"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
