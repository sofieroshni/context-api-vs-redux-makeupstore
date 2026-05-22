import React  from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../Features/ContextProvider.jsx";

const Navbar = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="d-flex justify-content-between bg-secondary p-3 text-white">
            <Link to='/' className="navbar-brand fs-4 fw-bolder">Shop</Link>
            <Link to='/cart' className="text-white fs-2 text-decoration-none">
                <BsCart /> {cart.length }
            </Link>
            <p>Penge på konti:</p>
        </div>
    );
}
export default Navbar