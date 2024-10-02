import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    fullName :"",
    id :"",
    email :"",
    isBlocked :"",
    btcWallet :"",
    isLoggedin: false,
    userRole: "",
    userBalance:0
}

const userAuthSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        current_user_fullname: (state, action) => {
            state.fullName = action.payload;
        },
        current_user_ID: (state, action) => {
            state.id = action.payload;
        },
        current_user_email: (state, action) => {
            state.email = action.payload;
        },
        current_user_btcWallet: (state, action) => {
            state.btcWallet = action.payload;
        },
        current_user_login_status: (state, action) => {
            state.isLoggedin = action.payload;
        },
        current_user_account_bonus: (state, action) => {
          state.userBalance = action.payload  
        },
        user_role: (state, action) => {
            state.userRole = action.payload;
            localStorage.setItem("userRole", action.payload)
        }
    }
});

export const { current_user_fullname, current_user_ID, current_user_email,current_user_btcWallet, current_user_login_status, user_role, current_user_account_bonus } = userAuthSlice.actions
export const userAuthReducer = userAuthSlice.reducer;