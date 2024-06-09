import React from 'react';
import {useCloseByClickingOutside} from "../../../hooks/hooks";

export enum DropdownPosition {
    RIGHT,
    LEFT
}

interface MenuProps {
    className?: string;
    children: React.ReactNode;
    parent: React.MutableRefObject<null>;
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    position?: DropdownPosition;
}

const DropdownMenu = ({className, children, parent, opened, setOpened, position}: MenuProps) => {
    useCloseByClickingOutside(opened, setOpened, parent)

    let positionClasses

    switch (position) {
        case DropdownPosition.LEFT: {
            positionClasses = "left-0"
            break
        }
        case DropdownPosition.RIGHT: {
            positionClasses = "right-0"
            break
        }
        default: {
            positionClasses = "left-1/2 -translate-x-1/2"
        }
    }

    return (
        opened
            ?
        <ul className={`w-[200px] absolute top-10 ${positionClasses} ${className ?? ''}`}>
            {children}
        </ul>
            :
            null
    );
};

interface ItemProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const DropdownMenuItem = ({children, className, onClick}: ItemProps) => {
    return (
        <li onClick={onClick} className={className ?? ''}>{children}</li>
    );
}

DropdownMenu.Item = DropdownMenuItem

export default DropdownMenu;