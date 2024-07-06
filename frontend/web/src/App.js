import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Groceries', amount: -50 },
    { id: 2, description: 'Salary', amount: 1000 },
    { id: 3, description: 'Rent', amount: -800 },
  ]);

  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Finance Manager</h1>
        <p>Total Balance: ${totalBalance}</p>
      </header>
      <main>
        <Dashboard transactions={transactions} />
      </main>
    </div>
  );
}

export default App;
