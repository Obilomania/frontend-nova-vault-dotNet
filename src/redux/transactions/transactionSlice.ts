import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userAccountBalance :0
}

const transactionSlice = createSlice({
  name: "Transactions",
  initialState,
    reducers: {
        user_account_balance: (state, action) => {
            state.userAccountBalance = action.payload
      }
  }
});

export const {user_account_balance} = transactionSlice.actions

export const transactionReducer = transactionSlice.reducer