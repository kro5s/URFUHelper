import React from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {reportActions} from "../../../store/slices/reportSlice";

const Report = () => {
    const dispatch = useAppDispatch();

    const handleReportClosing = () => {
        dispatch(reportActions.closeReport(true))
    }

    return (
        <section className="bg-[#222222] py-4 relative">
            <div className="my-container text-center">
                <span className="text-white">
                    Hi, if you found translation issues on this page, you can <a href="#"
                                                                                 className="text-[#0072C9] underline">report it</a>, or <a
                    href="#" className="text-[#0072C9] underline">become our translators team member</a></span>
            </div>
            <button className="absolute top-1/2 -translate-y-1/2 right-10" onClick={handleReportClosing}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.824508 0.0364152C0.599462 0.110263 0.483423 0.184111 0.325187 0.345872C0.075527 0.595548 0.0157493 0.757309 0.0157493 1.16875C0.0157493 1.46765 0.0298146 1.54853 0.100141 1.69623C0.166952 1.83689 0.884285 2.57537 3.74659 5.44136L7.31216 9.01067L3.76065 12.5624C-0.216329 16.5396 0.0262983 16.2653 0.00520023 16.8069C-0.00886513 17.0777 0.00168389 17.1339 0.0860761 17.3238C0.195083 17.5665 0.444743 17.8232 0.676821 17.9251C0.789344 17.9779 0.905384 17.9955 1.15856 17.9955C1.74227 17.9955 1.41174 18.2838 5.44146 14.2574L9 10.6986L12.5621 14.2574C16.5883 18.2838 16.2577 17.9955 16.8414 17.9955C17.0946 17.9955 17.2107 17.9779 17.3232 17.9251C17.5553 17.8232 17.8049 17.5665 17.9139 17.3238C17.9983 17.1339 18.0089 17.0777 17.9948 16.8069C17.9737 16.2653 18.2163 16.5396 14.2393 12.5624L10.6878 9.01067L14.2534 5.44136C17.1157 2.57537 17.833 1.83689 17.8999 1.69623C17.9702 1.54853 17.9843 1.46765 17.9843 1.16875C17.9843 0.876872 17.9702 0.788958 17.9069 0.658846C17.7979 0.437303 17.5623 0.208727 17.3337 0.0997132C17.1685 0.022349 17.0946 0.00828274 16.8239 0.00828274C16.5636 0.00828274 16.4757 0.0258655 16.3316 0.0926801C16.1909 0.159495 15.456 0.873356 12.5796 3.7499L9 7.32272L5.42388 3.7499C2.48774 0.820607 1.8126 0.163011 1.66843 0.0961967C1.45393 -0.00226693 1.03549 -0.0303994 0.824508 0.0364152Z"
                        fill="#FFFAF0"/>
                </svg>
            </button>
        </section>
    );
};

export default Report;