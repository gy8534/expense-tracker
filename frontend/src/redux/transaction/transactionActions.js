import axios from "axios";
import {
  DELETE_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_FAILURE,
  ADD_TRANSACTION_REQUEST,
  ADD_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_FAILURE,
  FETCH_TRANSACTION_REQUEST,
  FETCH_TRANSACTION_SUCCESS,
} from "./transactionTypes";


// Delete Transaction
export const deleteTransactionRequest = () => {
  return {
    type: DELETE_TRANSACTION_REQUEST,
  };
};
export const deleteTransactionSuccess = (_id) => {
  return {
    type: DELETE_TRANSACTION_SUCCESS,
    payload: _id
  };
};

export const deleteTransactionFailure = (message) => {
  return {
    type: DELETE_TRANSACTION_FAILURE,
    payload: message,
  };
};
export const deleteTransaction = (_id) => {
  return (dispatch) => {
    dispatch(deleteTransactionRequest());
    axios
      .delete(`/api/v1/transactions/${_id}`)
      .then(() => dispatch(deleteTransactionSuccess(_id)))
      .catch((err) => {
        const message = err.response.data.error;
        dispatch(deleteTransactionFailure(message))
      })
  };
};

// Add Transaction
export const addTransactionRequest = () => {
  return {
    type: ADD_TRANSACTION_REQUEST,
  };
};
export const addTransactionSuccess = (transaction) => {
  return {
    type: ADD_TRANSACTION_SUCCESS,
    payload: transaction
  };
};

export const addTransactionFailure = (message) => {
  return {
    type: ADD_TRANSACTION_FAILURE,
    payload: message,
  };
};
export const addTransaction = (transaction) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return (dispatch) => {
    dispatch(addTransactionRequest());
    axios
    .post('/api/v1/transactions', transaction, config)
      .then(() => dispatch(addTransactionSuccess(transaction)))
      .catch((err) => {
        const message = err.response.data.error;
        dispatch(addTransactionFailure(message))
      })
  };
};

export const fetchTransactionRequest = () => {
  return {
    type: FETCH_TRANSACTION_REQUEST,
  };
};
export const fetchTransactionSuccess = (transactions) => {
  return {
    type: FETCH_TRANSACTION_SUCCESS,
    payload: transactions,
  };
};

export const fetchTransactionFailure = (message) => {
  return {
    type: FETCH_TRANSACTION_FAILURE,
    payload: message,
  };
};

export const fetchTransactions = () => {
  return (dispatch) => {
    dispatch(fetchTransactionRequest);
    axios
      .get("api/v1/transactions")
      .then((response) => {
        const transactions = response.data.data;
        dispatch(fetchTransactionSuccess(transactions));
      })
      .catch((err) => {
        const message = err.response.data.error;
        dispatch(fetchTransactionFailure(message));
      });
  };
};
