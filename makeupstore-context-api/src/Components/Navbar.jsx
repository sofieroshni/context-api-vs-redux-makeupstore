import React  from "react";
import { BsCart } from "react-icons/bs";
const Navbar = () => {
    return(
        <div class="d-flex justify-content-between bg-secondary p-3 text-white">
            <a href="" className="navbar-brand fs-4 fw-bolder">Shop</a>
            <a href="" className="text-white fs-2"> <BsCart/></a>
            


        </div>
    )
}
export default Navbar