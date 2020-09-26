import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { TiTrash } from "react-icons/ti";


const IncomeTransaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className="transaction" >
            <div>
                <span className="transaction-text">{transaction.incomeText}</span>
                <span className="transaction-amount">+${transaction.incomeAmount}</span>
            </div>
            <button className="delete-btn">
                <TiTrash onClick={() => deleteTransaction(transaction.id)} />
            </button>
        </li>
    )
}

export default IncomeTransaction;