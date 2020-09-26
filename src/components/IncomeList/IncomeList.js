import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import IncomeTransaction from '../IncomeTransaction/IncomeTransaction';

const IncomeList = () => {
    const { incomeTransactions } = useContext(GlobalContext);
    //console.log(incomeTransations, expenseTransactions);
    return (
        <div className=" transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map(transaction => {
                    return <IncomeTransaction transaction={transaction} key={transaction.id} />
                })}
            </ul>
        </div>
    )
}

export default IncomeList;