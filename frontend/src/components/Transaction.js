import React from "react";
import { connect } from 'react-redux';
import {deleteTransaction} from '../redux/index'

const Transaction = ({_id, text, amount, deleteTransaction}) => {
    console.log(_id)
    return (
        <li className={amount < 0 ? "minus" : "plus"}>
         {text} <span>₹{Math.abs(amount)}</span>
         <button onClick={() => deleteTransaction(_id)} className="delete-btn">x</button>
       </li>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteTransaction : (_id) => dispatch(deleteTransaction(_id))
    }
  }
  

export default connect(null,mapDispatchToProps)(Transaction);
