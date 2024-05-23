import React, {useEffect} from 'react';
import Button, {ButtonTypes} from "../../ui/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {fetchQuestions, selectNQuestions} from "../../../store/slices/questionsSlice";
import Question from "../../Question/Question";
import {FormattedMessage} from "react-intl";
import {selectLanguage} from "../../../store/slices/localizationSlice";

const Questions = () => {
    const dispatch = useAppDispatch()
    const language = useAppSelector(selectLanguage)
    const questions = useAppSelector(state => selectNQuestions(state, 5))

    useEffect(() => {
        dispatch(fetchQuestions({lang: language}))
    }, [language]);

    return (
        <section className="bg-primary-black py-28 text-white text-center">
            <h2 className="text-4xl font-semibold"><FormattedMessage id="popular_questions" /></h2>
            <div className="flex flex-col max-w-[970px] my-20 mx-auto gap-y-8">
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