import React, {useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useAppSelector} from "../hooks/hooks";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import {FormattedMessage, useIntl} from "react-intl";
import {selectLanguage} from "../store/slices/localizationSlice";
import {useGetExperiencesQuery} from "../store/slices/apiSlice";
import Alert from "../components/ui/Alert/Alert";

const ExperiencesRoute = () => {
    const intl = useIntl()
    const language = useAppSelector(selectLanguage)
    const [errorAlertVisible, setErrorAlertVisible] = useState(false)

    const { data: experiences = [] } = useGetExperiencesQuery(language)
    const filteredExperiences = experiences.filter(experience => experience.language === language)

    return (
        <Layout>
            <section className="pt-12 pb-32">
                <div className="my-container">
                    <h1 className="text-center font-semibold text-4xl"><FormattedMessage id="explore_share_experience"/></h1>
                    <div className="text-center my-10"><button className="bg-accent text-white px-4 py-2 rounded-xl font-medium" onClick={() => setErrorAlertVisible(true)}><FormattedMessage id="share_your_experience" /></button></div>
                    {
                        filteredExperiences.length > 0
                            ?
                            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-6 gap-y-10 mt-16">
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
            {
                errorAlertVisible && <Alert title={intl.formatMessage({ id: "alert_error_auth" })} />
            }
        </Layout>
    );
};

export default ExperiencesRoute;