import { useParams } from "react-router-dom"
import ProductForm from "../components/ProductForm"
import { useProductContext } from "../hooks/useProductContext";

const EditProductPage = () => {
    const { products } = useProductContext();
    let {id: productId} = useParams();
    console.log(productId);
    const product = products.find((product) => product.id === productId);
  return (
    <div>
        <ProductForm productToUpdate={product}/>
    </div>
  )
}

export default EditProductPage