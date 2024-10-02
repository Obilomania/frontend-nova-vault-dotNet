import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:44338/api/"
        // baseUrl: "https://nova-vault-ventures-api.azurewebsites.net/api/"

    }),
    tagTypes: ["DashboardItems"],
    endpoints: (builder) => ({
        getTheUserAccountBalance: builder.query({
            query: (id) => ({
                url: `transactions/usergetaccountbalance/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
        getTheUserTotalDepositBalance: builder.query({
            query: (id) => ({
                url: `deposit/getalluserdeposittotal/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
        getTheUserTotalPendingDepositBalance: builder.query({
            query: (id) => ({
                url: `deposit/getalluserpendingdeposittotal/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
        getTheUserLastDeposit: builder.query({
            query: (id) => ({
                url: `deposit/userlastdeposit/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
        getTheUserWithdrawalTotal: builder.query({
            query: (id) => ({
                url: `withdraw/getallusertotalwithdrawal/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
        getTheUserPendingWithdrawalTotal: builder.query({
            query: (id) => ({
                url: `withdraw/getalluserpendingwithdrawaltotal/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
        getTheUserLastWithdrawal: builder.query({
            query: (id) => ({
                url: `withdraw/userlastwithdrawal/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
        getAlltheUserDeposit: builder.query({
            query: (id) => ({
                url: `deposit/usergetalldeposits/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
        getAllTheUserWithdrawal: builder.query({
            query: (id) => ({
                url: `withdraw/usergetallwithdrawals/${id}`
            }),
            providesTags: ["DashboardItems"]
        }),
    })
})








export const {useGetTheUserAccountBalanceQuery, useGetTheUserTotalDepositBalanceQuery,useGetTheUserTotalPendingDepositBalanceQuery,useGetTheUserLastDepositQuery,useGetTheUserWithdrawalTotalQuery, useGetTheUserPendingWithdrawalTotalQuery, useGetTheUserLastWithdrawalQuery, useGetAlltheUserDepositQuery,useGetAllTheUserWithdrawalQuery } = dashboardApi
export default dashboardApi;