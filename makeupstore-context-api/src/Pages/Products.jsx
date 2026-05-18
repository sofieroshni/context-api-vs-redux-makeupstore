import React from "react";
import Data from '../Data.json';
import { useState } from "react";
import Product from "../Components/Product";
const Products = ()=> {
const [products,setProducts] = useState(Data.products)
    return (
        <div className='row row-cols-1 row-cols-md-4 g-4 p-4'>
            {
                products.map(p =>(
                    <Product  key={p.id} product={p} />
                ))
            }
        </div>
    )
}
export default Products