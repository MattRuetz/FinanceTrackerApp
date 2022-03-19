import { useState } from 'react';
// styles
import styles from './Login.module.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Authenticate login attempt
    };

    return (
        // If module classnames have cant be ref'd with styles.login-form (because of -) do this
        <form className={styles['login-form']}>
            <h2>Login</h2>
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
            <button className="btn">Login</button>
        </form>
    );
}

export default Login;
