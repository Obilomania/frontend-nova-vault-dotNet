import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { userAuthReducer } from "./authRedux/userAuthSlice"
import { adminReducer } from "./adminRedux/adminSlice"
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    auth: userAuthReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: {
        persistedReducer,
        admin : adminReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })

});


export type RootState = ReturnType<typeof store.getState>;
export default store