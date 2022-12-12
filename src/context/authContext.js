import { auth } from "../firebase";
import { createContext, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = useState(true)

  const { navigate } = useNavigation()

  function handleCreateUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("----------------conta criada----------------");
      const user = userCredential.user;
      console.log(user);
    });
  }

  function handleLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("-------------login feito--------------");
      const user = userCredential.user;
      console.log(user);
      setAuth(true)
      navigate('Home')
    });
  }

  function handleLogoff() {
    setAuth(false)
  }

  return (
    <AuthContext.Provider value={{ handleCreateUser, handleLogin, handleLogoff, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
