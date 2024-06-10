import React from 'react';
import Button from "../../ui/Button/Button";
import ExperienceCard from "../../ExperienceCard/ExperienceCard";
import {useAppSelector} from "../../../hooks/hooks";
import {FormattedMessage} from "react-intl";
import {selectLanguage} from "../../../store/slices/localizationSlice";
import {useGetExperiencesQuery} from "../../../store/slices/apiSlice";

const Experience = () => {
    const language = useAppSelector(selectLanguage)

    const { data: experiences = [] } = useGetExperiencesQuery(language)
    const isMobile = window.innerWidth <= 768
    const experiencesToRender = isMobile ? 2 : 4

    const filteredExperiences = experiences.slice(0, experiencesToRender).filter(experience => experience.language === language)
    
    return (
        <section className="py-20 md:py-28">
            <div className="my-container text-center">
                <h2 className="text-4xl font-semibold"><FormattedMessage id="share_experience" /></h2>
                {
                    filteredExperiences.length > 0
                        ?
                        <div className="grid gap-x-7 gap-y-12 my-16 grid-cols-1 md:grid-cols-2">
                            {
                                filteredExperiences.map(experience => (
                                    <ExperienceCard key={experience.id} avatar={experience.img}
                                                    name={experience.name} text={experience.content}/>
                                ))

                            }
                        </div>
                        :
                        <h2 className="text-center text-primary-black/[.2] font-semibold my-10"><FormattedMessage
                            id="no_reviews"/></h2>
                }
                <Button link="/experience"><FormattedMessage id="all_reviews" /></Button>
            </div>
        </section>
    );
};

export default Experience;