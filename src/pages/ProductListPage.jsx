import { useProductContext } from "../hooks/useProductContext"

import * as ActionTypes from "../context/actionTypes";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const {products, dispatch} = useProductContext();

  const handleDelete = () =>{

  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        { products &&(
          <tbody>
            { products.map((product)=>(
              <tr key={product.id}>
                <td>{ product.id }</td>
                <td>{ product.productName }</td>
                <td>{ product.quantity }</td>
                <td> <p className="delete-btn" onClick={ ()=>{dispatch({type: ActionTypes.DELETE_PRODUCT, payload: product })} }>Delete</p>|<p className="edit-btn"><Link to={`/editproduct/${product.id}`} className="edit-btn">Edit</Link></p></td>
              </tr>
            )) }
          </tbody>
        ) }
      </table>
    </div>
  )
}

export default ProductListPage