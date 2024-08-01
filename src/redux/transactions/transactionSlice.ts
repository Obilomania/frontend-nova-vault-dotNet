import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userAccountBalance: 0,
  userDepositTotal: 0,
  userPendingDepositTotal: 0,
  userLastDeposit: null,
  userWithdrawalTotal: 0,
  userPendingWithdrawalTotal: 0,
  userLastWithdrawal: null,
  topUpTime: '',
  alluserdeposits: [],
  alluserwithdrawals: []
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
    },
    user_withdrawal_total: (state, action) => {
      state.userWithdrawalTotal = action.payload
    },
    user_pending_withdrawal_total: (state, action) => {
      state.userPendingWithdrawalTotal = action.payload
    },
    user_last_withdrawal: (state, action) => {
      state.userLastWithdrawal = action.payload
    },
    top_up_time: (state, action) => {
      state.topUpTime = action.payload;
    },
    all_user_deposits: (state, action) => {
      state.alluserdeposits = action.payload;
    },
    all_user_withdrawals: (state, action) => {
      state.alluserwithdrawals = action.payload
    }
  }
});

export const { user_account_balance, user_deposit_total, user_pendingDeposit_total, user_last_deposit, user_withdrawal_total, user_pending_withdrawal_total, user_last_withdrawal, top_up_time, all_user_deposits, all_user_withdrawals } = transactionSlice.actions

export const transactionReducer = transactionSlice.reducer