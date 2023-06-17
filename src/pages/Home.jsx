import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

import * as ActionTypes from "../context/actionTypes";

import { useProductContext } from "../hooks/useProductContext";
import { Link } from "react-router-dom";

const ProductCardList = ({ products }) => {
  return (
    <div className="product-list" style={{display: 'flex'}}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const Home = () => {
  const { products } = useProductContext();
  console.log(products);
  return (
    <div>
      <div  className="product-list-link">
        <Link to='/productlist' >Product List</Link>
      </div>
      <Link to="/addproduct">
        <button
          style={{
            maxWidth: "150px",
            display: "block",
            margin: "30px 30px 10px auto",
          }}
        >
          Add Product
        </button>
      </Link>
      <ProductCardList products={products} />
    </div>
  );
};

export default Home;
