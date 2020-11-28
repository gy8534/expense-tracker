import React from "react";
import { connect } from 'react-redux';


import Transaction from "./Transaction";

const TransactionList = ({transactions}) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
       {transactions.map(({id, text, amount}) => (
         <Transaction key={id} id={id} text={text} amount={amount}/>
       ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  }
}


export default connect(mapStateToProps)(TransactionList);
