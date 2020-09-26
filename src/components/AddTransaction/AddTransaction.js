import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { v4 as uuid } from 'uuid';


const AddTransaction = () => {
    const { addIncome, addExpense } = useContext(GlobalContext);

    //INCOME
    const [income, setIncome] = useState({
        incomeText: '',
        incomeAmount: 0
    })
    const { incomeText, incomeAmount } = income;
    const onChangeIncome = (e) => {
        setIncome({ ...income, [e.target.name]: e.target.value });
    }
    //console.log(income);
    const onSubmitIncome = (e) => {
        e.preventDefault();
        if (incomeText !== '' && incomeAmount !== 0 && incomeAmount > 0) {
            const newIncomeTransaction = {
                id: uuid(),
                incomeText,
                incomeAmount: +incomeAmount
            }
            //console.log(newIncomeTransaction);
            addIncome(newIncomeTransaction);
            setIncome({
                incomeText: '',
                incomeAmount: 0
            })
        }

    }


    //EXPENSE
    const [expense, setExpense] = useState({
        expenseText: '',
        expenseAmount: 0
    })
    const { expenseText, expenseAmount } = expense;
    const onChangeExpense = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    }
    //console.log(expense);
    const onSubmitExpense = (e) => {
        e.preventDefault();
        if (expenseText !== '' && expenseAmount !== 0 && expenseAmount > 0) {
            const newExpenseTransaction = {
                id: uuid(),
                expenseText,
                expenseAmount: +expenseAmount
            }
            //console.log(newExpenseTransaction);
            addExpense(newExpenseTransaction);
            setExpense({
                expenseText: '',
                expenseAmount: 0
            })
        }

    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input
                        type="text"
                        placeholder="Add Income..."
                        autoComplete="off"
                        name="incomeText"
                        value={incomeText}
                        onChange={onChangeIncome}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        autoComplete="off"
                        name="incomeAmount"
                        value={incomeAmount}
                        onChange={onChangeIncome}
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input
                        type="text"
                        placeholder="Add Expense..."
                        name="expenseText"
                        autoComplete="off"
                        value={expenseText}
                        onChange={onChangeExpense}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        name="expenseAmount"
                        autoComplete="off"
                        value={expenseAmount}
                        onChange={onChangeExpense}
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction;