import ProductCard from "../components/ProductCard";

import { Link } from "react-router-dom";
import { useProductContext } from "../hooks/useProductContext";
import { useState } from "react";

const Filter = (props) => {
  const { searchText, setSearchText, sort, setSort } = props;
  console.log(searchText, sort);
  return (
    <div className="filterBar">
      <input
        type="text"
        value={searchText}
        placeholder="Search for Product"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <select
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="" disabled>
          Price Sort
        </option>
        <option value="htl">High to Low</option>
        <option value="lth">Low to High</option>
      </select>
    </div>
  );
};

const ProductCardList = ({ products, searchText, sort }) => {
  let filteredProducts = [...products];
  if (searchText) {
    filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  if (sort) {
    filteredProducts.sort((a, b) => {
      if (sort === "htl") {
        return -a.price + b.price;
      } else if (sort === "lth") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className="product-list" style={{ display: "flex" }}>
      {filteredProducts
        ? filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
};

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("");
  const { products } = useProductContext();
  return (
    <div>
      <Link to="/productlist" className="product-list-link">
        Product List
      </Link>
      <Filter
        searchText={searchText}
        setSearchText={setSearchText}
        sort={sort}
        setSort={setSort}
      />
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
      <ProductCardList
        products={products}
        searchText={searchText}
        sort={sort}
      />
    </div>
  );
};

export default Home;
