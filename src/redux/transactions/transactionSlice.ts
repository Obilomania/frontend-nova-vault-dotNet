import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userAccountBalance: 0,
  userDepositTotal: 0,
  userPendingDepositTotal: 0,
  userLastDeposit: null
}

const transactionSlice = createSlice({
  name: "Transactions",
  initialState,
  reducers: {
    user_account_balance: (state, action) => {
      state.userAccountBalance = action.payload
    },
    user_deposit_total: (state, action) => {
      state.userDepositTotal = action.payload
    },
    user_pendingDeposit_total: (state, action) => {
      state.userPendingDepositTotal = action.payload
    },
    user_last_deposit: (state, action) => {
      state.userLastDeposit = action.payload
    }
  }
});

export const { user_account_balance, user_deposit_total, user_pendingDeposit_total, user_last_deposit } = transactionSlice.actions

export const transactionReducer = transactionSlice.reducer