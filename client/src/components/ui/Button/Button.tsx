import React from 'react';
import {Link} from "react-router-dom";

export enum ButtonTypes {
    ACCENT
}

interface Props {
    link: string;
    children: React.ReactNode;
    type?: ButtonTypes;
    className?: string;
}

const Button: React.FC<Props> = ({ children, type, link, className }) => {
    let buttonClass = `inline-flex rounded-3xl px-8 py-4 font-semibold text-xl text-white ${className ? className : ''}`;

    switch (type) {
        case ButtonTypes.ACCENT: {
            buttonClass += " bg-accent";
            break;
        }
        default: buttonClass += " bg-primary-black";
    }

    return (
        <Link className={buttonClass} to={link}>
            {children}
        </Link>
    );
};

export default Button;