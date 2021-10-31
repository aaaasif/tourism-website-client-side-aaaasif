import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Pages/Shared/Header/SignIn/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleNameInput = event => {
        // console.log(event.target.value);
        setName(event.target.value);
    };
    const handleEmailInput = event => {
        // console.log(event.target.value);
        setEmail(event.target.value);
    };
    const handlePasswordInput = event => {
        // console.log(event.target.value);
        setPassword(event.target.value);
    };

    const handleResistration = event => {
        event.preventDefault();
        // console.log(email, password);
        if (password.length < 6) {
            setError('At least 6 charecter!!!');
            // console.log(pass.length);
            return;
        };

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('two uppercase letters!!!');
            return;
        };
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserName();
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const handleSignIn = event => {
        event.preventDefault();
        // console.log(email, password);
        if (password.length < 6) {
            setError('At least 6 charecter!!!');
            // console.log(pass.length);
            return;
        };

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('two uppercase letters!!!');
            return;
        };
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }
    
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
            })

            .catch(error => {
                setError(error.message);
            });
    };

    const googleSignIn = () => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .finally(() => {
                setIsloading(false);
            });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsloading(false);
        });

        return () => unsubscribed;
    }, []);
    
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => {
                setIsloading(false);
            });
    };

    return {
        user,
        googleSignIn,
        logOut,
        isLoading,
        handleResistration,
        handleNameInput,
        handleEmailInput,
        handlePasswordInput,
        error,
        handleSignIn

    };
};

export default useFirebase;