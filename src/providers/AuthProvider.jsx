import axios from 'axios';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);

            const loggedUserEmail = { email: currentUser?.email };
            if (currentUser) {
                axios.post("https://inflective-server.vercel.app/jwt", loggedUserEmail, { withCredentials: true })
                    .then(res => {
                        // console.log(res.data);
                    })
                    .catch(error => {
                        // console.log(error);
                    })
            }
            else {
                axios.post("https://inflective-server.vercel.app/logout", loggedUserEmail, { withCredentials: true })
                    .then(res => {
                        // console.log(res.data);
                    })
                    .catch(error => {
                        // console.log(error);
                    })
            }
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;