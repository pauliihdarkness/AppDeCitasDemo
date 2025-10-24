import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup,
    FacebookAuthProvider
} from "firebase/auth";

import { auth } from "../config/firebaseConfig";

export const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

export const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
        throw error;
    }
};

export const logAuthFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Error al iniciar sesión con Facebook:", error);
        throw error;
    }
};
