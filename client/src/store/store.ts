import {configureStore} from "@reduxjs/toolkit";
import {reportReducer} from "./slices/reportSlice";
import {communitiesReducer} from "./slices/communitiesSlice";
import {localizationReducer} from "./slices/localizationSlice";
import {apiSlice} from "./slices/apiSlice";

const store = configureStore({
    reducer: {
        report: reportReducer,
        communities: communitiesReducer,
        localization: localizationReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;