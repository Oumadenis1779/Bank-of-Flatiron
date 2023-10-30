import React, {useState} from "react";
import SearchBar from "./SearchBar";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";


function App() {
  const [ transactions, setTransactions ] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    amount: '',
  });

  const addTransaction = (event) => {
    event.preventDefault();
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ date: '', description: '', amount: '' });
  };


  return (
    <div className="App">
      <h1>Transaction Manager</h1>
      <form onSubmit={addTransaction}>
        <label>Date:</label>
        <input
          type="date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          value={newTransaction.description}
          onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
          required
        />
        <label>Amount:</label>
        <input
          type="number"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
      <input
        type="text"
        placeholder="Search by Description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions
            .filter((transaction) => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;
