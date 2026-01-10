import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../utils/checkLs.js";

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(checkLs());

   const updateUserInfo = (userData) => {
      setUser(userData);
      if (userData) {
         localStorage.setItem("userInfo", JSON.stringify(userData));
      } else {
         localStorage.removeItem("userInfo");
      }
   };

   const login = (loginData) => {
      updateUserInfo(loginData);
      return true;
   };

   const logout = () => {
      updateUserInfo(null);
      return true;
   };
   
   return (
      <AuthContext.Provider value={{ user, login, logout, updateUserInfo }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;