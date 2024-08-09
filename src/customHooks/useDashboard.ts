import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAccountBalance } from '../redux/authRedux/userAuthService';
import { user_account_balance, user_deposit_total, user_last_deposit, user_pendingDeposit_total } from '../redux/transactions/transactionSlice';
import { useGetTheUserAccountBalanceQuery, useGetTheUserLastDepositQuery, useGetTheUserTotalDepositBalanceQuery, useGetTheUserTotalPendingDepositBalanceQuery } from '../redux/APIs/dashboardApi';

const useDashboard = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state: any) => state.persistedReducer.auth)
    const id = userInfo.id;

    function GetUserAccountBalance() {
        const { data, isLoading } = useGetTheUserAccountBalanceQuery(id)
        if (!isLoading) {
            dispatch(user_account_balance(data.result))
        }
    }
    function GetUserTotalDepositBalance() {
        const { data, isLoading } = useGetTheUserTotalDepositBalanceQuery(id)
        if (!isLoading) {
            dispatch(user_deposit_total(data))
        }
    }
    function GetUserTotalDPendingepositBalance() {
        const { data, isLoading } = useGetTheUserTotalPendingDepositBalanceQuery(id)
        if (!isLoading) {
            dispatch(user_pendingDeposit_total(data))
        }
    }
    function GetUserLastDeposit() {
        const { data, isLoading } = useGetTheUserLastDepositQuery(id)
        if (!isLoading) {
            dispatch(user_last_deposit(data))
        }
    }
    
    GetUserAccountBalance()
    GetUserTotalDepositBalance()
    GetUserTotalDPendingepositBalance();
    GetUserLastDeposit()
    
 
}

export default useDashboard