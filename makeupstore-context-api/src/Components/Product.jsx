import React, { useContext, dispatch } from 'react';
import {CartContext} from "../Features/ContextProvider.jsx"
import { Link } from "react-router-dom";
const Product = ({product}  ) =>{
    const {cart, dispatch} = useContext(CartContext);
    return(
        <div style={{ zIndex:"1000"}} >
            <div className ="card justify-content-center text-align-center" >
<img
  src={product.thumbnail}
  alt={product.title}
  style={{
    width: "100%",
    objectFit: "cover"
  }}
/>  <div className="card-body">
      <p className='text-secondary'>{product.category}</p>

    <h5 className="card-title text-dark">{product.price}</h5>
    <p className="card-text">{product.description}</p>
        <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add To Cart
          </button>
  </div>
  <div>
  </div>
</div>

        </div>
    )
}
export default Product;