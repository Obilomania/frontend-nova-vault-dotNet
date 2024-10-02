import { useDispatch, useSelector } from 'react-redux'
import { all_the_user_deposits, all_user_withdrawals, user_account_balance, user_deposit_total, user_last_deposit, user_last_withdrawal, user_pending_withdrawal_total, user_pendingDeposit_total, user_withdrawal_total } from '../redux/transactions/transactionSlice';
import { useGetAlltheUserDepositQuery, useGetAllTheUserWithdrawalQuery, useGetTheUserAccountBalanceQuery, useGetTheUserLastDepositQuery, useGetTheUserLastWithdrawalQuery, useGetTheUserPendingWithdrawalTotalQuery, useGetTheUserTotalDepositBalanceQuery, useGetTheUserTotalPendingDepositBalanceQuery, useGetTheUserWithdrawalTotalQuery } from '../redux/APIs/dashboardApi';

const useDashboard = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state: any) => state.persistedReducer.auth)
    const id = userInfo.id;

    // function GetUserAccountBalance() {
    //     const { data, isLoading } = useGetTheUserAccountBalanceQuery(id)
    //     if (!isLoading) {
    //         dispatch(user_account_balance(data?.result))
    //     }
    // // }
    // function GetUserTotalDepositBalance() {
    //     const { data, isLoading } = useGetTheUserTotalDepositBalanceQuery(id)
    //     if (!isLoading) {
    //         dispatch(user_deposit_total(data))
    //     }
    // }
    // function GetUserTotalDPendingepositBalance() {
    //     const { data, isLoading } = useGetTheUserTotalPendingDepositBalanceQuery(id)
    //     if (!isLoading) {
    //         dispatch(user_pendingDeposit_total(data))
    //     }
    // }
    // function GetUserLastDeposit() {
    //     const { data, isLoading } = useGetTheUserLastDepositQuery(id)
    //     if (!isLoading) {
    //         dispatch(user_last_deposit(data))
    //     }
    // }
    // function GetUserWithdrawalTotal() {
    //     const { data, isLoading } = useGetTheUserWithdrawalTotalQuery(id)
    //     if (!isLoading) {
    //         dispatch(user_withdrawal_total(data))
    //     }
    // }
    // function GetUserPendingWithdrawalTotal() {
    //     const { data, isLoading } = useGetTheUserPendingWithdrawalTotalQuery(id)
    //     if (!isLoading) {
    //         dispatch(user_pending_withdrawal_total(data))
    //     }
    // }
    // function GetUserLastWithdrawal() {
    //     const { data, isLoading } = useGetTheUserLastWithdrawalQuery(id)
    //     if (!isLoading) {
    //         dispatch(user_last_withdrawal(data))
    //     }
    // }
    // function GetAllUserDeposits() {
    //     const { data, isLoading } = useGetAlltheUserDepositQuery(id)
    //     if (!isLoading) {
    //         dispatch(all_the_user_deposits(data?.$values))
    //     }
    // }
    // function GetAllUserWithdrawals() {
    //     const { data, isLoading } = useGetAllTheUserWithdrawalQuery(id)
    //     if (!isLoading) {
    //         dispatch(all_user_withdrawals(data?.$values))
    //     }
    // }
    
    // GetUserAccountBalance()
    // GetUserTotalDepositBalance()
    // GetUserTotalDPendingepositBalance();
    // GetUserLastDeposit()
    // GetUserWithdrawalTotal();
    // GetUserPendingWithdrawalTotal();
    // GetUserLastWithdrawal()
    // GetAllUserDeposits();
    // GetAllUserWithdrawals();
 
}

export default useDashboard