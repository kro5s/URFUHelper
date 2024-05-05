import React from 'react';
import Button from "../../ui/Button/Button";

const Communities = () => {
    return (
        <section className="py-32 text-center">
            <div><span className="font-semibold text-4xl">Did you know?</span></div>
            <h2 className="font-medium text-2xl mt-8 mb-20">There are many international student communities that you can join and<br /> follow the news</h2>
            <ul className="flex gap-x-8 justify-center">
                <li><Community country="Kazakhstan" vkLink="https://vk.com/cluburfukz" flag={require('../../../assets/flags/kazakhstan.png')} img={require('../../../assets/communities/kz.jpg')} /></li>
                <li><Community country="Kazakhstan" vkLink="https://vk.com/cluburfukz" flag={require('../../../assets/flags/kazakhstan.png')} img={require('../../../assets/communities/kz.jpg')} /></li>
                <li><Community country="Kazakhstan" vkLink="https://vk.com/cluburfukz" flag={require('../../../assets/flags/kazakhstan.png')} img={require('../../../assets/communities/kz.jpg')} /></li>
            </ul>
            <Button link="/" className="mt-20">Find your community</Button>
            <div><span>also check <a href="https://vk.com/adaptationurfu" target="_blank" className="text-[#0072C9]/[0.8]">this</a></span></div>
        </section>
    );
};

const Community: React.FC<{country: string; vkLink: string; flag: string, img: string}> = ({ country, vkLink, flag, img }) => {
    return (
        <a href={vkLink} target="_blank">
            <div
                className="flex flex-col items-center w-[200px] gap-y-6 border border-black/[0.2] rounded-3xl py-6 px-10 hover:border-accent transition">
                <img src={img} alt={`${country} students community`} className="size-24 rounded-full object-cover"/>
                <div className="flex items-center gap-x-2">
                    <img src={flag} alt={`${country}'s flag`} className="w-4 h-2.5 rounded-[2px]"/>
                    <span className="font-semibold text-lg">{country}</span>
                </div>
                <ul>
                    <li>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.9475 1.0525C12.895 0 11.2006 0 7.8125 0H7.1875C3.79938 0 2.105 0 1.0525 1.0525C0 2.105 0 3.79938 0 7.1875V7.8125C0 11.2006 0 12.8944 1.0525 13.9475C2.105 15.0006 3.79938 15 7.1875 15H7.8125C11.2006 15 12.8944 15 13.9475 13.9475C15 12.895 15 11.2006 15 7.8125V7.1875C15 3.79938 15 2.105 13.9475 1.0525ZM12.1894 10.625H11.0956C10.6788 10.625 10.5563 10.2925 9.81438 9.55062C9.165 8.925 8.88687 8.84375 8.725 8.84375C8.50437 8.84375 8.43875 8.90625 8.43875 9.21875V10.1994C8.43875 10.4681 8.35313 10.625 7.6575 10.625C6.49875 10.625 5.225 9.92125 4.32063 8.62375C2.96437 6.72313 2.59375 5.28625 2.59375 4.99688C2.59375 4.83438 2.65625 4.6875 2.96875 4.6875H4.06313C4.3425 4.6875 4.4475 4.81 4.5525 5.1125C5.0875 6.67063 5.99 8.0325 6.36063 8.0325C6.49938 8.0325 6.56313 7.96813 6.56313 7.61563V6.005C6.5225 5.26375 6.12813 5.2025 6.12813 4.93875C6.12813 4.81688 6.2325 4.6875 6.40625 4.6875H8.12563C8.3575 4.6875 8.43813 4.81125 8.43813 5.08938V7.25625C8.43813 7.4875 8.53875 7.56875 8.60812 7.56875C8.7475 7.56875 8.86313 7.4875 9.11813 7.2325C9.90625 6.35188 10.4625 4.99625 10.4625 4.99625C10.5325 4.83375 10.66 4.68688 10.9388 4.68688H12.0325C12.3631 4.68688 12.4331 4.85688 12.3631 5.08875C12.2238 5.72625 10.8913 7.60313 10.8913 7.60313C10.775 7.78875 10.7288 7.88125 10.8913 8.09C11.0075 8.2525 11.3894 8.57687 11.6444 8.87812C12.1144 9.40687 12.4688 9.8525 12.5675 10.16C12.6588 10.4688 12.5019 10.625 12.1894 10.625Z"
                                fill="#303030"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </a>
    );
}

export default Communities;