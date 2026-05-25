import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../Components/CartProduct.jsx";
import Checkout from "./Checkout.jsx";
import { Link } from "react-router";
import { checkout } from "../Features/CartSlice.jsx";

const Cart = () => {
const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cart.cartItems || []
  );
const boughtItems = useSelector(
 (state) => state.cart.boughtItems || [] 
);
  return (
    <div className="container mt-5">
        <Link to ="/checkout">    
              <button className='btn btn-primary'  onClick={() => dispatch(checkout())}>checkout</button>
        </Link>

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