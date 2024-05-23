import {configureStore} from "@reduxjs/toolkit";
import {reportReducer} from "./slices/reportSlice";
import {servicesReducer} from "./slices/servicesSlice";
import {questionsReducer} from "./slices/questionsSlice";
import {communitiesReducer} from "./slices/communitiesSlice";
import {experienceReducer} from "./slices/experienceSlice";
import {localizationReducer} from "./slices/localizationSlice";

const store = configureStore({
    reducer: {
        report: reportReducer,
        services: servicesReducer,
        questions: questionsReducer,
        communities: communitiesReducer,
        experience: experienceReducer,
        localization: localizationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;