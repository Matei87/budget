import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { TiTrash } from "react-icons/ti";


const ExpenseTransaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className="transaction">
            <div>
                <span className="transaction-text">{transaction.expenseText}</span>
                <span className="transaction-amount">-${transaction.expenseAmount}</span>
            </div>
            <button className="delete-btn">
                <TiTrash onClick={() => deleteTransaction(transaction.id)} />
            </button>
        </li>
    )
}

export default ExpenseTransaction;