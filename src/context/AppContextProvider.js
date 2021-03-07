import React , {useState} from 'react';

import {AppContext} from './AppContext';

const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
   
    const  setUserHandler = (newUser)=>{
        setUser(newUser);  
    }


    return (
        <AppContext.Provider value = {{user,setUser:setUserHandler}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
