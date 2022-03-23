import { useAuthContext } from '../../hooks/useAuthContext';
// Components
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
// Hooks
import { useCollection } from '../../hooks/useCollection';
// Styles
import styles from './Home.module.css';

function Home() {
    const { user } = useAuthContext();
    // get documents stored with current user's id
    const { documents, error } = useCollection(
        'transactions',
        ['uid', '==', user.uid],
        ['createdAt', 'desc']
    );

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {error && <p>{error}</p>}
                {documents && <TransactionList transactions={documents} />}
            </div>
            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid} />
            </div>
        </div>
    );
}

export default Home;
