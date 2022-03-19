import { useState } from 'react';
// styles
import styles from './Signup.module.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store user authentication and login user if signed up
        console.log(username, email, password);
    };

    return (
        // If module classnames have cant be ref'd with styles.signup-form (because of -) do this
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Signup</h2>
            <label>
                <span>user name:</span>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
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
        </form>
    );
}

export default Signup;
