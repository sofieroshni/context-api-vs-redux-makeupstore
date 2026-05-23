import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
export const CartProduct = ({product})=>{
    const { dispatch } = useContext(CartContext);
    return(
        <div className="d-flex border mb-3">
            <img src={product.thumbnail} className="w-25 h-25" alt="" />
            <div className="detail ms-4">
                <h5 className="card-title text-dark">{product.title}</h5>
                <p className="card-text text-dark">$ {product.price}</p>
                <div className='buttons justify-content-center align-items-center gap-2'>
                    <button className='rounded'>{product.quantity}</button>
                                <button className='rounded-cicle px-2 bg-light border-1 rounded m-1' onClick={() => dispatch({type: "Decrease", id: product.id})}>-</button>

                        <button className='rounded-cicle px-2 bg-light border-1 rounded' onClick={() => dispatch({type: "Increase", id: product.id})}>+</button>
                </div>

            </div>
        </div>
    );
}
export default CartProduct;