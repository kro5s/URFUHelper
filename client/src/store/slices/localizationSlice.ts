import {createSlice} from "@reduxjs/toolkit";
import {Locales} from "../../types/types";
import {RootState} from "../store";

interface IInitialState {
    language: Locales
}

const initialState : IInitialState = {
    language: Locales.ENGLISH
}

const localizationSlice = createSlice({
    name: "localization",
    initialState,
    reducers: {
        changeLocalization(state, action) {
            state.language = action.payload
        }
    }
})

export const selectLanguage = (state: RootState) => state.localization.language

export const { reducer: localizationReducer, actions: localizationsActions } = localizationSlice;