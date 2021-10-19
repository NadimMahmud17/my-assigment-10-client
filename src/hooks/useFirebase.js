import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();


    const sinInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        
    }
 
    const logOut = () => {
        signOut(auth)
        .then(() =>{ } );
    }


    useEffect( () =>{
     const unsubscribed =   onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        });
        return () => unsubscribed;

    } ,[])




    return {
        user,
        sinInUsingGoogle,
        logOut,
    }
}
export default useFirebase;