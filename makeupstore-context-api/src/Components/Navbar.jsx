import React  from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../Features/ContextProvider.jsx";
                 import { totalItem } from "../Features/CartReducer.jsx";

const Navbar = () => {
    const { cart, userMoney } = useContext(CartContext);

    return (
      <  header className="fixed-top">
        <div className="d-flex justify-content-between bg-secondary p-3 text-white">
            <Link to='/' className="navbar-brand fs-4 fw-bolder">Shop</Link>
            <div className="d-flex gap-4 align-items-center">
                {/* <span>Penge på konto: {userMoney.toFixed(2)} kr</span> */}
                <Link to='/cart' className="text-white fs-2 text-decoration-none">
<BsCart /> {totalItem(cart) || 0}
                </Link>
            </div>
        </div>
        </header>
    );
}
export default Navbar