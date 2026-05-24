import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
// import './index.css';
import {store} from '../app/store.jsx';
import product from '../Data.json';
 export const Product = () =>{
    return(
        <div className='bg-primary text-white'> 
        <p>{product.title}</p>
        </div>
    )
}
export default Product