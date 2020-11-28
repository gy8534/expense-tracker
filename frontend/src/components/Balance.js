import React from "react";
import { connect } from "react-redux";

const Balance = ({ transactions }) => {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </>
  );
};

const mapStateToProsp = (state) => {
  return {
    transactions: state.transactions,
  };
};

export default connect(mapStateToProsp)(Balance);
