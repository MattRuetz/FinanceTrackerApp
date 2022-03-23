import styles from './Home.module.css';

function TransactionList({ transactions }) {
    return (
        <ul className={styles.transactions}>
            {transactions.map((trans) => (
                <li key={trans.id}>
                    <p className={styles.name}>{trans.name}</p>
                    <p className={styles.amount}>{trans.amount}</p>
                </li>
            ))}
        </ul>
    );
}

export default TransactionList;
