import React, {ChangeEvent, useState} from 'react';
import Layout from "../components/Layout/Layout";
import Search from "../components/ui/Search/Search";
import {useAppSelector} from "../hooks/hooks";
import Question from "../components/Question/Question";
import {selectLanguage} from "../store/slices/localizationSlice";
import {FormattedMessage, useIntl} from "react-intl";
import {useGetQuestionsQuery} from "../store/slices/apiSlice";

const QuestionsRoute = () => {
    const language = useAppSelector(selectLanguage)
    const intl = useIntl()

    const [query, setQuery] = useState('')
    const { data: questions = [] } = useGetQuestionsQuery(language)

    const filteredQuestions = questions.filter(question => question.question.toLowerCase().includes(query.toLowerCase()))

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    return (
        <Layout>
            <section className="pt-12 pb-32">
                <div className="my-container">
                    <h1 className="text-4xl font-semibold text-center"><FormattedMessage id="find_answers" /></h1>
                    <Search onChange={handleQueryChange} query={query} placeholder={intl.formatMessage({ id: "enter_question" })} className="w-full mt-10 mb-24"/>
                    {
                        filteredQuestions.length > 0
                            ?
                            <div className="flex flex-col gap-y-12 max-w-[970px] mx-auto">
                                {
                                    filteredQuestions.map(({id, question, answer}) => (
                                        <Question key={id} question={question} answer={answer} dark/>
                                    ))
                                }
                            </div>
                            :
                            <h2 className="text-center font-semibold text-primary-black/[.2]"><FormattedMessage id="question_not_found" /></h2>
                    }
                </div>
            </section>
        </Layout>
    );
};

export default QuestionsRoute;