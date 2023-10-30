import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input fields, you can add more validation logic here

    // Create a new transaction object
    const newTransaction = {
      category: category,
      description: description,
      amount: parseFloat(amount), // Parse amount as a float
    };

    // Call the callback function to add the new transaction
    onAddTransaction(newTransaction);

    // Reset input fields after submission
    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
