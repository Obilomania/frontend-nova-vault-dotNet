import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allAppUsers :[],
    allDeposits: [],
    allWithdrawals: [],
}

const adminSlice = createSlice({
  name: "Admin",
  initialState,
    reducers: {
        all_applicationUser: (state, action) => {
            state.allAppUsers = action.payload
        },
        all_deposits: (state, action) => {
            state.allDeposits = action.payload
        },
        all_withdrawals: (state, action) => {
            state.allWithdrawals = action.payload
        }
  }
});

export const { all_applicationUser, all_deposits, all_withdrawals } = adminSlice.actions
export const  adminReducer = adminSlice.reducer

