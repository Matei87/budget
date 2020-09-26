import React, { useReducer, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import { GlobalReducer } from './GlobalReducer';
export const GlobalContextProvider = (props) => {
    const income = localStorage.getItem('income');
    const expense = localStorage.getItem('expense');

    const initialState = {
        incomeTransactions: JSON.parse(income) || [],
        expenseTransactions: JSON.parse(expense) || []
    }
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    //add income action
    const addIncome = (transaction) => {
        dispatch({ type: 'ADD_INCOME', payload: transaction })
    }
    //add expense action
    const addExpense = (transaction) => {
        dispatch({ type: 'ADD_EXPENSE', payload: transaction })
    }
    //delete transaction
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    useEffect(() => {
        localStorage.setItem('income', JSON.stringify(state.incomeTransactions));
        localStorage.setItem('expense', JSON.stringify(state.expenseTransactions));
    })
    return (
        <GlobalContext.Provider
            value={
                {
                    incomeTransactions: state.incomeTransactions,
                    expenseTransactions: state.expenseTransactions,
                    addIncome,
                    addExpense,
                    deleteTransaction
                }
            }>
            {props.children}
        </GlobalContext.Provider>
    )
}