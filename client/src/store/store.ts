import {configureStore} from "@reduxjs/toolkit";
import {reportReducer} from "./slices/reportSlice";

const store = configureStore({
    reducer: {
        report: reportReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;