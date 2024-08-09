import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:44338/api/"
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
    })
})








export const {useGetTheUserAccountBalanceQuery, useGetTheUserTotalDepositBalanceQuery,useGetTheUserTotalPendingDepositBalanceQuery,useGetTheUserLastDepositQuery } = dashboardApi
export default dashboardApi;