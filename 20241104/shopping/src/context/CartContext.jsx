import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const getTotal = () => {
        return cart.reduce((acc,cur)=> acc += cur.count, 0)
    }
    const addToCart = (product) => {
        setCart((prevCart) => {
            console.log(cart)
            const existing = prevCart.find((item)=> item.id === product.id)

            if(existing) {
                return prevCart.map((item)=> item.id === product.id ? {...item , count : item.count + 1} : item)
            }

            return [...prevCart , {...product , count : 1}]
        })
    }

    const removeFromCart = (productId) => {
        setCart((prevCart)=>prevCart.filter((item)=> item.id!== productId))
    }
    
    
    return (
        <CartContext.Provider value={{addToCart , removeFromCart , cart , getTotal}}>
            {children}
        </CartContext.Provider>
    )
  }