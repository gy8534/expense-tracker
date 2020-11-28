import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../redux/index";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: parseInt(amount),
    };

    console.log(newTransaction);

    addTransaction(newTransaction);

    setAmount(0);
    setText("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  };
};

export default connect(null, mapDispatchToProps)(AddTransaction);
