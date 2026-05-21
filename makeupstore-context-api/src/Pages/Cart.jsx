import {React, useContext, useState} from "react";
import { CartContext } from "../Features/ContextProvider";
import {CartProduct} from "../Components/CartProduct.jsx";
import { totalItem, totalPrice } from "../Features/CartReducer.jsx";

const Cart = () =>{
    const {cart} = useContext(CartContext);
    
    return(
       <div className='container mt-5'> 
       <div className="row">
        <div className="col-8">
            {cart && cart.length > 0 ? (
                cart.map(p =>(
                    <CartProduct key={p.id} product={p}/>
                ))
            ) : (
                <p>Din kurv er tom</p>
            )}
        </div>
       </div>
       <div className="col-4">
        <div className="bg-secondary p-3 text-white">
            <h5>Antal produkter i kurv: {totalItem(cart)}</h5>
            <h5>Samlet Pris: $ {totalPrice(cart).toFixed(2)} </h5>
            <button className="btn btn-warning">Checkout</button>
        </div>
       </div>
       </div>
    )
}
export default Cart