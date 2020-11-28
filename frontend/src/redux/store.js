import {createStore} from 'redux'
import transactionReducer from './transaction/transactionReducer';


const store = createStore(transactionReducer);

export default store;