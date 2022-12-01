import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = useState(false);

  function toggleAuth() {
    setAuth((value) => value)
  }
  
  return <AuthContext.Provider value={{ isAuth, toggleAuth }}>{children}</AuthContext.Provider>;
}
