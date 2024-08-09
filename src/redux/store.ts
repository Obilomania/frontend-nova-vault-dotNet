import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { userAuthReducer } from "./authRedux/userAuthSlice"
import { adminReducer } from "./adminRedux/adminSlice"
import { transactionReducer } from "./transactions/transactionSlice"
import storage from 'redux-persist/lib/storage';
import dashboardApi from "./APIs/dashboardApi";
import adminApi from "./APIs/adminApi";



const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    auth: userAuthReducer,
    transaction: transactionReducer,
    admin: adminReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: {
        persistedReducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(dashboardApi.middleware)
            .concat(adminApi.middleware)

});


export type RootState = ReturnType<typeof store.getState>;
export default store