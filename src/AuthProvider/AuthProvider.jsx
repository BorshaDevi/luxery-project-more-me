import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext=createContext(null)

const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const githubProvider=new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user ,setUser] =useState(null)
    const [loader,setLoader] =useState(true)
    const createAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn=()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    const gitHubLogIn=()=>{
        setLoader(true)
        return signInWithPopup(auth,githubProvider)
    }
      
    const loginOut=()=>{
        setLoader(true)
        return signOut(auth);

    }


    useEffect(() => {
        const unSubscribe=onAuthStateChanged(auth,currentUser => {
            console.log(currentUser)
             setUser(currentUser)
             setLoader(false)
        })
        return () => unSubscribe();
    },[])
    const authInfo={
        createAccount,
        signIn,
        googleLogIn,
        loginOut,
        gitHubLogIn,
        user,
        loader,

    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;