import React from 'react';
const Product = ({product}  ) =>{
    return(
        <div>
            <div className ="card cols-1" >
  <img src="{product.thumbnail}" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    )
}
export default Product;