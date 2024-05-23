import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {IService, LoadingStatus} from "../../types/types";
import {RootState} from "../store";

interface IInitialState {
    status: LoadingStatus,
    entities: IService[]
}

const initialState: IInitialState = {
    status: LoadingStatus.IDLE,
    entities: []
}

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(fetchServices.pending, (state) => {
            state.status = LoadingStatus.LOADING
        })
        .addCase(fetchServices.fulfilled, (state, action) => {
            state.status = LoadingStatus.SUCCEEDED
            state.entities = action.payload
        })
        .addCase(fetchServices.rejected, (state) => {
            state.status = LoadingStatus.FAILED
        })
})

export const fetchServices = createAsyncThunk(
    "services/fetchServices",
    async ({ lang }: { lang: string }) => {
        const response = await fetch(`http://localhost:8080/api/services?language=${lang}`)
        const json = await response.json()

        return json
})

export const selectAllServices = (state: RootState) => state.services.entities;
export const selectServiceById = createSelector(
    [(state: RootState, id) => state.services.entities, (state, id: number) => id],
    (services, id) => services.find(service => service. id === id)
)

export const {  reducer: servicesReducer, actions: servicesActions } = servicesSlice;
