import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


const Balance = () => {
    const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

    const incomeAmounts = incomeTransactions.map(income => income.incomeAmount);
    const expenseAmounts = expenseTransactions.map(expense => expense.expenseAmount);
    const totalIncome = incomeAmounts.reduce((a, b) => a += b, 0).toFixed(2);
    const totalExpense = expenseAmounts.reduce((a, b) => a += b, 0).toFixed(2);
    //console.log(totalIncome, totalExpense);
    const total = (totalIncome - totalExpense);
    let sign;
    if (total === 0) {
        sign = '';
    } else {
        sign = total > 0 ? '+' : '-';
    }
    //console.log(total)
    return (
        <div className="balance">
            <div>
                <h2>Your Balance</h2>
                <h3>{sign}${Math.abs(total).toFixed(2)}</h3>
            </div>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Expenses</h3>
                    <p>-${totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance;