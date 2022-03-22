import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [unmounted, setUnmounted] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await signInWithEmailAndPassword(
                projectAuth,
                email,
                password
            );

            dispatch({ type: 'LOGIN', payload: res.user });

            // update state
            if (!unmounted) {
                setIsPending(false);
                setError(null);
            }
        } catch (err) {
            if (!unmounted) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    };

    useEffect(() => {
        return () => {
            // Return this cleanup function incase unmounted
            setUnmounted(true);
        };
    }, []);

    return { login, error, isPending };
};
