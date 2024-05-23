export enum Locales {
    RUSSIAN = "ru-RU",
    ENGLISH = "en-US",
    ARABIAN = "ar-SA",
    SPANISH = "es",
}

export enum InstitutesTypes {
    IRIT = "IRIT",
    INMT = "INMT"
}

export enum LoadingStatus {
    IDLE,
    LOADING,
    SUCCEEDED,
    FAILED
}

export interface IService {
    id: number;
    img: string;
    name: string;
    content: string;
    institute: string;
}

export interface IQuestion {
    id: number;
    question: string;
    answer: string;
}

export interface ICommunity {
    id: number;
    vkLink: string;
    logoImg: string;
    country: string;
    countryImg: string;
}

export interface IExperience {
    id: number;
    img: string;
    name: string;
    content: string;
    language: string;
}