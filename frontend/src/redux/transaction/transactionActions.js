import {DELETE_TRANSACTION, ADD_TRANSACTION} from './transactionTypes';

export const deleteTransaction = (id) => {
    return {
        type:DELETE_TRANSACTION,
        payload: id
    }
}

export const addTransaction = (transaction) => {
    return {
        type: ADD_TRANSACTION,
        payload:transaction
    }
}