import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import { totalItem, totalPrice } from '../Features/CartReducer';
import { BsBagCheckFill, BsCalculatorFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsCalculator } from "react-icons/bs";
const Footer = () => {
    const { boughtItems, cart, userMoney } = useContext(CartContext);
    return(
        <footer className=" text-white " style={{}} >
            <div className=" d-flex justify-content-end align-items-center p-0 m-0">
        
<div className="card text-bg-secondary mb-3 m-1  position-fixed bottom-0 end-0"  style={{ maxWidth: "18rem", backgroundColor:"pink", zIndex:"1000", right:"0px"}} >
  <div className="card-body">
<span className="badge bg-warning text-dark fs-6 px-3 py-2">
                    <BsCart/> {totalItem(cart) || 0}
                </span>
                    
               
     
   
                <p className='small'>  Kurv </p>
                
               <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                    <BsCalculatorFill/> {totalPrice(cart) || 0}
                </span>
                                                   <p className='small'>Kurvens samlet pris</p>
                <span className="badge bg-success fs-6 px-3 py-2 m-0">
                {userMoney} kr
                 </span>      
                                                   <p className='small'>Konti</p>
    

                                 <span className='bg-success fs-6 px-3 py-2 badge'><BsBagCheckFill /> {totalItem(boughtItems)} stk </span> 
                                  <p className='small'>Købte produkter</p>

  </div>
  
  </div>  
  </div>
  </footer>              
              );}
export default Footer;
