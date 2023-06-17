const ProductCard = ({ product }) => {
  const { productName, quantity} = product;
  const handleAddToCart = ()=>{

  }
  return (
    <div className="product-card">
      <h3>
        { productName }
      </h3>
      <p>Quantity: { quantity }</p>
      <button onClick={ handleAddToCart }>Add To Card</button>
    </div>
  )
}

export default ProductCard