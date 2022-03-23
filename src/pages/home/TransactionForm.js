import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

const TransactionForm = ({ uid }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const { addDocument, response } = useFirestore('transactions');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('sadfas');

        addDocument({ uid, name, amount });
    };

    // Reset form after submit
    useEffect(() => {
        if (response.success) {
            setAmount('');
            setName('');
        }
    }, [response.success]);

    return (
        <>
            <h3>Add a transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction Name:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>

                <label>
                    <span>Amount ($):</span>
                    <input
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default TransactionForm;
