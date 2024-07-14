
 
//import { createContext, useContext, useMemo ,useState} from "react";
import { useNavigate } from "react-router-dom";
 import { createContext, useContext, useMemo, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState(getCookie("access_token"));
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
   
    navigate("/home");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
       token,
      login,
      logout,
    }),
    [token ]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};