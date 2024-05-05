import React from 'react';
import Button from "../../ui/Button/Button";

const Experience = () => {
    return (
        <section className="py-28">
            <div className="my-container text-center">
                <h2 className="text-4xl font-semibold">Share your experience</h2>
                <div className="grid gap-x-7 gap-y-12 grid-cols-2 my-16">
                    <ExperienceCard avatar={require('../../../assets/avatars/johndoe.png')} name="John Doe"
                                    text="Lorem ipsum dolor sit amet consectetur. Suscipit etiam lorem ullamcorper massa aliquam praesent amet donec. Ipsum sed ut ac sed sagittis rhoncus. Sagittis at urna auctor et. Mi venenatis augue curabitur."/>
                    <ExperienceCard avatar={require('../../../assets/avatars/johndoe.png')} name="John Doe"
                                    text="Lorem ipsum dolor sit amet consectetur. Suscipit etiam lorem ullamcorper massa aliquam praesent amet donec. Ipsum sed ut ac sed sagittis rhoncus. Sagittis at urna auctor et. Mi venenatis augue curabitur."/>
                    <ExperienceCard avatar={require('../../../assets/avatars/johndoe.png')} name="John Doe"
                                    text="Lorem ipsum dolor sit amet consectetur. Suscipit etiam lorem ullamcorper massa aliquam praesent amet donec. Ipsum sed ut ac sed sagittis rhoncus. Sagittis at urna auctor et. Mi venenatis augue curabitur."/>
                    <ExperienceCard avatar={require('../../../assets/avatars/johndoe.png')} name="John Doe"
                                    text="Lorem ipsum dolor sit amet consectetur. Suscipit etiam lorem ullamcorper massa aliquam praesent amet donec. Ipsum sed ut ac sed sagittis rhoncus. Sagittis at urna auctor et. Mi venenatis augue curabitur."/>
                </div>
                <Button link="/">All reviews</Button>
            </div>
        </section>
    );
};

const ExperienceCard: React.FC<{ avatar: string; name: string; text: string }> = ({avatar, name, text}) => {
    return (
        <blockquote className="p-10 rounded-[24px] border border-black/[0.2] text-left">
            <div className="flex items-center gap-x-6">
                <img src={avatar} alt={name} className="size-16 rounded-full object-cover"/>
                <span className="font-bold text-2xl">{name}</span>
            </div>
            <p className="mt-8">{text}</p>
        </blockquote>
    );
}

export default Experience;