import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userData , setUserData] = useState({
        name : '휘경',
        email : 'test@test.com',
    })

    return (
        <UserContext.Provider value={{userData}}>
            {children}
        </UserContext.Provider>
    )
}