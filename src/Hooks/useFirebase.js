import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";
import initializeFirebaseAuth from "../Firebase/firebase.init";

initializeFirebaseAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error,setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
      
    const signInWithGoogle = () => {
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.message)
        })
    };

    const logout = () => {
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .catch(error => {
            setError(error.message)
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log("state user changed",user);
                setUser(user);
            }
        })
    },[])
    return {
        user,
        error,
        logout,
        signInWithGoogle
    }
}

export default useFirebase;