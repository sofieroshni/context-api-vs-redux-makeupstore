import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Components/CartProduct.jsx";

const Cart = () => {

  const cartItems = useSelector(
    (state) => state.cart.cartItems || []
  );

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Kurven er tom</p>
      ) : (
        cartItems.map((item) => (
          <CartProduct
            key={item.id}
            cartItem={item}
          />
        ))
      )}
    </div>
  );
};

export default Cart;