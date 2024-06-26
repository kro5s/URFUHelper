import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useAppSelector} from "../hooks/hooks";
import {useParams} from "react-router-dom";
import {selectLanguage} from "../store/slices/localizationSlice";
import {IService, Locales} from "../types/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";

const ServiceRoute = () => {
    const language = useAppSelector(selectLanguage)
    const params = useParams()

    const [service, setService] = useState<IService>()

    async function fetchService() {
        const response = await fetch(`/api/services/${params.serviceId}?language=${language}`)
        const json = await response.json()

        setService(json)
    }

    useEffect(() => {
        fetchService()
    }, [language])

    return (
        <Layout>
            <section className="pt-20 pb-32">
                <div className="my-container flex flex-col items-center">
                    {
                        service ?
                            <>
                                <img src={"/images/" + service.img} alt={service.name} className="size-24 object-contain"/>
                                <h1 className="font-semibold text-4xl py-10">{service.name}</h1>
                                <div className={`markdown w-full ${language === Locales.ARABIAN ? "text-right" : ''}`}>
                                    <Markdown remarkPlugins={[remarkBreaks]} rehypePlugins={[rehypeRaw]}>{service.content}</Markdown>
                                </div>
                                <h2 className="font-semibold text-4xl pt-20 pb-10">Linked reviews</h2>
                                <span className="text-xl text-primary-black/[0.2]">There are no linked reviews</span>
                            </>
                            :
                            <h1>Not found</h1>
                    }
                </div>
            </section>
        </Layout>
    );
};

export default ServiceRoute;