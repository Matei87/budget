import React from 'react';
import { GlobalContextProvider } from './context/GlobalState';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import AddTransaction from './components/AddTransaction/AddTransaction';
import IncomeList from './components/IncomeList/IncomeList';
import ExpenseList from './components/ExpenseList/ExpenseList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <GlobalContextProvider >
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <div className="transactions">
            <IncomeList />
            <ExpenseList />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;