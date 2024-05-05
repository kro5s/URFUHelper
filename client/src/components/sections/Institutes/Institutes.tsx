import React from 'react';
import Button, {ButtonTypes} from "../../ui/Button/Button";

const Institutes = () => {
    return (
        <section className="py-28 bg-primary-black text-center text-white">
            <h2 className="text-4xl font-semibold mb-8">See most used study services in your institute</h2>
            <div><span className="font-medium text-xl">Choose your institute:</span></div>
            <ul className="flex items-start justify-center mt-10 mb-20 gap-x-8">
                <li><Institute img={require("../../../assets/institutes/iritrtf.jpg")} name="Institute of Radioelectronics and Information Technology-RTF" /></li>
                <li><Institute img={require("../../../assets/institutes/iritrtf.jpg")} name="Institute of Radioelectronics and Information Technology-RTF" /></li>
                <li><Institute img={require("../../../assets/institutes/iritrtf.jpg")} name="Institute of Radioelectronics and Information Technology-RTF" /></li>
                <li><Institute img={require("../../../assets/institutes/iritrtf.jpg")} name="Institute of Radioelectronics and Information Technology-RTF" /></li>
            </ul>
            <Button link="/" type={ButtonTypes.ACCENT}>Show more</Button>
        </section>
    );
};

const Institute: React.FC<{ img: string; name: string }> = ({ img, name }) => {
    return (
        <div className="p-5 border border-accent rounded-3xl w-[250px]">
            <img src={img} alt="institute" className="w-full h-[120px] rounded-3xl object-cover"/>
            <p className="font-medium text-xl line-clamp-5 mt-5">{name}</p>
        </div>
    );
}

export default Institutes;