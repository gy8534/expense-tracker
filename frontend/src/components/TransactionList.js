import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchTransactions } from "../redux/index";

import Transaction from "./Transaction";

const TransactionList = ({ transactions, fetchTransactions }) => {
  useEffect(() => {
    
    fetchTransactions();
  }, [])
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(({ _id, text, amount }) => (
          <Transaction key={_id} _id={_id} text={text} amount={amount} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
