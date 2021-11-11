/* import { useEffect, useState } from "react";
import initializeFirebase from "../../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged ,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
 */

/* initializeFirebase();
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const registerUser = (email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { */
            // Signed in 
            /* const user = userCredential.user;
            // ... */
    /*     })
        .catch((error) => { */
            /* const errorCode = error.code;
            const errorMessage = error.message; */
            // ..
    /*     });
    } */

    /* const loginUser = (email,password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { */
            // Signed in 
            /* const user = userCredential.user; */
            // ...
        /* })
        .catch((error) => { */
            /* const errorCode = error.code;
            const errorMessage = error.message; */
      /*   });
    }

    const googleSingIn = () =>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                
            }).catch((error) => {
                
            });

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             /*  const uid = user.uid; */
            /*   setUser(user)
            } else {
                setUser({})
            }
          });
          return () => unsubscribe;
    },[])


    const logout = () =>{
        signOut(auth).then(() => { */ 
            // Sign-out successful.
        //   }).catch((error) => {
            // An error happened.
          /* });
    }
    return{
        user,
        registerUser,
        logout,
        loginUser,
        googleSingIn
    }

}
export default useFirebase;  */

import { getAuth, signInWithPopup, GoogleAuthProvider , signOut,onAuthStateChanged, } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../../Firebase/firebase.init";
// import initializeAuthentication from './firebase.init';


initializeFirebase();
const useFirebase = () =>{
    const auth = getAuth();
    const [users,setUsers] = useState({});
    const singInUsingGoogle=()=>{
        // const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUsers(result.user);
        })
    }
    useEffect(()=>{
        const auth = getAuth();
        const unsbscribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        })
        return () => unsbscribed(); 
    },[])
  
    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
    }
    return{
        users,
        singInUsingGoogle,
        logOut
    }
}
export default useFirebase;