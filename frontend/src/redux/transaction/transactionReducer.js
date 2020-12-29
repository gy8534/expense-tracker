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

const initialState = {
  loading: false,
  transactions: [],
  error: "",
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    // Delete
    case DELETE_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: [...state.transactions, action.payload],
      };
    case ADD_TRANSACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case FETCH_TRANSACTION_FAILURE:
      return {
        ...state,
        loading: false,
        transactions: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default transactionReducer;
