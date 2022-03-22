import { useState } from 'react';
import { db, projectAuth } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
    const [error, setError] = useState(null);

    const [isPending, setIsPending] = useState(false);

    const signup = async (username, email, password) => {
        setError(null);
        setIsPending(true);

        try {
            const auth = projectAuth;
            console.log(email, password, username);
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            if (!res) {
                throw new Error('Could not complete signup.');
            }

            // Add a new document in collection "cities"
            await setDoc(doc(db, 'users', res.user.uid), {
                username,
                email,
            });

            console.log(res.user, username);

            setIsPending(false);
            setError(null);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    };

    return { signup, isPending, error };
};
