import React from 'react';
import { CartContext } from '../Features/ContextProvider';
import dispatch from '../Features/CartReducer';
export const CartProduct = ({product})=>{
    return(
        <div className="d-flex border mb-3">
            <img src="{product.thumbnail}" className="w-25 h-25" alt="" />
            <div className="detail ms-4">
                <h5 className="card-title text-dark">{product.title}</h5>
                <p className="card-text text-dark">$ {product.price}</p>
                <div className='buttons'>
                    <button className='rounded-cicle px-2' onClick={() => dispatch({type: "Decrease", id: product.id})}>-</button>
                    <button className='rounded'>{product.quantity}</button>
                    <button className='rounded-circle px-2' onClick={() => dispatch({type: "Increase", id: product.id})}>+</button>
                </div>
                <button className='btn btn-sm btn-warning' onClick ={() => dispatch({type: "Remove", id: product.id})}> Remove</button>
            </div>
        </div>
    );
}
export default CartProduct;