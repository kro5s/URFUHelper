import React from 'react';
import {Link} from "react-router-dom";

interface Props {
    id: number
    img: string;
    name: string;
    content: string;
}

const ServiceCard: React.FC<Props> = ({ img, name, content, id }) => {
    return (
        <Link to={`/services/${id}`}>
            <div className="py-6 px-8 border border-primary-black/[0.2] rounded-3xl">
                <div className="flex items-center gap-x-6">
                    <img src={"http://localhost:8080/" + img} alt={name} className="size-16 flex-shrink-0 object-contain"/>
                    <span className="font-semibold text-2xl line-clamp-2">{name}</span>
                </div>
                <p className="mt-4 font-semibold text-sm line-clamp-6">{content}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;