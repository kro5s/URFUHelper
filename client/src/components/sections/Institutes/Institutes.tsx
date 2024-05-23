import React from 'react';
import Button, {ButtonTypes} from "../../ui/Button/Button";
import {Link} from "react-router-dom";
import {InstitutesTypes} from "../../../types/types";
import {FormattedMessage, useIntl} from "react-intl";

const Institutes = () => {
    const intl = useIntl()

    return (
        <section className="py-28 bg-primary-black text-center text-white">
            <h2 className="text-4xl font-semibold mb-8"><FormattedMessage id="most_used" /></h2>
            <div><span className="font-medium text-xl"><FormattedMessage id="choose_institute" /></span></div>
            <ul className="flex justify-center mt-10 mb-20 gap-x-8">
                <li>
                    <Link to={`/services?filter=${InstitutesTypes.IRIT}`}>
                        <Institute img={require("../../../assets/institutes/iritrtf.jpg")}
                                   name={intl.formatMessage({ id: "IRIT" })}/>
                    </Link>
                </li>
                <li>
                    <Link to={`/services?filter=${InstitutesTypes.INMT}`}>
                        <Institute
                            img={require("../../../assets/institutes/inmt.jpg")}
                            name={intl.formatMessage({ id: "INMT" })}/>
                    </Link>
                </li>
            </ul>
            <Button link="/services" type={ButtonTypes.ACCENT}><FormattedMessage id="show_more" /></Button>
        </section>
    );
};

const Institute: React.FC<{ img: string; name: string }> = ({img, name}) => {
    return (
        <div className="p-5 border border-accent rounded-3xl w-[250px] h-full">
            <img src={img} alt="institute" className="w-full h-[120px] rounded-3xl object-cover"/>
            <p className="font-medium text-xl line-clamp-5 mt-5">{name}</p>
        </div>
    );
}

export default Institutes;