import { useState } from 'react';
import Spinner from '../../components/Spinner';
import { useSignup } from '../../hooks/useSignup';

// styles
import styles from './Signup.module.css';

function Signup() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signup, isPending, error } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store user authentication and login user if signed up
        signup(displayName, email, password);
    };

    return (
        <>
            {isPending ? (
                <Spinner />
            ) : (
                // If module classnames have cant be ref'd with styles.signup-form (because of -) do this
                <form onSubmit={handleSubmit} className={styles['signup-form']}>
                    <h2>Signup</h2>
                    <label>
                        <span>user name:</span>
                        <input
                            type="text"
                            onChange={(e) => setDisplayName(e.target.value)}
                            value={displayName}
                        />
                    </label>
                    <label>
                        <span>email:</span>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label>
                        <span>password:</span>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>

                    <button type="submit" className="btn">
                        Signup
                    </button>

                    {error && <p>{error}</p>}
                </form>
            )}
        </>
    );
}

export default Signup;
