import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:44338/api/"
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
        getAllWithdrawals: builder.query({
            query: () => ({
                url: `admin/allwithdrawals`
            }),
            providesTags: ["AdminItems"]
        }),

    })
})

export const {useGetAllAppUsersQuery,useGetallAppDepositssQuery, useGetAllWithdrawalsQuery } = adminApi;
export default adminApi;