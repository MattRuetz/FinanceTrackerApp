import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import styles from './Navbar.module.css';

function Navbar() {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        // classes ref'd from CSS module... MUST ADD CLASSES LIKE THIS
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>
                    <Link to="/">myMoney</Link>
                </li>
                {/* display relevant buttons for logged in OR not */}
                {user ? (
                    <li>
                        <Link to="/">Hello, {user.displayName}</Link>
                        <button className="btn" onClick={logout}>
                            Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">
                                <strong>Signup!</strong>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
