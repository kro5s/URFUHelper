import React from 'react';
import Layout from "../components/Layout/Layout";
import Welcome from "../components/sections/Welcome/Welcome";
import Features from "../components/sections/Features/Features";
import Communities from "../components/sections/Communities/Communities";
import Institutes from "../components/sections/Institutes/Institutes";
import Experience from "../components/sections/Experience/Experience";
import Questions from "../components/sections/Questions/Questions";
import ContactUs from "../components/sections/ContactUs/ContactUs";

const RootRoute = () => {


    return (
        <Layout>
            <Welcome />
            <Features />
            <Communities />
            <Institutes />
            <Experience />
            <Questions />
            <ContactUs />
        </Layout>
    );
};

export default RootRoute;