import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'
import { initialState } from './CartReducer'
    

export const CartContext = createContext()

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)
  return (
    <CartContext.Provider value={{
        cart: state.cart,
        userMoney: state.userMoney,
          boughtItems: state.boughtItems,
        dispatch
    }}>
        {children}
    </CartContext.Provider>
         )
}
export default ContextProvider