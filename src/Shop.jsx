import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function Shop() {
  const dispatch=useDispatch();
  const action=bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <h4>Deposite/Withdraw Money </h4>
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}> + 
      </button> 
                 Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}> -  
      </button>
      
    </div>
  )
}

export default Shop
