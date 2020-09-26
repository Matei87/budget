import React, { useContext } from 'react';
import ExpenseTransaction from '../ExpenseTransaction/ExpenseTransaction';
import { GlobalContext } from '../../context/GlobalContext';

const ExpenseList = () => {
    const { expenseTransactions } = useContext(GlobalContext);
    return (
        <div className=" transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {expenseTransactions.map(transaction => {
                    return <ExpenseTransaction transaction={transaction} key={transaction.id} />
                })}
            </ul>
        </div>
    )
}

export default ExpenseList;