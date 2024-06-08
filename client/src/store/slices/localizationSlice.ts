import {createSlice} from "@reduxjs/toolkit";
import {Locales} from "../../types/types";
import {RootState} from "../store";

interface IInitialState {
    language: Locales
}

const initialState : IInitialState = {
    language: localStorage.getItem('language') as Locales || Locales.ENGLISH
}

const localizationSlice = createSlice({
    name: "localization",
    initialState,
    reducers: {
        changeLocalization(state, action) {
            state.language = action.payload
            localStorage.setItem('language', action.payload)
        }
    }
})

export const selectLanguage = (state: RootState) => state.localization.language

export const { reducer: localizationReducer, actions: localizationsActions } = localizationSlice;