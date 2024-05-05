import React from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {selectReport} from "../../store/slices/reportSlice";
import Report from "../sections/Report/Report";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const reportOpened = useAppSelector(selectReport)

    return (
        <>
            { reportOpened && <Report /> }
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;