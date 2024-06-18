import React from "react";
import {useAppSelector} from "../../hooks/hooks";
import {selectLanguage} from "../../store/slices/localizationSlice";

interface ExperienceCardProps {
    avatar: string; name: string; text: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({avatar, name, text}) => {
    const language = useAppSelector(selectLanguage)

    return (
        <blockquote className="p-10 rounded-[24px] border border-black/[0.2] text-left">
            <div className="flex items-center gap-x-6">
                <img src={`/images/${avatar}`} alt={name} className="size-16 rounded-full object-cover"/>
                <span className="font-bold text-2xl">{name}</span>
                <img src={require(`../../assets/flags/${language}.png`)} alt="Flag" className="w-6 h-4 rounded"/>
            </div>
            <p className="mt-8">{text}</p>
        </blockquote>
    );
}

export default ExperienceCard;