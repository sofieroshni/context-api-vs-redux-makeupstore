import React from 'react';
const Product = ({product}  ) =>{
    return(
        <div>
            <div className ="card h-100 w-100" >
<img
  src={product.thumbnail}
  alt={product.title}
  style={{
    width: "100%",
    objectFit: "cover"
  }}
/>  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </div>
    )
}
export default Product;