import React, {useEffect} from 'react';
import Button from "../../ui/Button/Button";
import ExperienceCard from "../../ExperienceCard/ExperienceCard";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {fetchExperiences, selectNExperiences} from "../../../store/slices/experienceSlice";
import {FormattedMessage} from "react-intl";
import {selectLanguage} from "../../../store/slices/localizationSlice";

const Experience = () => {
    const dispatch = useAppDispatch()
    const language = useAppSelector(selectLanguage)
    const experiences = useAppSelector(state => selectNExperiences(state, 4))

    const filteredExperiences = experiences.filter(experience => experience.language === language)

    useEffect(() => {
        dispatch(fetchExperiences({lang: language}))
    }, [language]);
    
    return (
        <section className="py-28">
            <div className="my-container text-center">
                <h2 className="text-4xl font-semibold"><FormattedMessage id="share_experience" /></h2>
                {
                    filteredExperiences.length > 0
                        ?
                        <div className="grid gap-x-7 gap-y-12 grid-cols-2 my-16">
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