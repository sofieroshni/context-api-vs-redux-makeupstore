import Checkout from "../Pages/Checkout"

// chat-gpt
export const initialState = {
    userMoney: 500,
    cart: [],
    // boughtItems: [],
    boughtItems: [
        {
            id: 1,
            title: "Essence Mascara Lash Princess",
            price: 29.99,
            quantity: 2
        },
        {
            id: 2,
            title: "Eyeshadow Palette with Mirror",
            price: 19.99,
            quantity: 1
        }
    ],
    setCheckedOut: false,
}
// //chat gpt-end

export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price , 0)
}


const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add": {
            const existingProduct = state.cart.find(p => p.id === action.product.id)
            
            if (existingProduct) {
                return {...state, cart: state.cart.map(p =>
                    p.id === action.product.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                )}
            } else {
                return {...state, cart: [...state.cart, { ...action.product, quantity: 1 }]}
            }
        }
        
        case "Remove":
            return {...state, cart: state.cart.filter( p => p.id !== action.id)}

        case "Increase":
            return {...state, cart: state.cart.map(p => 
                p.id === action.id 
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            )}

       case "Decrease":
    return {
        ...state,
        cart: state.cart
            .map(p =>
                p.id === action.id
                    ? { ...p, quantity: p.quantity - 1 }
                    : p
            )
            .filter(p => p.quantity > 0)
    };

           case "Checkout":
    return {
        ...state,
        boughtItems: [...state.cart],
        cart: [],
        userMoney: state.userMoney - totalPrice(state.cart)
    };

        default: 
            return state;
    }
}

export default CartReducer

