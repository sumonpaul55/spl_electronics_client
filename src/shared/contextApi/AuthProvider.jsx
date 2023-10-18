import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from '../../../firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const signInwithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //  get exsting user
    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, user => {
            setLoading(false)
            setUser(user);
        })
        return () => unsubScribe()
    }, [])
    console.log(user)
    const userInfo = {
        user,
        loading,
        signUp, signInwithGoogle,
        login,
        logOut
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;