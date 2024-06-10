import React, {useEffect} from 'react';
import {IntlProvider} from "react-intl";
import {messages} from "./i18n/messages";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import ServicesRoute from "./routes/ServicesRoute";
import ServiceRoute from "./routes/ServiceRoute";
import QuestionsRoute from "./routes/QuestionsRoute";
import CommunitiesRoute from "./routes/CommunitiesRoute";
import ExperiencesRoute from "./routes/ExperiencesRoute";
import {useAppSelector} from "./hooks/hooks";
import {selectLanguage} from "./store/slices/localizationSlice";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute/>
    },
    {
        path: '/services',
        element: <ServicesRoute/>
    },
    {
        path: '/services/:serviceId',
        element: <ServiceRoute/>
    },
    {
        path: '/questions',
        element: <QuestionsRoute/>
    },
    {
        path: '/communities',
        element: <CommunitiesRoute/>
    },
    {
        path: '/experience',
        element: <ExperiencesRoute/>
    },
    {
        path: '/*',
        element: <Navigate to="/" replace/>
    }
])

const App = () => {
    const locale = useAppSelector(selectLanguage)

    useEffect(() => {
        document.documentElement.lang = locale
    }, [locale])

    return (
        <>
            <IntlProvider locale={locale} defaultLocale="en-US" messages={messages[locale]}>
                <RouterProvider router={router}/>
            </IntlProvider>
        </>
    );
};

export default App;