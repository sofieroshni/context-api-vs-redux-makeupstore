import React from "react";
import { totalItem,totalPrice, userMoney } from "../Features/CartSlice";
import { useSelector } from "react-redux";
import {
  BsBagCheckFill,
  BsCalculatorFill,
  BsCart,
  BsShop,
  BsCreditCardFill
} from "react-icons/bs";
//OBS jeg anvender ikke import pga. jeg tænker at bruge footeren til at forkare logik 
// til videoen og ikke vil springe frem & tilbage til de forskellige steder hvor koden er implementeret.
const Footer = () => {

    const boughtItems  = useSelector((state) =>state.cart.boughtItems); //Købte-produkter
    const totalBoughtItems = boughtItems.reduce((total, item) => total + item.quantity, 0); //Alle købte produkter
    //{totalBoughtItems} 

   
    const userMoney = useSelector((state) => state.cart.userMoney);
        //{userMoney} 

    const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
              //{totalItems} 


    

    return (

    <footer className="text-white">

      <div className="d-flex justify-content-end align-items-center p-0 m-0">

        <div
          className="card text-bg-secondary mb-3 m-1 position-fixed bottom-0 end-0"
          style={{
            maxWidth: "18rem",
            backgroundColor: "pink",
            zIndex: "1000",
            right: "0px",
          }}
        >

          <div className="card-body">

            <span className="badge bg-warning text-dark fs-6 px-3 py-2">
              <BsCart /> 
            </span>

            <p className="small">Kurv{totalItems}</p>

            <span className="badge bg-warning text-dark fs-6 px-3 py-2">
              <BsCalculatorFill />
            </span>

            <p className="small">Kurvens samlet pris: {totalPrice(cartItems)}</p>

            <span className="badge bg-success fs-6 px-3 py-2 m-0">
<BsCreditCardFill/>            </span>

            <p className="small">Konti: {userMoney - totalPrice(boughtItems)} Kr;</p>

            <span className="bg-success fs-6 px-3 py-2 badge">
              <BsBagCheckFill />
            </span>

            <p className="small"> Du har købt: {totalBoughtItems}</p>

          </div>
        </div>
      </div>

      <button
        className="btn btn-dark m-2 fixed-bottom z-1000"
        style={{ width: "100px" }}
      >
        SHOP <BsShop />
      </button>

    </footer>
  );
};

export default Footer;