import React, {ChangeEvent, useMemo, useState} from 'react';
import Search from "../../ui/Search/Search";
import {InstitutesTypes} from "../../../types/types";
import {useAppSelector} from "../../../hooks/hooks";
import ServiceCard from "../../ServiceCard/ServiceCard";
import {useSearchParams} from "react-router-dom";
import {selectLanguage} from "../../../store/slices/localizationSlice";
import {FormattedMessage, useIntl} from "react-intl";
import {useGetServicesQuery} from "../../../store/slices/apiSlice";
import InstituteSelect from "./InstituteSelect";

const Services = () => {
    const intl = useIntl()
    const language = useAppSelector(selectLanguage)
    const [params] = useSearchParams();

    const [query, setQuery] = useState('');

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const [instituteFilter, setInstituteFilter] = useState<InstitutesTypes>(params.get("filter") as InstitutesTypes || InstitutesTypes.IRIT);

    const {data: services = []} = useGetServicesQuery(language)

    const filteredServices = useMemo(() => {
        return services.filter(service => {
            const instituteFiltered = instituteFilter ? service.institute === instituteFilter : true;
            return service.name.toLowerCase().includes(query.toLowerCase()) && instituteFiltered;
        })
    }, [services, instituteFilter, query])


    return (
        <section className="pt-12 pb-32">
            <div className="my-container">
                <h2 className="font-semibold text-4xl text-center"><FormattedMessage id="services"/></h2>
                <Search onChange={handleQueryChange} query={query} placeholder={intl.formatMessage({id: "enter_service"})}
                        className="mt-10 mb-6"/>
                <InstituteSelect instituteFilter={instituteFilter} setInstituteFilter={setInstituteFilter} />
                {
                    filteredServices.length > 0
                        ?
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-x-20 gap-y-12 max-w-[1170px] mx-auto py-12">
                            {
                                filteredServices.map(service => (
                                    <ServiceCard key={service.id} img={service.img} name={service.name}
                                                 content={service.content} id={service.id}/>
                                ))
                            }
                        </div>
                        :
                        <div className="text-center py-12 font-semibold text-primary-black/[0.2]"><FormattedMessage
                            id="service_not_found"/></div>
                }
            </div>
        </section>
    );
};

export default Services;