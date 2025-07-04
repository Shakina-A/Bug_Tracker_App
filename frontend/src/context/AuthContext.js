//is user is logged in or not
import { createContext,useContext,useState,useEffect } from "react";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    //...creating a state..
    const[user,setUser]=useState(()=>{

        //....getItem ->gets the value of the user from the localstorage....
        const storedUser=localStorage.getItem("user");
        return storedUser? JSON.parse(storedUser):null;
    });

    const login=(userData,token)=>{
        setUser(userData);
        localStorage.setItem("user",JSON.stringify(userData));
        localStorage.setItem("token",token);
    };

    //for logging out
    const logout=()=>{
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };
    return(
        <AuthContext.Provider value={{user ,login,logout}}>
            {children}
        </AuthContext.Provider>
    );

};
export const useAuth=()=>useContext(AuthContext);