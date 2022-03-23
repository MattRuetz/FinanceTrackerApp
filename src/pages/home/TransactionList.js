import { useFirestore } from '../../hooks/useFirestore';
import styles from './Home.module.css';

function TransactionList({ transactions }) {
    const { deleteDocument } = useFirestore('transactions');

    return (
        <ul className={styles.transactions}>
            {transactions.map((trans) => (
                <li key={trans.id}>
                    <p className={styles.name}>{trans.name}</p>
                    <p className={styles.amount}>{trans.amount}</p>
                    <button onClick={() => deleteDocument(trans.id)}>✕</button>
                </li>
            ))}
        </ul>
    );
}

export default TransactionList;
