import React, {useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {localizationsActions, selectLanguage} from "../../store/slices/localizationSlice";
import {Locales} from "../../types/types";
import DropdownMenu, {DropdownPosition} from "../ui/DropdownMenu/DropdownMenu";

interface LanguageSelectProps {
    className?: string,
    enlarged?: boolean,
    position?: DropdownPosition
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({className, enlarged = false, position}) => {
    const dispatch = useAppDispatch()
    const locale = useAppSelector(selectLanguage)

    const [languageSelectOpened, setLanguageSelectOpened] = useState(false)
    const languageSelect = useRef(null)

    const changeLanguage = (language: Locales) => {
        return () => {
            dispatch(localizationsActions.changeLocalization(language))
        }
    }

    return (
        <div ref={languageSelect} className={`relative ${className ?? ''}`}>
            <div className="cursor-pointer flex items-center gap-x-2"
                 onClick={() => setLanguageSelectOpened(!languageSelectOpened)}>
                <img src={require(`../../assets/flags/${locale}.png`)} alt="flag"
                     className={`${enlarged ? "w-[80px] h-[50px] rounded-xl" : "w-[30px] h-[20px] rounded"}`}/>
                <button>
                    <svg className={languageSelectOpened ? "-rotate-180 transition" : "transition"} width="9"
                         height="6"
                         viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.708655 0.400043C0.470098 0.483698 0.347259 0.826484 0.459417 1.09581C0.496802 1.18763 3.98792 5.4398 4.08583 5.51325C4.1606 5.57038 4.33507 5.63159 4.41696 5.63159C4.49886 5.63159 4.67332 5.57038 4.74809 5.51325C4.84601 5.4398 8.33712 1.18763 8.37451 1.09581C8.45462 0.901978 8.4208 0.669373 8.28906 0.520425C8.14486 0.355155 8.47243 0.367397 4.40984 0.369437C1.26588 0.369437 0.783426 0.373518 0.708655 0.400043Z"
                            fill="#303030"/>
                    </svg>
                </button>
            </div>
            <DropdownMenu parent={languageSelect} opened={languageSelectOpened} setOpened={setLanguageSelectOpened}
                          position={position}
                          className={`px-6 py-4 border border-primary-black/[0.2] bg-white rounded-2xl text-left space-y-3 ${enlarged ? 'mt-10' : ''}`}>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                   onClick={changeLanguage(Locales.ENGLISH)}>English</DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                   onClick={changeLanguage(Locales.RUSSIAN)}>Русский</DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                   onClick={changeLanguage(Locales.ARABIAN)}>العربية</DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                   onClick={changeLanguage(Locales.SPANISH)}>Español</DropdownMenu.Item>
            </DropdownMenu>
        </div>
    );
}

export default LanguageSelect;