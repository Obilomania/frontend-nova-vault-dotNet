import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://localhost:44338/api/"
        baseUrl: "https://nova-vault-ventures-api.azurewebsites.net/api/"
    }),
    tagTypes: ["AdminItems"],
    endpoints: (builder) => ({
        getAllAppUsers: builder.query({
            query: () => ({
                url: `auth/get-all-app-users`
            }),
            providesTags: ["AdminItems"]
        }),
        getallAppDepositss: builder.query({
            query: () => ({
                url: `admin/admin-get-all-deposits`
            }),
            providesTags: ["AdminItems"]
        }),
        getallPendingAppDepositss: builder.query({
            query: () => ({
                url: `admin/admin-get-all-pending-deposits`
            }),
            providesTags: ["AdminItems"]
        }),
        getallApprovedAppDepositss: builder.query({
            query: () => ({
                url: `admin/admin-get-all-approved-deposits`
            }),
            providesTags: ["AdminItems"]
        }),
        getAllWithdrawals: builder.query({
            query: () => ({
                url: `admin/allwithdrawals`
            }),
            providesTags: ["AdminItems"]
        }),
        getAllPendingWithdrawals: builder.query({
            query: () => ({
                url: `admin/all-pending-withdrawals`
            }),
            providesTags: ["AdminItems"]
        }),
        getAllApprovedWithdrawals: builder.query({
            query: () => ({
                url: `admin/all-approved-withdrawals`
            }),
            providesTags: ["AdminItems"]
        }),

    })
})

export const {useGetAllAppUsersQuery,useGetallAppDepositssQuery, useGetAllWithdrawalsQuery, useGetallApprovedAppDepositssQuery, useGetallPendingAppDepositssQuery, useGetAllPendingWithdrawalsQuery, useGetAllApprovedWithdrawalsQuery } = adminApi;
export default adminApi;