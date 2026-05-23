import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider.jsx";

const Checkout = () => {

    const { boughtItems, dispatch } = useContext(CartContext);

    return (
        <div>
            <h1>Tak for dit køb!</h1>

            <h2>Du har købt følgende produkter:</h2>

            <ul>
                {boughtItems.map((item) => (
                    <li key={item.id}>
                        {item.title} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Checkout;