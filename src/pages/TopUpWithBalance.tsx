import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



interface TopUpWithBalanceProps {
  revealBalancePop: any;
  balancePop: any;
}
const TopUpWithBalance = ({ revealBalancePop, balancePop } : TopUpWithBalanceProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const transactionInfo = useSelector(
    (state: any) => state.persistedReducer.transactions
  );

    return (
        <>
        </>
  );
};

export default TopUpWithBalance