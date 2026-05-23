import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import { totalItem, totalPrice } from '../Features/CartReducer';
import { BsBagCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

const Footer = () => {
    const { boughtItems, cart, userMoney } = useContext(CartContext);
    return(
        <footer className="bg-transparent text-white  fixed-bottom" >
            <div className=" d-flex justify-content-end align-items-center p-0 m-0">
        
<div className="card text-bg-info mb-3 m-0 fixed-right "  style={{ maxWidth: "18rem", height: "300px", }} >
  <div className="card-header">Købte produkter</div>
  <div className="card-body">
    <h5 className="card-title">Status Købt</h5>
              < BsBagCheckFill /> 
               <p className="card-text">Antal produkter i købt: {totalItem(boughtItems)}</p>
               <p className="card-text">Samlet Pris: $ {totalPrice(boughtItems
                    
                ).toFixed(2)} </p>
               
                   <h5 className="card-title">Status Shopping</h5>
                <p>
                    Penge på konto: ${userMoney.toFixed(2)}
                </p>
                <BsCart /> {totalItem(cart) || 0}
                <p></p>
                
                
  </div>
  
  </div>  
  </div>
  </footer>              
              );}
export default Footer;
