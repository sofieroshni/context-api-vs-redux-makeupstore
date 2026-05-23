import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import { totalItem, totalPrice } from '../Features/CartReducer';
import { BsBagCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

const Footer = () => {
    const { boughtItems, cart, userMoney } = useContext(CartContext);
    return(
        <footer className=" text-white " style={{}} >
            <div className=" d-flex justify-content-end align-items-center p-0 m-0">
        
<div className="card text-bg-secondary mb-3 m-1  position-fixed bottom-0 end-0"  style={{ maxWidth: "18rem", backgroundColor:"pink", zIndex:"1000", right:"0px"}} >
  <div className="card-body">
             <h5>< BsBagCheckFill />Købt: {totalItem(boughtItems)}  </h5> <p></p>
               <p className="card-text">Antal produkter i købt: </p>
               <p className="card-text">Samlet Pris: $ {totalPrice(boughtItems
                    
                ).toFixed(2)}/</p>
               
                   <p className="card-title">Status Shopping</p>
                <p>
                    Penge på konto: ${userMoney.toFixed(2)}
                </p>
                <h5>
                    <BsCart/> {totalItem(cart) || 0}
                </h5>
                <p> Antal produkter i Kurv</p>
                
                
  </div>
  
  </div>  
  </div>
  </footer>              
              );}
export default Footer;
