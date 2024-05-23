import React, {useEffect, useRef, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {InstitutesTypes, Locales} from "../types/types";
import {useAppDispatch, useAppSelector, useCloseByClickingOutside} from "../hooks/hooks";
import {fetchExperiences, selectAllExperience} from "../store/slices/experienceSlice";
import exp from "node:constants";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import {FormattedMessage} from "react-intl";
import {selectLanguage} from "../store/slices/localizationSlice";

const ExperiencesRoute = () => {
    const dispatch = useAppDispatch()
    const language = useAppSelector(selectLanguage)

    const experiences = useAppSelector(selectAllExperience)
    const filteredExperiences = experiences.filter(experience => experience.language === language)

    useEffect(() => {
        dispatch(fetchExperiences({lang: language}))
    }, [language])

    return (
        <Layout>
            <section className="pt-12 pb-32">
                <div className="my-container">
                    <h1 className="text-center font-semibold text-4xl"><FormattedMessage id="explore_share_experience"/></h1>
                    {
                        filteredExperiences.length > 0
                            ?
                            <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-16">
                                {
                                    filteredExperiences.map(experience => (
                                        <ExperienceCard key={experience.id} avatar={experience.img}
                                                        name={experience.name} text={experience.content}
                                        />
                                    ))
                                }
                            </div>
                            :
                            <h2 className="text-center text-primary-black/[.2] font-semibold mt-16"><FormattedMessage id="no_reviews" /></h2>
                    }
                </div>
            </section>
        </Layout>
    );
};

export default ExperiencesRoute;