import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="py-6 px-10 relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-10">
                <Link to="/">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.6022 0.0166612C8.92404 0.411179 5.59123 2.17007 3.24511 4.96457C1.59514 6.9262 0.570086 9.15084 0.115114 11.759C0.0109632 12.3563 0 12.6467 0 14.0056C0 15.3645 0.0109632 15.6549 0.115114 16.2521C0.630384 19.211 1.86922 21.6603 3.91386 23.7809C6.01331 25.9617 8.66092 27.3425 11.7525 27.8849C12.35 27.989 12.6406 28 14 28C15.7157 28 16.231 27.9452 17.5795 27.6C22.4143 26.3507 26.35 22.4165 27.5998 17.5836C27.9452 16.2357 28 15.7206 28 14.0056C28 12.2905 27.9452 11.7755 27.5998 10.4275C26.35 5.60018 22.4143 1.66048 17.5795 0.411179C16.3352 0.0933729 15.7486 0.0221406 14.2193 0.00570234C13.4518 -0.00525648 12.7228 0.000222933 12.6022 0.0166612ZM14.3563 1.22761C15.2498 1.77007 16.0885 3.74266 16.6805 6.66866L16.834 7.41386L16.3352 7.50701C15.5513 7.644 14.8606 7.70427 14 7.70427C13.1394 7.70427 12.4487 7.644 11.6648 7.50701L11.166 7.41386L11.3195 6.66866C11.9992 3.31527 13.0572 1.12898 14 1.12898C14.1042 1.12898 14.2686 1.17282 14.3563 1.22761ZM11.5388 2.06596C11.0399 3.01938 10.574 4.49334 10.2177 6.24675C10.13 6.69606 10.0532 7.07414 10.0532 7.07962C10.0532 7.09058 9.83947 7.02482 9.57635 6.93167C9.02271 6.73442 8.05795 6.2851 7.52075 5.9673L7.148 5.7536L7.39468 5.35908C7.85513 4.62484 8.26077 4.12074 8.95145 3.42485C9.66954 2.71253 10.0697 2.39472 10.7659 2.00021C11.1551 1.78103 11.7635 1.50706 11.7964 1.53446C11.8019 1.54542 11.6868 1.78103 11.5388 2.06596ZM17.2013 1.98377C17.9193 2.38925 18.325 2.70157 19.0486 3.42485C19.7392 4.12074 20.1449 4.62484 20.6053 5.35908L20.852 5.7536L20.4792 5.9673C19.9421 6.2851 18.9773 6.73442 18.4291 6.93167C18.1605 7.02482 17.9468 7.09058 17.9468 7.07962C17.9468 7.07414 17.87 6.69606 17.7823 6.24675C17.426 4.49334 16.9601 3.01938 16.4612 2.06596C16.3132 1.78103 16.1926 1.54542 16.1926 1.53446C16.1926 1.48514 16.8066 1.76459 17.2013 1.98377ZM7.83868 2.83856C7.38919 3.34814 6.76977 4.15909 6.48473 4.61936L6.19969 5.07416L6.05717 4.96457C5.98042 4.90977 5.80501 4.76183 5.66797 4.64128L5.4213 4.41663L5.69538 4.17005C6.03524 3.86321 6.89585 3.24403 7.36727 2.96458C7.5646 2.84952 7.80031 2.70705 7.88802 2.65226C7.98121 2.59746 8.06343 2.55363 8.07439 2.55363C8.08536 2.55363 7.98121 2.68513 7.83868 2.83856ZM20.9233 3.13992C21.3837 3.43581 22.0086 3.90156 22.332 4.19197L22.5787 4.41663L22.332 4.64128C22.195 4.76183 22.0196 4.90977 21.9428 4.96457L21.8003 5.07416L21.5153 4.61936C21.2247 4.15361 20.6163 3.35362 20.1558 2.83308L19.8927 2.53719L20.2216 2.72349C20.4025 2.82212 20.715 3.00842 20.9233 3.13992ZM5.22396 5.80292C5.43774 5.97826 5.61316 6.1262 5.61316 6.13716C5.61316 6.14812 5.52545 6.34538 5.4213 6.57551C4.82929 7.86865 4.33594 9.62754 4.1112 11.2111C4.03446 11.7262 3.91386 13.0357 3.91386 13.2987C3.91386 13.3974 3.8426 13.4029 2.51057 13.4029H1.10728L1.14565 12.9755C1.3704 10.2851 2.43931 7.73167 4.20987 5.63853L4.54424 5.2495L4.69225 5.36456C4.76899 5.43032 5.01018 5.62758 5.22396 5.80292ZM23.8449 5.70429C25.0454 7.12345 25.9499 8.84399 26.4377 10.6358C26.6186 11.2933 26.7995 12.3125 26.8543 12.9755L26.8927 13.4029H25.4894C24.1574 13.4029 24.0861 13.3974 24.0861 13.2987C24.0861 13.0357 23.9655 11.7262 23.8888 11.2111C23.6641 9.62206 23.1652 7.85769 22.5732 6.56455L22.3759 6.14264L22.6116 5.95086C22.7377 5.84675 22.9789 5.64401 23.1433 5.49607C23.3132 5.3536 23.4667 5.25498 23.4832 5.27689C23.5051 5.30429 23.6641 5.49059 23.8449 5.70429ZM8.12921 7.59468C8.44714 7.73715 8.96789 7.94537 9.28583 8.06043C9.60376 8.1755 9.86688 8.27413 9.86688 8.27413C9.87236 8.27961 9.85591 8.43851 9.8285 8.63577C9.69695 9.71521 9.50509 12.4001 9.50509 13.2494V13.4029H7.28504C6.06265 13.4029 5.065 13.3919 5.065 13.3809C5.065 13.3755 5.0924 13.0467 5.11981 12.6577C5.27878 10.6138 5.73923 8.72892 6.46829 7.09606L6.61081 6.78373L7.08222 7.06318C7.33986 7.21112 7.81128 7.45222 8.12921 7.59468ZM21.8113 7.78098C22.3978 9.30974 22.7377 10.8549 22.8802 12.6577C22.9076 13.0467 22.935 13.3755 22.935 13.3809C22.935 13.3919 21.9374 13.4029 20.715 13.4029H18.4949V13.2494C18.4949 12.4001 18.3031 9.71521 18.1715 8.63577C18.1441 8.43851 18.1276 8.27961 18.1331 8.27413C18.1331 8.27413 18.462 8.15358 18.8512 8.01112C19.6186 7.72619 20.5834 7.27688 21.0713 6.97551L21.3727 6.78921L21.4714 6.98099C21.5262 7.0851 21.6797 7.44126 21.8113 7.78098ZM11.9444 8.72892C12.2185 8.77276 12.9695 8.82207 13.6163 8.83851C14.8113 8.87139 15.4471 8.82755 16.4558 8.65769C16.7408 8.60837 16.9765 8.58098 16.9875 8.59194C17.0587 8.66317 17.2396 10.9097 17.3164 12.6741L17.3493 13.4029H14H10.6507L10.6836 12.7015C10.7494 11.2659 10.8316 10.0659 10.9084 9.43028C10.9468 9.06864 10.9851 8.72892 10.9851 8.66865C10.9851 8.58098 11.0125 8.57002 11.2208 8.60837C11.3469 8.62481 11.6758 8.67961 11.9444 8.72892ZM3.91386 14.7124C3.91386 14.9754 4.03446 16.285 4.1112 16.8001C4.33594 18.3836 4.83477 20.1425 5.42678 21.4466L5.61864 21.8685L5.45967 22.0055C4.8841 22.4987 4.58262 22.7343 4.53876 22.7179C4.45654 22.6795 3.84808 21.9453 3.49178 21.4521C2.87236 20.5864 2.26938 19.4466 1.86922 18.3617C1.53485 17.4631 1.23336 16.0713 1.14565 15.0302L1.10728 14.6083H2.51057C3.8426 14.6083 3.91386 14.6138 3.91386 14.7124ZM9.50509 14.7563C9.50509 15.6111 9.69695 18.296 9.8285 19.3754C9.85591 19.5727 9.87236 19.7316 9.86688 19.7371C9.86688 19.7371 9.60376 19.8357 9.28583 19.9507C8.56774 20.2083 7.5372 20.6795 7.01096 20.9918L6.61081 21.2275L6.47377 20.9151C5.73923 19.2823 5.27878 17.3973 5.11981 15.3535C5.0924 14.9645 5.065 14.6357 5.065 14.6302C5.065 14.6193 6.06265 14.6083 7.28504 14.6083H9.50509V14.7563ZM17.3164 15.3316C17.2396 17.1015 17.0587 19.348 16.9875 19.4192C16.9765 19.4302 16.7408 19.4028 16.4558 19.3535C14.8771 19.085 13.1229 19.085 11.5442 19.3535C11.2592 19.4028 11.0235 19.4302 11.0125 19.4192C10.9413 19.348 10.7604 17.1015 10.6836 15.3316L10.6507 14.6083H14H17.3493L17.3164 15.3316ZM22.935 14.6302C22.935 14.6357 22.9076 14.9645 22.8802 15.3535C22.7212 17.3973 22.2608 19.2823 21.5317 20.9151L21.3892 21.2275L20.9342 20.959C20.3915 20.6357 19.498 20.2302 18.7142 19.9507C18.3962 19.8357 18.1331 19.7371 18.1331 19.7371C18.1276 19.7316 18.1441 19.5727 18.1715 19.3754C18.3031 18.296 18.4949 15.6111 18.4949 14.7563V14.6083H20.715C21.9374 14.6083 22.935 14.6193 22.935 14.6302ZM26.8543 15.0302C26.6296 17.7097 25.5607 20.285 23.823 22.3288C23.6257 22.5589 23.4558 22.7452 23.4448 22.7452C23.4229 22.7452 22.9405 22.3507 22.5403 22.0055L22.3814 21.8685L22.5732 21.4466C23.1652 20.1425 23.6641 18.3836 23.8888 16.8001C23.9655 16.285 24.0861 14.9754 24.0861 14.7124C24.0861 14.6138 24.1574 14.6083 25.4894 14.6083H26.8927L26.8543 15.0302ZM15.3156 20.3617C15.6006 20.3946 16.0611 20.4603 16.3352 20.5042L16.834 20.5973L16.6805 21.3425C16.0885 24.2685 15.2498 26.2411 14.3563 26.7836C13.3422 27.4027 12.0924 25.1726 11.3195 21.3425L11.166 20.5918L11.7032 20.4987C11.9992 20.4494 12.4213 20.3891 12.6406 20.3617C13.2381 20.3014 14.7236 20.3014 15.3156 20.3617ZM10.2177 21.7644C10.574 23.5178 11.0399 24.9918 11.5388 25.9452C11.6868 26.2302 11.8074 26.4658 11.8074 26.4767C11.8074 26.526 11.1934 26.2466 10.7987 26.0274C10.0807 25.6219 9.67502 25.3096 8.95145 24.5863C8.26077 23.8904 7.85513 23.3863 7.39468 22.6521L7.148 22.2576L7.52075 22.0439C8.06343 21.7206 8.95693 21.3042 9.52702 21.1014C9.8011 21.0028 10.0313 20.9261 10.0368 20.9316C10.0478 20.9425 10.13 21.3151 10.2177 21.7644ZM19.509 21.5398C19.8434 21.6932 20.2764 21.9233 20.4792 22.0439L20.852 22.2576L20.6163 22.6411C20.1778 23.3535 19.7392 23.8959 19.0486 24.5863C18.325 25.3096 17.9193 25.6219 17.2013 26.0274C16.8066 26.2466 16.1926 26.526 16.1926 26.4767C16.1926 26.4658 16.3132 26.2302 16.4612 25.9452C16.9601 24.9918 17.426 23.5178 17.7823 21.7644C17.87 21.3151 17.9468 20.937 17.9468 20.9316C17.9468 20.8822 18.9773 21.2822 19.509 21.5398ZM7.23571 24.4439C7.42756 24.685 7.70164 25.0137 7.84417 25.1781L8.10728 25.474L7.77839 25.2932C6.98904 24.8548 5.52545 23.7918 5.46515 23.6165C5.45419 23.5781 5.60767 23.4137 5.81049 23.2439L6.18324 22.937L6.53406 23.4685C6.72592 23.7644 7.04385 24.2028 7.23571 24.4439ZM22.332 23.3699L22.5787 23.5946L22.332 23.8192C21.8606 24.2521 20.9781 24.8658 20.2216 25.2877L19.8927 25.474L20.1558 25.1781C20.5998 24.674 21.1809 23.9178 21.4988 23.4192L21.8058 22.948L21.9483 23.0466C22.0251 23.1069 22.195 23.2494 22.332 23.3699Z"
                            fill="url(#paint0_linear_2002_71)"/>
                        <defs>
                            <linearGradient id="paint0_linear_2002_71" x1="14" y1="28" x2="14" y2="0"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FAD002"/>
                                <stop offset="0.5" stopColor="#E76E12"/>
                                <stop offset="0.707946" stopColor="#DB2320"/>
                                <stop offset="1" stopColor="#DB1F38"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </Link>
            </div>
            <div className="relative">
                <ul className="flex items-center justify-center gap-x-12 font-semibold texl-xl">
                    <li><Link to="/services" className="hover:underline">Services</Link></li>
                    <li><Link to="/experience" className="hover:underline">Exchange experience</Link></li>
                    <li><Link to="/questions" className="hover:underline">Popular Questions</Link></li>
                </ul>
                <div className="w-1/3 h-[1px] bg-black/[0.2] left-1/2 -translate-x-1/2 -bottom-10 absolute" aria-hidden></div>
            </div>
            <ul className="flex items-center gap-x-6 absolute top-1/2 -translate-y-1/2 right-10">
                <li>
                    <button className="flex items-center">
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.95996 0.0761051C7.59274 0.271435 7.49117 0.513645 7.49117 1.21293V1.71297L7.34662 1.73641C5.15111 2.10754 3.31891 3.77176 2.70557 5.95165C2.53758 6.53764 2.52196 6.72906 2.49071 8.69018C2.46336 10.5536 2.45945 10.6161 2.36179 11.0146C2.06879 12.2218 1.49061 13.2023 0.599906 13.9993C0.115486 14.4368 -0.0798443 14.9329 0.0295408 15.4799C0.123299 15.9643 0.404575 16.3237 0.849929 16.5386L1.10386 16.6597H8.35062H15.5974L15.8513 16.5386C16.6014 16.1792 16.9061 15.3236 16.5545 14.5774C16.4686 14.3899 16.3318 14.2258 15.9412 13.8391C15.0739 12.9796 14.6207 12.1749 14.3395 11.0146C14.2418 10.6161 14.2379 10.5536 14.2105 8.69018C14.1793 6.72906 14.1637 6.53764 13.9957 5.95165C13.5699 4.43979 12.5385 3.13498 11.1868 2.38491C10.6399 2.0841 9.95624 1.84189 9.35853 1.74032L9.21008 1.71297V1.22074C9.21008 0.951185 9.19054 0.662096 9.1671 0.580057C9.1085 0.384727 8.92489 0.169863 8.73738 0.0761051C8.53814 -0.0254669 8.15138 -0.0254669 7.95996 0.0761051Z"
                                fill="#303030"/>
                            <path
                                d="M5.2644 17.5152C5.2644 17.5816 5.44801 18.105 5.53005 18.2613C5.83086 18.859 6.34263 19.3786 6.91299 19.6638C7.41304 19.9138 7.78026 19.9998 8.35063 19.9998C8.92099 19.9998 9.28821 19.9138 9.78826 19.6638C10.3586 19.3786 10.8704 18.859 11.1712 18.2613C11.2532 18.105 11.4368 17.5816 11.4368 17.5152C11.4368 17.5073 10.05 17.4995 8.35063 17.4995C6.65516 17.4995 5.2644 17.5073 5.2644 17.5152Z"
                                fill="#303030"/>
                        </svg>
                    </button>
                </li>
                <li>
                    <button className="flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.15544 0.241779C4.10112 0.995031 2.75439 2.9124 2.75439 5.01238V6.10802H4.00981C5.26523 6.10802 5.26523 6.10802 5.26523 5.42324C5.26523 4.46456 5.81305 3.23196 6.36087 2.93523C6.65761 2.77545 8.5065 2.68414 11.1999 2.68414C15.514 2.68414 15.5597 2.68414 16.1075 3.25479L16.6781 3.80261V9.98841V16.1742L16.0847 16.722C15.4684 17.2927 15.4227 17.2927 11.1543 17.2927C8.48368 17.2927 6.65761 17.2014 6.36087 17.0416C5.79023 16.7448 5.26523 15.4894 5.26523 14.4394V13.6405H4.00981H2.75439V14.8731C2.75439 16.6307 3.66743 18.3198 5.15111 19.2329L6.24675 19.9176L10.5152 19.9861C13.3227 20.0318 15.126 19.9633 15.7879 19.8035C17.089 19.4383 18.8009 17.7492 19.1662 16.4938C19.4857 15.3525 19.5085 4.69281 19.189 3.62C18.8466 2.43306 17.9107 1.22329 16.8379 0.606993C15.9249 0.0819988 15.6738 0.0591736 11.4282 0.0135212C8.16411 -0.0321312 6.74891 0.0363464 6.15544 0.241779Z"
                                fill="#303030"/>
                            <path
                                d="M8.46097 6.45043V7.70585H4.58059H0.700195V9.76018V11.8145H4.58059H8.43815L8.50663 13.2982L8.5751 14.759L11.5196 12.4993C13.1631 11.2439 14.5783 10.2167 14.6924 10.2167C14.8066 10.2167 14.8522 10.1254 14.8066 10.0113C14.7381 9.783 8.78054 5.19501 8.5751 5.19501C8.50663 5.19501 8.46097 5.76566 8.46097 6.45043Z"
                                fill="#303030"/>
                        </svg>
                    </button>
                </li>
                <li className="flex items-center gap-x-2 cursor-pointer">
                    <img src={require("../../../assets/flags/uk.png")} alt="flag"
                         className="rounded w-[30px] h-[20px]"/>
                    <button>
                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.708655 0.400043C0.470098 0.483698 0.347259 0.826484 0.459417 1.09581C0.496802 1.18763 3.98792 5.4398 4.08583 5.51325C4.1606 5.57038 4.33507 5.63159 4.41696 5.63159C4.49886 5.63159 4.67332 5.57038 4.74809 5.51325C4.84601 5.4398 8.33712 1.18763 8.37451 1.09581C8.45462 0.901978 8.4208 0.669373 8.28906 0.520425C8.14486 0.355155 8.47243 0.367397 4.40984 0.369437C1.26588 0.369437 0.783426 0.373518 0.708655 0.400043Z"
                                fill="#303030"/>
                        </svg>
                    </button>
                </li>
            </ul>
        </header>
    );
};

export default Header;