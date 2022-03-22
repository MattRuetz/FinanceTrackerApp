import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import styles from './Navbar.module.css';

function Navbar() {
    const { logout } = useLogout();

    return (
        // classes ref'd from CSS module... MUST ADD CLASSES LIKE THIS
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>
                    <Link to="/">myMoney</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">
                        <strong>Signup!</strong>
                    </Link>
                </li>
                <li>
                    <button className="btn" onClick={logout}>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
