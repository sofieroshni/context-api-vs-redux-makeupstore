import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider.jsx";
import { totalItem, totalPrice } from "../Features/CartReducer.jsx";

const Checkout = () => {

    const { boughtItems, dispatch } = useContext(CartContext);
    return (
         (boughtItems.length === 0) )?(
            <div className="container mt-5 mb-5 w-75">
                <h1>Du har ikke købt noget endnu!</h1>
            </div>
        ):(
        <div className="container mt-5 mb-5 w-75">
        
            <h1>Tak for dit køb!</h1>
             <h2>Du har købt følgende produkter:</h2>
            <ul className="list-group">
            
                {boughtItems.map((item) => (
                    <li  className="list-group-item d-flex justify-content-between align-items-center text-bg-dark p-3"key={item.id}>
                        <p>
                        {item.title}  {item.price.toFixed(2) * item.quantity}</p>
                      <div className="d-flex align-items-center gap-2">
        <p className="mb-0">Antal:</p>

        <span className="badge text-bg-primary rounded-pill">
            {item.quantity}
        </span>
    </div>
                    </li>
                ))}
                                    <h2> Anral produkter: {totalItem(boughtItems)} Stk</h2>
                    <h2> samlet pris: {totalPrice(boughtItems)} Kr</h2>


            </ul>

            </div>
    );
};

export default Checkout;