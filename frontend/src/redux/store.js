import { createStore, applyMiddleware } from "redux";
import transactionReducer from "./transaction/transactionReducer";
import thunk from "redux-thunk";

const store = createStore(transactionReducer, applyMiddleware(thunk));

export default store;
