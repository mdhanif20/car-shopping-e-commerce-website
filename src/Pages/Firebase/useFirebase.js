import { getAuth, signInWithPopup, GoogleAuthProvider , signOut,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './firebase.init';


initializeAuthentication();
const useFirebase = () =>{
    const auth = getAuth();
    const [users,setUsers] = useState({});
    // console.log(users.displayName);
    const singInUsingGoogle=()=>{
        // const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUsers(result.user);
            // console.log(result.user)
        })
    }
    const passwordAuthentication = (email,password,name) =>{
        // console.log(email,password);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = {email,displayName:name};
            setUsers(newUser);
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    const singIn = (email, password,location,history) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.form || '/';
            history.replace(destination);
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
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
        passwordAuthentication,
        logOut,
        singIn
    }
}
export default useFirebase;