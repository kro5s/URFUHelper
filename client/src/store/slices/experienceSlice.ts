import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {ICommunity, IExperience, Locales, LoadingStatus} from "../../types/types";
import {RootState} from "../store";

interface IInitialState {
    status: LoadingStatus,
    entities: IExperience[]
}

const initialState: IInitialState = {
    status: LoadingStatus.IDLE,
    entities: []
}

const experienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(fetchExperiences.pending, (state) => {
            state.status = LoadingStatus.LOADING
        })
        .addCase(fetchExperiences.fulfilled, (state, action) => {
            state.status = LoadingStatus.SUCCEEDED
            state.entities = action.payload
        })
        .addCase(fetchExperiences.rejected, (state) => {
            state.status = LoadingStatus.FAILED
        })
})

export const fetchExperiences = createAsyncThunk(
    'experience/fetchExperiences',
    async ({ lang }: { lang: string }) => {
        const response = await fetch(`http://localhost:8080/api/experiences?language=${lang}`)
        const json = await response.json()

        return json
    }
    )

export const selectAllExperience = (state: RootState) => state.experience.entities;
export const selectNExperiences = createSelector(
    [(state: RootState, amount) => state.experience.entities, (state, amount: number) => amount],
    (experiences, amount) => experiences.slice(0, amount)
)

export const { reducer: experienceReducer, actions: experienceActions } = experienceSlice;