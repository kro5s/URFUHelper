import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {Locales} from "../../../types/types";
import {localizationsActions, selectLanguage} from "../../../store/slices/localizationSlice";
import {useAppDispatch, useAppSelector, useCloseByClickingOutside} from "../../../hooks/hooks";
import DropdownMenu, {DropdownPosition} from "../../ui/DropdownMenu/DropdownMenu";

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
        <header className="py-6 px-10 flex justify-between items-center">
            <div className="flex-shrink-0">
                <Link to="/">
                    <div><img src={require('../../../assets/logo.png')} alt="URFU Helper" className="w-[40px]"/></div>
                </Link>
            </div>
            <div className="relative hidden md:block">
                <ul className="flex items-center justify-center gap-x-8 lg:gap-x-12 font-semibold texl-xl">
                    <li><Link to="/services" className="hover:underline"><FormattedMessage id="services"/></Link></li>
                    <li><Link to="/experience" className="hover:underline"><FormattedMessage id="exchange_experience"/></Link>
                    </li>
                    <li><Link to="/questions" className="hover:underline"><FormattedMessage
                        id="popular_questions"/></Link></li>
                </ul>
                <div className="w-full h-[1px] bg-black/[0.2] left-1/2 -translate-x-1/2 -bottom-10 absolute"
                     aria-hidden></div>
            </div>
            <MobileMenu />
            <div ref={languageSelect} className="flex-shrink-0 flex items-center gap-x-2 cursor-pointer relative"
                 onClick={() => setLanguageSelectOpened(!languageSelectOpened)}>
                <img src={require(`../../../assets/flags/${locale}.png`)} alt="flag"
                     className="rounded w-[30px] h-[20px]"/>
                <button>
                    <svg className={languageSelectOpened ? "-rotate-180 transition" : "transition"} width="9" height="6"
                         viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.708655 0.400043C0.470098 0.483698 0.347259 0.826484 0.459417 1.09581C0.496802 1.18763 3.98792 5.4398 4.08583 5.51325C4.1606 5.57038 4.33507 5.63159 4.41696 5.63159C4.49886 5.63159 4.67332 5.57038 4.74809 5.51325C4.84601 5.4398 8.33712 1.18763 8.37451 1.09581C8.45462 0.901978 8.4208 0.669373 8.28906 0.520425C8.14486 0.355155 8.47243 0.367397 4.40984 0.369437C1.26588 0.369437 0.783426 0.373518 0.708655 0.400043Z"
                            fill="#303030"/>
                    </svg>
                </button>
                {
                    languageSelectOpened &&
                    <div
                        className="px-6 py-4 border border-primary-black/[0.2] absolute top-10 -right-8 md:right-0 bg-white rounded-2xl text-left">
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
        </header>
    );
};

const MobileMenu = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const menu = useRef(null)

    return (
        <div ref={menu} className="flex md:hidden order-1 items-center relative">
            <button onClick={() => setMenuOpened(!menuOpened)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                     viewBox="0 -960 960 960" width="24px" fill="##303030">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </button>
            <DropdownMenu parent={menu} opened={menuOpened} setOpened={setMenuOpened}
                          className="px-6 py-4 border border-primary-black/[0.2] rounded-2xl bg-white" position={DropdownPosition.RIGHT}
            >
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded">
                    <Link to="/services" className="hover:underline"><FormattedMessage id="services"/></Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded">
                    <Link to="/experience" className="hover:underline"><FormattedMessage id="exchange_experience"/></Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded">
                    <Link to="/questions" className="hover:underline"><FormattedMessage id="popular_questions"/></Link>
                </DropdownMenu.Item>
            </DropdownMenu>
        </div>
    );
}

export default Header;