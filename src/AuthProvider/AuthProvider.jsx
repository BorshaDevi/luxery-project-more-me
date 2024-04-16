import { createContext } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const githubProvider=new GithubAuthProvider()
const AuthProvider = ({children}) => {
    
    const createAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const gitHubLogIn=()=>{
        return signInWithPopup(auth,githubProvider)
    }
      
    const loginOut=()=>{
        return signOut(auth);

    }
    const authInfo={
        createAccount,
        signIn,
        googleLogIn,
        loginOut,
        gitHubLogIn

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