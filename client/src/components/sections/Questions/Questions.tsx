import React from 'react';
import Button, {ButtonTypes} from "../../ui/Button/Button";
import {useAppSelector} from "../../../hooks/hooks";
import Question from "../../Question/Question";
import {FormattedMessage} from "react-intl";
import {selectLanguage} from "../../../store/slices/localizationSlice";
import {useGetQuestionsQuery} from "../../../store/slices/apiSlice";

const Questions = () => {
    const language = useAppSelector(selectLanguage)

    let { data: questions = [] } = useGetQuestionsQuery(language)

    questions = questions.slice(0, 5)

    return (
        <section className="bg-primary-black py-20 md:py-28 text-white text-center">
            <h2 className="text-4xl font-semibold"><FormattedMessage id="popular_questions" /></h2>
            <div className="flex flex-col max-w-[970px] my-20 mx-auto gap-y-8 px-6">
                {
                    questions.map(({id, question, answer}) => (
                        <Question key={id} question={question} answer={answer} />
                    ))
                }
            </div>
            <Button link="/questions" type={ButtonTypes.ACCENT}><FormattedMessage id="other_questions" /></Button>
        </section>
    );
};

export default Questions;