import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {selectReport} from "../../store/slices/reportSlice";
import Report from "../sections/Report/Report";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";
import {useLocation} from "react-router-dom";

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const pathname = useLocation();
    const reportOpened = useAppSelector(selectReport);

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return (
        <>
            { reportOpened && <Report /> }
            <Header />
            <main className="pb-24">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;