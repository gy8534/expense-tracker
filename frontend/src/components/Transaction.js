import React from "react";
import { connect } from 'react-redux';
import {deleteTransaction} from '../redux/index'

const Transaction = ({id, text, amount, deleteTransaction}) => {
    
    return (
        <li className={amount < 0 ? "minus" : "plus"}>
         {text} <span>₹{Math.abs(amount)}</span>
         <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
       </li>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteTransaction : (id) => dispatch(deleteTransaction(id))
    }
  }
  

export default connect(null,mapDispatchToProps)(Transaction);
