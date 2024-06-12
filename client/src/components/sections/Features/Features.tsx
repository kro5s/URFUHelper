import React from 'react';
import {useIntl} from "react-intl";
import {ReactComponent as FindServices} from '../../../assets/svgs/FindServices.svg'
import {ReactComponent as QuestionsAnswers} from "../../../assets/svgs/QuestionsAnswers.svg";
import {ReactComponent as ExchangeExperience} from '../../../assets/svgs/ExchangeExperience.svg'

const Features = () => {
    const intl = useIntl()

    return (
        <section className="bg-primary-black pt-24 pb-24 text-white">
            <ul className="my-container flex items-center justify-between flex-col gap-8 md:flex-row md:items-start">
                <li>
                    <Feature title={intl.formatMessage({id: "find_services"})} icon={ <FindServices /> }/>
                </li>
                <li>
                    <Feature title={intl.formatMessage({id: "find_answers"})} icon={ <QuestionsAnswers /> }/>
                </li>
                <li>
                    <Feature title={intl.formatMessage({id: "make_use_experience"})} icon={ <ExchangeExperience /> }/>
                </li>
            </ul>
        </section>
    );
};

const Feature: React.FC<{ title: string; icon: React.ReactNode }> = ({title, icon}) => {
    return (
        <div className="flex flex-col items-center text-center gap-y-10 max-w-[300px]">
            {icon}
            <h3 className="font-semibold text-xl">{title}</h3>
        </div>
    );
}

export default Features;