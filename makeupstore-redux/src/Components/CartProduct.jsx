import React from "react";
import { useDispatch } from "react-redux";
import {Increase, removeProduct, } from "../Features/CartSlice";
const CartProduct = ({ cartItem }) => {
    const dispatch = useDispatch();
     
  return (
    
     <div className="d-flex border mb-3">
            <img src={cartItem.thumbnail} className="w-25 h-25" alt="" />
            <div className="detail ms-4">
                <h5 className="card-title text-dark">{cartItem.title}</h5>
                <p className="card-text text-dark">$ {cartItem.price}</p>
                <div className='buttons justify-content-center align-items-center gap-2'>
                    <button className='rounded'>{cartItem.quantity}</button>
                    <button className='rounded' onClick={() => dispatch(Increase(cartItem.id))}>+</button>
                    <button className='rounded' onClick={() => dispatch(removeProduct(cartItem.id))}>Remove</button>

 
            
            </div>

            </div>
        </div>
  );
};

export default CartProduct;