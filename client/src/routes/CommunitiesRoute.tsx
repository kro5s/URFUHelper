import React, {ChangeEvent, useState} from 'react';
import Layout from "../components/Layout/Layout";
import Search from "../components/ui/Search/Search";
import {useAppSelector} from "../hooks/hooks";
import {selectAllCommunities} from "../store/slices/communitiesSlice";
import Community from "../components/Community/Community";
import {FormattedMessage, useIntl} from "react-intl";

const CommunitiesRoute = () => {
    const intl = useIntl()

    const [query, setQuery] = useState('');
    const communities = useAppSelector(selectAllCommunities);

    const filteredCommunities = communities.filter(community => community.country.toLowerCase().includes(query.toLowerCase()))

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <Layout>
            <section className="pt-12 pb-32">
                <div className="my-container">
                    <h1 className="text-center font-semibold text-4xl"><FormattedMessage id="find_community" /></h1>
                    <Search onChange={handleQueryChange} query={query} placeholder={intl.formatMessage({ id: "enter_community" })} className="mt-10 mb-16" />
                    {
                        filteredCommunities.length > 0
                            ?
                            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] max-w-[970px] mx-auto gap-x-6 gap-y-10 justify-items-center">
                                {
                                    filteredCommunities.map(community => (
                                        <Community key={community.id} country={community.country} vkLink={community.vkLink}
                                                   flag={community.countryImg}
                                                   img={community.logoImg}/>
                                    ))
                                }
                            </div>
                            :
                            <h2 className="font-semibold text-primary-black/[.2] text-center"><FormattedMessage id="community_not_found" /></h2>
                    }
                </div>
            </section>
        </Layout>
    );
};

export default CommunitiesRoute;