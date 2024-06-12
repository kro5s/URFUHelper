import React from 'react';
import {FormattedMessage} from "react-intl";
import LanguageSelect from "../../LanguageSelect/LanguageSelect";

const Welcome = () => {
    return (
        <section className="pt-14 pb-20 md:py-28 text-center">
            <div className="my-container">
                <img className="mx-auto px-2.5" src={require("../../../assets/images/welcome.png")}
                     alt="Greetings in different languages" width="678" height="385"/>
                <h1 className="pt-24 pb-6 text-2xl md:text-4xl font-semibold"><FormattedMessage
                    id="get_help_adaptation"/>
                </h1>
                <p className="text-black/[0.2] text-lg font-regular md:text-xl md:font-medium"><FormattedMessage
                    id="you_can_choose"/></p>
                <LanguageSelect className="flex justify-center mt-10" enlarged={true} />
            </div>
        </section>
    );
};

export default Welcome;