import React, {useState}from "react";

function TransactionTable({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
