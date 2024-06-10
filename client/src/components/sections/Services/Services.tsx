import React, {ChangeEvent, useMemo, useRef, useState} from 'react';
import Search from "../../ui/Search/Search";
import {InstitutesTypes} from "../../../types/types";
import {useAppSelector} from "../../../hooks/hooks";
import ServiceCard from "../../ServiceCard/ServiceCard";
import {useNavigate, useSearchParams} from "react-router-dom";
import {selectLanguage} from "../../../store/slices/localizationSlice";
import {FormattedMessage, useIntl} from "react-intl";
import {useGetServicesQuery} from "../../../store/slices/apiSlice";
import DropdownMenu from "../../ui/DropdownMenu/DropdownMenu";

const Services = () => {
    const intl = useIntl()
    const language = useAppSelector(selectLanguage)
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const [query, setQuery] = useState('');

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const [instituteFilter, setInstituteFilter] = useState<InstitutesTypes>(params.get("filter") as InstitutesTypes || InstitutesTypes.IRIT);
    const [instituteFilterOpened, setInstituteFilterOpened] = useState(false);
    const dropdownInstituteFilter = useRef(null);

    const handleFilterOpen = () => {
        setInstituteFilterOpened(!instituteFilterOpened);
    }

    const changeFilter = (filter: InstitutesTypes) => {
        return () => {
            setInstituteFilter(filter)
            setInstituteFilterOpened(false)
            navigate("/services", {replace: true})
        }
    }

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
                <div ref={dropdownInstituteFilter} className="text-center relative text-sm font-semibold">
                    <div className="inline-flex items-center gap-x-4 cursor-pointer"
                         onClick={handleFilterOpen}>
                        <span><FormattedMessage id="institute"/>:</span>
                        <div className="flex items-center gap-x-2">
                            <span>{instituteFilter ? instituteFilter : "All"}</span>
                            <svg className={instituteFilterOpened ? "transition -rotate-180" : "transition"} width="9"
                                 height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.327571 0.0300283C0.0591951 0.109501 -0.0789986 0.435148 0.0471782 0.691011C0.0892372 0.778238 4.01674 4.81779 4.1269 4.88757C4.21101 4.94185 4.40729 5 4.49942 5C4.59155 5 4.78782 4.94185 4.87194 4.88757C4.9821 4.81779 8.9096 0.778238 8.95166 0.691011C9.04178 0.506867 9.00373 0.285892 8.85552 0.144392C8.6933 -0.0126152 9.06181 -0.000985622 4.49141 0.000952721C0.95445 0.000952721 0.411689 0.00482988 0.327571 0.0300283Z"
                                    fill="#303030"/>
                            </svg>
                        </div>
                    </div>
                    <DropdownMenu parent={dropdownInstituteFilter} opened={instituteFilterOpened}
                                  setOpened={setInstituteFilterOpened} className="w-[400px] px-6 py-4 border border-primary-black/[0.2] bg-white rounded-2xl text-left space-y-3">
                        <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                           onClick={changeFilter(InstitutesTypes.IRIT)}><FormattedMessage
                            id="IRIT"/></DropdownMenu.Item>
                        <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                           onClick={changeFilter(InstitutesTypes.INMT)}><FormattedMessage
                            id="INMT"/></DropdownMenu.Item>
                    </DropdownMenu>
                </div>
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