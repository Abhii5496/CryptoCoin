
import {auth, db} from '../Firebase'

import {createUserWithEmailAndPassword,
signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

import {doc, setDoc} from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import Signin from '../Pages/Signin'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState([])
    
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth,email, password)
        return setDoc(doc(db, 'user', email), {
            watchList: [],
        })
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
         return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[])

    return (
        <UserContext.Provider value={{signUp, signIn, logout, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}