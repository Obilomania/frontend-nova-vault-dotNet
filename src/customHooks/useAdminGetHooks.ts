import { useDispatch } from "react-redux"
import { useGetAllAppUsersQuery, useGetallAppDepositssQuery, useGetAllWithdrawalsQuery } from "../redux/APIs/adminApi"
import { all_app_deposits, all_applicationUser, all_withdrawals } from "../redux/adminRedux/adminSlice"


const useAdminGetHooks = () => {
    const dispatch = useDispatch()

    function GetAllApplicationUser() {
        const { data, isLoading } = useGetAllAppUsersQuery(null)
        if (!isLoading) {
            dispatch(all_applicationUser(data.$values))
        }
    }
    function GetallAppDepositss() {
        const { data, isLoading } = useGetallAppDepositssQuery(null)
        if (!isLoading) {
            dispatch(all_app_deposits(data.$values))
        }
    }
    function GetAllWithdrawals() {
        const { data, isLoading } = useGetAllWithdrawalsQuery(null)
        if (!isLoading) {
            dispatch(all_withdrawals(data.$values))
        }
    }





    GetAllApplicationUser();
    GetallAppDepositss();
    GetAllWithdrawals();
}


export default useAdminGetHooks