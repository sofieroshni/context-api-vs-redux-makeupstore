import React from "react";
import Data from '../../Data.json';
import { useState } from "react";
const Products = ()=> {
    const [products,setProducts] = useState(Data.Products);
    return (
        <div></div>
    )
}
export default Products