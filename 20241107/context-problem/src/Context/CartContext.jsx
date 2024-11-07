import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartData, setCartData] = useState({
        cart : {
            items : [],
            totalPrice : 0,
        }
    });

    const updateCartTotal = (value) => {
        setCartData((prev)=> {
            return {...prev , cart : {
                ...prev.cart,
                totalPrice : value
            }}
        })
    }

    return (
        <CartContext.Provider value={{cartData, updateCartTotal}}>
            {children}
        </CartContext.Provider>
    )
}