import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IExperience, IQuestion, IService, Locales} from "../../types/types";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/api"}),
    endpoints: builder => ({
        getServices: builder.query<IService[], Locales>({
            query: (locale) => `/services?language=${locale}`
        }),
        getExperiences: builder.query<IExperience[], Locales>({
            query: (locale) => `/experiences?language=${locale}`
        }),
        getQuestions: builder.query<IQuestion[], Locales>({
            query: (locale) => `/questions?language=${locale}`
        })
    })
})

export const {
    useGetServicesQuery,
    useGetExperiencesQuery,
    useGetQuestionsQuery
} = apiSlice