import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {Locales} from "../../../types/types";
import {localizationsActions, selectLanguage} from "../../../store/slices/localizationSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import DropdownMenu, {DropdownPosition} from "../../ui/DropdownMenu/DropdownMenu";
import LanguageSelect from "../../LanguageSelect/LanguageSelect";

const Header = () => {
    const isMobile = window.innerWidth <= 768

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
                    <li><Link to="/experience" className="hover:underline"><FormattedMessage id="exchange_experience"/></Link></li>
                    <li><Link to="/questions" className="hover:underline"><FormattedMessage id="popular_questions"/></Link></li>
                </ul>
                <div className="w-full h-[1px] bg-black/[0.2] left-1/2 -translate-x-1/2 -bottom-10 absolute"
                     aria-hidden></div>
            </div>
            <MobileMenu/>
            <LanguageSelect position={isMobile ? undefined : DropdownPosition.RIGHT} className="flex-shrink-0" />
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
                          className="px-6 py-4 border border-primary-black/[0.2] rounded-2xl bg-white"
                          position={DropdownPosition.RIGHT}
            >
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded">
                    <Link to="/services" className="hover:underline"><FormattedMessage id="services"/></Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded">
                    <Link to="/experience" className="hover:underline"><FormattedMessage
                        id="exchange_experience"/></Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded">
                    <Link to="/questions" className="hover:underline"><FormattedMessage id="popular_questions"/></Link>
                </DropdownMenu.Item>
            </DropdownMenu>
        </div>
    );
}

export default Header;