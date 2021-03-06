import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../helpers/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  // const [loading, setLoading] = useState(true);


  function signup(email,password){
    return auth.createUserWithEmailAndPassword(email,password)
  }

  function login(email,password){
    return auth.signInWithEmailAndPassword(email,password)
  }

  function logout() {
    return auth.signOut();
  }  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
