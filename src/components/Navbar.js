import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        // classes ref'd from CSS module... MUST ADD CLASSES LIKE THIS
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>
                <li>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">
                        <strong>Signup!</strong>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
