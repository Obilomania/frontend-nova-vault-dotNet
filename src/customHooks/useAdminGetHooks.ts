import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllApplicationUser, getAllDeposits, getAllWithdrawals } from '../redux/adminRedux/adminService';
import { all_applicationUser, all_deposits, all_withdrawals } from '../redux/adminRedux/adminSlice';

const useAdminGetHooks = () => {
    const dispatch = useDispatch();
    const [allDeposits, setAllDeposits] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [allWithdrawals, setAllWithdrawals] = useState([]);

    useEffect(() => {
        getAllDeposits().then((data) => {
            setAllDeposits(data);
        });

        //Get User Calls
        getAllApplicationUser().then((data) => {
            setAllUsers(data);
        });

        //Get Withdrawals Call
        getAllWithdrawals().then((data) => {
            setAllWithdrawals(data);
        });
    }, [])
    dispatch(all_deposits("allDeposits"))
    dispatch(all_withdrawals(allWithdrawals))
    dispatch(all_applicationUser(allUsers))
}

export default useAdminGetHooks