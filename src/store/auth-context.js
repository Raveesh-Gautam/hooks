import React  from "react";
const AuthContext=React.createContext({
    isLoggedIn:false,
    onlogout:()=>{},
})
export default AuthContext;