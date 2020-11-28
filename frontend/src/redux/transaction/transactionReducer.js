import {DELETE_TRANSACTION, ADD_TRANSACTION} from './transactionTypes';

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_TRANSACTION: return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }

        case ADD_TRANSACTION: return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }

        default: return state
    }
}

export default transactionReducer;