import { useDispatch } from "react-redux"
import { useGetAllAppUsersQuery, useGetallAppDepositssQuery, useGetAllWithdrawalsQuery, useGetallApprovedAppDepositssQuery, useGetallPendingAppDepositssQuery, useGetAllApprovedWithdrawalsQuery } from "../redux/APIs/adminApi"
import { all_app_deposits, all_applicationUser, all_approved_deposits, all_approved_withdrawals, all_pending_deposits, all_pending_withdrawals, all_withdrawals } from "../redux/adminRedux/adminSlice"


const useAdminGetHooks = () => {
    const dispatch = useDispatch()

    function GetAllApplicationUser() {
        const { data, isLoading } = useGetAllAppUsersQuery(null)
        if (!isLoading) {
            dispatch(all_applicationUser(data?.$values))
        }
        // dispatch(all_applicationUser(null))
    }
    function GetallAppDepositss() {
        const { data, isLoading } = useGetallAppDepositssQuery(null)
        if (!isLoading) {
            dispatch(all_app_deposits(data?.$values))
        }
        // dispatch(all_app_deposits(null))
    }
    function GetallPendingAppDepositss() {
        const { data, isLoading } = useGetallPendingAppDepositssQuery(null)
        if (!isLoading) {
            dispatch(all_pending_deposits(data?.$values))
        }
        // dispatch(all_pending_deposits(null))
    }
    function GetallApprovedAppDepositss() {
        const { data, isLoading } = useGetallApprovedAppDepositssQuery(null)
        if (!isLoading) {
            dispatch(all_approved_deposits(data?.$values))
        }
        // dispatch(all_approved_deposits(null))
    }
    function GetAllWithdrawals() {
        const { data, isLoading } = useGetAllWithdrawalsQuery(null)
        if (!isLoading) {
            dispatch(all_withdrawals(data?.$values))
        }
        // dispatch(all_withdrawals(null))
    }
    function GetAllApprovedWithdrawals() {
        const { data, isLoading } = useGetAllApprovedWithdrawalsQuery(null)
        if (!isLoading) {
            dispatch(all_approved_withdrawals(data?.$values))
        }
        // dispatch(all_approved_withdrawals(null))
    }
    function GetAllPendingWithdrawals() {
        const { data, isLoading } = useGetAllApprovedWithdrawalsQuery(null)
        if (!isLoading) {
            dispatch(all_pending_withdrawals(data?.$values))
        }
        // dispatch(all_pending_withdrawals(null))
    }





    GetAllApplicationUser();
    GetallAppDepositss();
    GetallPendingAppDepositss()
    GetallApprovedAppDepositss()
    GetAllWithdrawals();
    GetAllApprovedWithdrawals()
    GetAllPendingWithdrawals()
}


export default useAdminGetHooks