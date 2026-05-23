import {React, useContext, useState} from "react";
import { CartContext } from "../Features/ContextProvider";
import {CartProduct} from "../Components/CartProduct.jsx";
import { totalItem, totalPrice } from "../Features/CartReducer.jsx";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";


const Cart = () =>{
    const navigate = useNavigate();
    const {cart, dispatch} = useContext(CartContext);
    const [checkout, setCheckout] = useState(false);
    
    return(
       <div className='container mt-5 mb-5'> 
       <div className="row">
        <div className="col-8">
            {cart && cart.length > 0 ? (
                cart.map(p =>(
                    <CartProduct key={p.id} product={p}/>
                ))
            ) : (<>
                <p>Din kurv er tom</p>
                <Link to="/"><button className="btn btn-primary mb-1">Gå til shoppen</button></Link></>
            )}
        </div>
       </div>
       <div className="col-4">
        <div className="bg-secondary p-3 text-white">
            <h5>Antal produkter i kurv: {totalItem(cart)}</h5>
            <h5>Samlet Pris: ${totalPrice(cart)} Kr </h5>
<button
    className="btn btn-primary"
    onClick={() => {
        dispatch({ type: "Checkout" });
        navigate("/checkout");
    }}
>
    Checkout
</button>
            <div>
               
            </div>
        </div>
       </div>
       </div>
    )
}
export default Cart