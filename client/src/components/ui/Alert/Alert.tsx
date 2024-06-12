import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";

interface AlertProps {
    title: string
}

const Alert: React.FC<AlertProps> = ({title}) => {
    const [hidden, setHidden] = useState(false)

    setTimeout(() => setHidden(true), 2000)


    const alert = <div
        className={`flex items-center gap-x-3 p-4 text-white rounded-xl bg-red-600 transition duration-[1.4s] ${hidden && "-translate-x-[9999px]"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
            <path
                d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
        {title}
    </div>

    return (
        createPortal(alert, document.querySelector('.alert-layer')!)
    );
}

export default Alert;