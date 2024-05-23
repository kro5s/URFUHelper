import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {Locales} from "../../../types/types";
import {localizationsActions, selectLanguage} from "../../../store/slices/localizationSlice";
import {useAppDispatch, useAppSelector, useCloseByClickingOutside} from "../../../hooks/hooks";

const Header = () => {
    const dispatch = useAppDispatch()
    const locale = useAppSelector(selectLanguage)

    const [languageSelectOpened, setLanguageSelectOpened] = useState(false)
    const languageSelect = useRef(null)

    const changeLanguage = (language: Locales) => {
        return () => {
            dispatch(localizationsActions.changeLocalization(language))
        }
    }

    useCloseByClickingOutside(languageSelectOpened, setLanguageSelectOpened, languageSelect)

    return (
        <header className="py-6 px-10 relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-10 z-10">
                <Link to="/">
                    <div><img src={require('../../../assets/logo.png')} alt="URFU Helper" className="w-[40px]"/></div>
                </Link>
            </div>
            <div className="relative">
                <ul className="flex items-center justify-center gap-x-12 font-semibold texl-xl">
                    <li><Link to="/services" className="hover:underline"><FormattedMessage id="services" /></Link></li>
                    <li><Link to="/experience" className="hover:underline"><FormattedMessage id="exchange_experience" /></Link></li>
                    <li><Link to="/questions" className="hover:underline"><FormattedMessage id="popular_questions" /></Link></li>
                </ul>
                <div className="w-1/3 h-[1px] bg-black/[0.2] left-1/2 -translate-x-1/2 -bottom-10 absolute" aria-hidden></div>
            </div>
            <ul className="flex items-center gap-x-6 absolute top-1/2 -translate-y-1/2 right-10">
                {/*<li>*/}
                {/*    <button className="flex items-center">*/}
                {/*        <svg width="17" height="20" viewBox="0 0 17 20" fill="none"*/}
                {/*             xmlns="http://www.w3.org/2000/svg">*/}
                {/*            <path*/}
                {/*                d="M7.95996 0.0761051C7.59274 0.271435 7.49117 0.513645 7.49117 1.21293V1.71297L7.34662 1.73641C5.15111 2.10754 3.31891 3.77176 2.70557 5.95165C2.53758 6.53764 2.52196 6.72906 2.49071 8.69018C2.46336 10.5536 2.45945 10.6161 2.36179 11.0146C2.06879 12.2218 1.49061 13.2023 0.599906 13.9993C0.115486 14.4368 -0.0798443 14.9329 0.0295408 15.4799C0.123299 15.9643 0.404575 16.3237 0.849929 16.5386L1.10386 16.6597H8.35062H15.5974L15.8513 16.5386C16.6014 16.1792 16.9061 15.3236 16.5545 14.5774C16.4686 14.3899 16.3318 14.2258 15.9412 13.8391C15.0739 12.9796 14.6207 12.1749 14.3395 11.0146C14.2418 10.6161 14.2379 10.5536 14.2105 8.69018C14.1793 6.72906 14.1637 6.53764 13.9957 5.95165C13.5699 4.43979 12.5385 3.13498 11.1868 2.38491C10.6399 2.0841 9.95624 1.84189 9.35853 1.74032L9.21008 1.71297V1.22074C9.21008 0.951185 9.19054 0.662096 9.1671 0.580057C9.1085 0.384727 8.92489 0.169863 8.73738 0.0761051C8.53814 -0.0254669 8.15138 -0.0254669 7.95996 0.0761051Z"*/}
                {/*                fill="#303030"/>*/}
                {/*            <path*/}
                {/*                d="M5.2644 17.5152C5.2644 17.5816 5.44801 18.105 5.53005 18.2613C5.83086 18.859 6.34263 19.3786 6.91299 19.6638C7.41304 19.9138 7.78026 19.9998 8.35063 19.9998C8.92099 19.9998 9.28821 19.9138 9.78826 19.6638C10.3586 19.3786 10.8704 18.859 11.1712 18.2613C11.2532 18.105 11.4368 17.5816 11.4368 17.5152C11.4368 17.5073 10.05 17.4995 8.35063 17.4995C6.65516 17.4995 5.2644 17.5073 5.2644 17.5152Z"*/}
                {/*                fill="#303030"/>*/}
                {/*        </svg>*/}
                {/*    </button>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <button className="flex items-center">*/}
                {/*        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"*/}
                {/*             xmlns="http://www.w3.org/2000/svg">*/}
                {/*            <path*/}
                {/*                d="M6.15544 0.241779C4.10112 0.995031 2.75439 2.9124 2.75439 5.01238V6.10802H4.00981C5.26523 6.10802 5.26523 6.10802 5.26523 5.42324C5.26523 4.46456 5.81305 3.23196 6.36087 2.93523C6.65761 2.77545 8.5065 2.68414 11.1999 2.68414C15.514 2.68414 15.5597 2.68414 16.1075 3.25479L16.6781 3.80261V9.98841V16.1742L16.0847 16.722C15.4684 17.2927 15.4227 17.2927 11.1543 17.2927C8.48368 17.2927 6.65761 17.2014 6.36087 17.0416C5.79023 16.7448 5.26523 15.4894 5.26523 14.4394V13.6405H4.00981H2.75439V14.8731C2.75439 16.6307 3.66743 18.3198 5.15111 19.2329L6.24675 19.9176L10.5152 19.9861C13.3227 20.0318 15.126 19.9633 15.7879 19.8035C17.089 19.4383 18.8009 17.7492 19.1662 16.4938C19.4857 15.3525 19.5085 4.69281 19.189 3.62C18.8466 2.43306 17.9107 1.22329 16.8379 0.606993C15.9249 0.0819988 15.6738 0.0591736 11.4282 0.0135212C8.16411 -0.0321312 6.74891 0.0363464 6.15544 0.241779Z"*/}
                {/*                fill="#303030"/>*/}
                {/*            <path*/}
                {/*                d="M8.46097 6.45043V7.70585H4.58059H0.700195V9.76018V11.8145H4.58059H8.43815L8.50663 13.2982L8.5751 14.759L11.5196 12.4993C13.1631 11.2439 14.5783 10.2167 14.6924 10.2167C14.8066 10.2167 14.8522 10.1254 14.8066 10.0113C14.7381 9.783 8.78054 5.19501 8.5751 5.19501C8.50663 5.19501 8.46097 5.76566 8.46097 6.45043Z"*/}
                {/*                fill="#303030"/>*/}
                {/*        </svg>*/}
                {/*    </button>*/}
                {/*</li>*/}
                <li ref={languageSelect} className="flex items-center gap-x-2 cursor-pointer relative" onClick={() => setLanguageSelectOpened(!languageSelectOpened)}>
                    <img src={require(`../../../assets/flags/${locale}.png`)} alt="flag"
                         className="rounded w-[30px] h-[20px]"/>
                    <button>
                        <svg className={languageSelectOpened ? "-rotate-180 transition" : "transition"} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.708655 0.400043C0.470098 0.483698 0.347259 0.826484 0.459417 1.09581C0.496802 1.18763 3.98792 5.4398 4.08583 5.51325C4.1606 5.57038 4.33507 5.63159 4.41696 5.63159C4.49886 5.63159 4.67332 5.57038 4.74809 5.51325C4.84601 5.4398 8.33712 1.18763 8.37451 1.09581C8.45462 0.901978 8.4208 0.669373 8.28906 0.520425C8.14486 0.355155 8.47243 0.367397 4.40984 0.369437C1.26588 0.369437 0.783426 0.373518 0.708655 0.400043Z"
                                fill="#303030"/>
                        </svg>
                    </button>
                    {
                        languageSelectOpened &&
                        <div
                            className="px-6 py-4 border border-primary-black/[0.2] absolute top-10 right-0 bg-white rounded-2xl text-left">
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
                </li>
            </ul>
        </header>
    );
};

export default Header;