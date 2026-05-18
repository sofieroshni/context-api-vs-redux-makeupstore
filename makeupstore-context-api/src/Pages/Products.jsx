import React from "react";
import Data from '../Data.json';
import { useState } from "react";
import Product from "../Components/Product";
const Products = ()=> {
const [products,setProducts] = useState(Data.products)
    return (
        <div className='container justify-content-center align-items-center mt-5 '>
        <div className='row row-cols-1 row-cols-md-3 g-4 p-4 mt-3'>
            {
                products.map(p =>(
                    <Product  key={p.id} product={p} />
                ))
            }
        </div>
        </div>
    )
    
}
export default Products