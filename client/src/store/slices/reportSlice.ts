import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

const reportSlice = createSlice({
    name: "report",
    initialState: (window.innerWidth) >= 768,
    reducers: {
        closeReport(state, action) {
            return false;
        }
    }
})

export const selectReport = (state: RootState) => state.report

export const { reducer: reportReducer, actions: reportActions } = reportSlice;