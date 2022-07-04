import { useState, createContext, useContext } from "react";

const AuthContext = createContext("")

export const AuthProvider = (props)=>{
    let [token, setToken] = useState("")

    let login = (token)=>{
        setToken(token)
    }
    let logout = ()=>{
        setToken("")
    }

    return <AuthContext.Provider value={{token, login, logout}}>{ props.children }</AuthContext.Provider>

}

export const useAuth = ()=>{
    return useContext(AuthContext)
}