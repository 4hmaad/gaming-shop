import React, { useContext, useEffect } from "react";
import { auth } from "../firebase/firebase.utils";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(userAuth => {
      setUser(userAuth);
    });
    return () => unsubscribeAuth();
  }, [setUser]);

  const signUp = user => {
    return auth.createUserWithEmailAndPassword(user.email, user.password);
  };

  const signIn = user => {
    return auth.signInWithEmailAndPassword(user.email, user.password);
  };

  const signInWithGoogle = () => {
    return auth.signInWithGoogle();
  };

  const signOut = () => {
    return auth.signOut().then(() => {
      setUser(null);
    });
  };

  const values = {
    user,
    signUp,
    signInWithGoogle,
    signIn,
    signOut
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthProvider must wrap the component to use this hook.");
  }
  return context;
};
