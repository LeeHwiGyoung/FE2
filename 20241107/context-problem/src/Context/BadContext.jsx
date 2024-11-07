import { createContext, useState } from 'react'

export const BadContext = createContext();

export const BadProvider = ({children}) => {
    const [badData , setBadData] = useState({
        name : '휘경',
        email : 'test@test.com',
        alarm : {
            theme : 'dark',
            fontSize : '16'
        },
        cart: {
            items : [],
            totalPrice : 0,
        }
    });

    const updateCartTotal = (value) => {
        setBadData((prev)=> {
            return {...prev, cart: {
                items : [],
                totalPrice : value,
            }} 
        })
    }
    return (
        <BadContext.Provider value={{badData , updateCartTotal}}>
            {children}
        </BadContext.Provider>
    )
}