import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.jsx';
// import './index.css';
import { useSelector } from 'react-redux';

 export const Checkout = () =>{
    const boughtItems = useSelector(state => state.cart.boughtItems)
    console.log(boughtItems)
    return(
<div className='container'>
     

    </div>
  );
};
   

export default Checkout