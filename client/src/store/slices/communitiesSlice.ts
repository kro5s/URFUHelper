import {createSelector, createSlice} from "@reduxjs/toolkit";
import {ICommunity, IService, LoadingStatus} from "../../types/types";
import {RootState} from "../store";

interface IInitialState {
    status: LoadingStatus,
    entities: ICommunity[]
}

const initialState: IInitialState = {
    status: LoadingStatus.IDLE,
    entities: [
        {id: 0, country: "Kazakhstan", countryImg: require('../../assets/flags/kz-KZ.png'), logoImg: require('../../assets/communities/kz.jpg'), vkLink: "https://vk.com/cluburfukz"},
        {id: 1, country: "Arabian Countries", countryImg: require('../../assets/flags/ar-SA.png'), logoImg: require('../../assets/communities/ar-SA.jpg'), vkLink: "https://vk.com/public217952498"},
        {id: 2, country: "Tajikistan", countryImg: require('../../assets/flags/tj.png'), logoImg: require('../../assets/communities/tj.jpg'), vkLink: "https://vk.com/zemlyachestvotj"},
        {id: 3, country: "Latin America", countryImg: require('../../assets/flags/es.png'), logoImg: require('../../assets/communities/lat.jpg'), vkLink: "https://vk.com/latinamericaurfu"},
        {id: 4, country: "Kyrgyzstan", countryImg: require('../../assets/flags/kg.png'), logoImg: require('../../assets/communities/kg.jpg'), vkLink: "https://vk.com/kgzemekb"},
    ]
}

const communitiesSlice = createSlice({
    name: "communities",
    initialState,
    reducers: {}
})

export const selectAllCommunities = (state: RootState) => state.communities.entities;
export const selectNCommunities = createSelector(
    [(state: RootState, amount) => state.communities.entities, (state, amount: number) => amount],
    (communities, amount) => communities.slice(0, amount)
)

export const { reducer: communitiesReducer, actions: communitiesActions } = communitiesSlice;