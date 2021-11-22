import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function useAuthentication() {
  const [ userAuthenticated, setUserAutenticated ] = useState(null);

  useEffect(() => {

    const unSuscribe = () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserAutenticated(user);
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          setUserAutenticated(null);
          // ...
        }
      });
      
    }
    return unSuscribe();

  }, []);

  return userAuthenticated;
}

export default useAuthentication;