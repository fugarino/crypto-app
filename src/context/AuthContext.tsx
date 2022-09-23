import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    loginWithGoogle,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
