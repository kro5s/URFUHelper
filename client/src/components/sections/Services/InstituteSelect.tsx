import React, {useRef, useState} from "react";
import {InstitutesTypes} from "../../../types/types";
import {useNavigate} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import DropdownMenu from "../../ui/DropdownMenu/DropdownMenu";

const InstituteSelect: React.FC<{ instituteFilter: InstitutesTypes, setInstituteFilter: React.Dispatch<React.SetStateAction<InstitutesTypes>> }> = ({ instituteFilter, setInstituteFilter }) => {
    const navigate = useNavigate();

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

    return (
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
                          setOpened={setInstituteFilterOpened}
                          className="w-[400px] px-6 py-4 border border-primary-black/[0.2] bg-white rounded-2xl text-left space-y-3">
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                   onClick={changeFilter(InstitutesTypes.IRIT)}><FormattedMessage
                    id="IRIT"/></DropdownMenu.Item>
                <DropdownMenu.Item className="hover:bg-primary-black/[0.2] cursor-pointer p-2 rounded"
                                   onClick={changeFilter(InstitutesTypes.INMT)}><FormattedMessage
                    id="INMT"/></DropdownMenu.Item>
            </DropdownMenu>
        </div>
    );
}

export default InstituteSelect;