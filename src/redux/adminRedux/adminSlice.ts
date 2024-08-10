import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allAppUsers :null,
    allAppDeposits: null,
    allPendingAppDeposits: null,
    allApprovedAppDeposits: null,
    allWithdrawals: null,
    allPendingWithdrawals: null,
    allApprovedWithdrawals: null,
}

const adminSlice = createSlice({
  name: "Admin",
  initialState,
    reducers: {
        all_applicationUser: (state, action) => {
            state.allAppUsers = action.payload
        },
        all_app_deposits: (state, action) => {
            state.allAppDeposits = action.payload
        },
        all_pending_deposits: (state, action) => {
            state.allPendingAppDeposits = action.payload
        },
        all_approved_deposits: (state, action) => {
            state.allApprovedAppDeposits = action.payload
        },
        all_withdrawals: (state, action) => {
            state.allWithdrawals = action.payload
        },
        all_pending_withdrawals: (state, action) => {
            state.allPendingWithdrawals = action.payload
        },
        all_approved_withdrawals: (state, action) => {
            state.allApprovedWithdrawals = action.payload
        },
  }
});

export const { all_applicationUser, all_app_deposits, all_withdrawals, all_pending_deposits, all_approved_deposits, all_approved_withdrawals, all_pending_withdrawals } = adminSlice.actions
export const  adminReducer = adminSlice.reducer

