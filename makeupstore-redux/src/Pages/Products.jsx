import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.jsx';
import { useDispatch } from 'react-redux';
import {store} from '../app/store.jsx';
import Product from '../Components/Product.jsx';
 export const Products = () =>{
    const dispatch = useDispatch();

    return(

       <div>
         <h1>redux version</h1>
        <Product />
        </div>
    )
}
export default Products