import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'
import { initialState } from './CartReducer'
    

export const CartContext = createContext()

const ContextProvider = ({children}) => {
    const [state, userMoney, dispatch] = useReducer(CartReducer, initialState)
  return (
    <CartContext.Provider value={{state,
        dispatch,
        userMoney: 5000, dispatch}}>
        {children}
    </CartContext.Provider>
         )
}
export default ContextProvider