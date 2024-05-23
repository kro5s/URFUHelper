import React, {useRef, useState} from 'react';
import {FormattedMessage} from "react-intl";
import {useAppDispatch, useAppSelector, useCloseByClickingOutside} from "../../../hooks/hooks";
import {localizationsActions, selectLanguage} from "../../../store/slices/localizationSlice";
import {Locales} from "../../../types/types";

const Welcome = () => {
    const dispatch = useAppDispatch()
    const [dropdownOpened, setDropdownOpened] = useState(false)
    const language = useAppSelector(selectLanguage)
    const dropdownParent = useRef(null)

    useCloseByClickingOutside(dropdownOpened, setDropdownOpened, dropdownParent)

    const changeLanguage = (language: Locales) => {
        return () => {
            dispatch(localizationsActions.changeLocalization(language))
        }
    }

    return (
        <section className="py-28 text-center">
            <img className="mx-auto" src={require("../../../assets/images/welcome.png")} alt="Greetings in different languages"/>
            <h1 className="pt-24 pb-6 text-4xl font-semibold"><FormattedMessage id="get_help_adaptation" /></h1>
            <p className="text-black/[0.2] text-xl font-medium"><FormattedMessage id="you_can_choose" /></p>
            <div ref={dropdownParent} className="mt-12 relative w-fit mx-auto" >
                <div className="inline-flex items-center gap-x-6 cursor-pointer" onClick={() => setDropdownOpened(!dropdownOpened)}>
                    <img src={require(`../../../assets/flags/${language}.png`)} alt="flag"
                         className="w-24 h-16 rounded-2xl border border-black/[0.2]"/>
                    <button>
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.545952 0.0480448C0.0986585 0.175201 -0.131664 0.696236 0.0786304 1.10562C0.148729 1.24518 6.69457 7.70847 6.87816 7.82012C7.01836 7.90696 7.34548 8 7.49903 8C7.65258 8 7.97971 7.90696 8.1199 7.82012C8.30349 7.70847 14.8493 1.24518 14.9194 1.10562C15.0696 0.810987 15.0062 0.457427 14.7592 0.231027C14.4888 -0.0201852 15.103 -0.00157741 7.48568 0.00152397C1.59075 0.00152397 0.686149 0.00772684 0.545952 0.0480448Z"
                                fill="#303030"/>
                        </svg>
                    </button>
                </div>
                {
                    dropdownOpened &&
                    <div
                        className="px-6 py-4 border border-primary-black/[0.2] absolute top-20 left-0 bg-white rounded-2xl text-left">
                        <ul className="space-y-3">
                            <li className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                onClick={changeLanguage(Locales.ENGLISH)}>
                                English
                            </li>
                            <li className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                onClick={changeLanguage(Locales.RUSSIAN)}>
                                Русский
                            </li>
                            <li className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                onClick={changeLanguage(Locales.ARABIAN)}>
                                العربية
                            </li>
                            <li className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                onClick={changeLanguage(Locales.SPANISH)}>
                                Español
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </section>
    );
};

export default Welcome;