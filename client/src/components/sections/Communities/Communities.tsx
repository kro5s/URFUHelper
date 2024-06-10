import React from 'react';
import Button from "../../ui/Button/Button";
import {useAppSelector} from "../../../hooks/hooks";
import Community from "../../Community/Community";
import {selectNCommunities} from "../../../store/slices/communitiesSlice";
import {FormattedMessage} from "react-intl";

const Communities = () => {
    const communities = useAppSelector(state => selectNCommunities(state, 3))

    return (
        <section className="py-24 md:py-32 text-center">
            <div className="my-container">
                <div><span className="font-semibold text-3xl md:text-4xl"><FormattedMessage id="did_you_know"/></span>
                </div>
                <h2 className="font-medium text-xl md:text-2xl mt-8 mb-20"><FormattedMessage id="many_communities"/>
                </h2>
                <ul className="flex gap-8 justify-center items-center flex-col md:flex-row md:items-stretch">
                    {
                        communities.map(community => (
                            <li className="even:hidden md:even:block" key={community.id}><Community
                                country={community.country} vkLink={community.vkLink}
                                flag={community.countryImg}
                                img={community.logoImg}/></li>
                        ))
                    }
                </ul>
                <Button link="/communities" className="mt-20"><FormattedMessage id="find_communities"/></Button>
                <div className="text-xl mt-2 md:text-base"><span><FormattedMessage id="also_check"/> <a
                    href="https://vk.com/adaptationurfu" target="_blank"
                    className="text-[#0072C9]/[0.8]"><FormattedMessage id="this"/></a></span></div>
            </div>
        </section>
    );
};

export default Communities;