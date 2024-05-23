import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {IQuestion, IService, LoadingStatus} from "../../types/types";
import {RootState} from "../store";

interface IInitialState {
    status: LoadingStatus,
    entities: IQuestion[]
}

const initialState: IInitialState = {
    status: LoadingStatus.IDLE,
    entities: []
}

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(fetchQuestions.pending, (state) => {
            state.status = LoadingStatus.LOADING
        })
        .addCase(fetchQuestions.fulfilled, (state, action) => {
            state.status = LoadingStatus.SUCCEEDED
            state.entities = action.payload
        })
        .addCase(fetchQuestions.rejected, (state) => {
            state.status = LoadingStatus.FAILED
        })
})

export const fetchQuestions = createAsyncThunk(
    'questions/fetchQuestions',
    async ({ lang }: {lang: string}) => {
        const response = await fetch(`http://localhost:8080/api/questions?language=${lang}`)
        const json = await response.json()

        return json
    }
    )

export const selectAllQuestions = (state: RootState) => state.questions.entities;
export const selectNQuestions = createSelector(
    [(state: RootState, amount) => state.questions.entities, (state, amount: number) => amount],
    (questions, amount) => questions.slice(0, amount)
)

export const {reducer: questionsReducer, actions: questionsActions} = questionsSlice;