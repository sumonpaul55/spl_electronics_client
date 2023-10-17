import React, { createContext, useState } from 'react';
import PropTypes from "prop-types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../../firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }









    const userInfo = {
        user,
        loading,
        createAccount
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