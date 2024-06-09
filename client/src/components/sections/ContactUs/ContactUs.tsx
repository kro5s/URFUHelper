import React, {useState} from 'react';
import {FormattedMessage, useIntl} from "react-intl";

const ContactUs = () => {
    const intl = useIntl()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <section className="py-20 md:py-28 text-center">
            <h2 className="text-4xl font-semibold"><FormattedMessage id="contact_us" /></h2>
            <div className="mt-4"><span className="font-medium text-xl"><FormattedMessage id="found_translation_issues" /></span></div>
            <div className="flex items-center justify-between gap-x-20 max-w-[970px] bg-primary-black rounded-[30px] p-16 mx-auto mt-10 flex-col md:flex-row">
                <form className="text-left text-white">
                    <div className="flex justify-between gap-x-8 flex-col md:flex-row">
                        <div>
                            <div className="mb-2"><label htmlFor="contactusname"><FormattedMessage id="name" /></label></div>
                            <input type="text" id="contactusname"
                                   className="outline-none py-2 px-4 rounded-2xl text-primary-black"
                                   placeholder={intl.formatMessage({ id: "name_placeholder" })}/>
                        </div>
                        <div>
                            <div className="mb-2 mt-4 md:mt-0"><label htmlFor="contactusemail"><FormattedMessage id="email" /></label></div>
                            <input type="text" id="contactusemail"
                                   className="outline-none py-2 px-4 rounded-2xl text-primary-black"
                                   placeholder="example@gmail.com"/>
                        </div>
                    </div>
                    <div className="mb-2 mt-4"><label htmlFor="contactusmessage"><FormattedMessage id="message" /></label></div>
                    <textarea id="contactusmessage"
                              className="outline-none resize-none p-4 rounded-2xl text-primary-black w-full min-h-[150px]"
                              placeholder={intl.formatMessage({ id: "message_placeholder" })}></textarea>
                    <div className="text-center md:text-left">
                        <button type="submit" className="font-semibold bg-accent rounded-2xl py-2 px-4 mt-10">
                            <FormattedMessage id="submit"/></button>
                    </div>
                </form>
                <svg className="hidden md:block" width="283" height="283" viewBox="0 0 283 283" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.6939 1.51593C10.1287 3.88821 5.27383 8.30175 2.12919 14.7014L0.36377 18.3426V81.7872V145.232L2.12919 148.873C5.38417 155.548 10.5149 160.017 17.2456 162.114C19.8937 162.941 22.3211 163.162 28.5553 163.162H36.4996V176.789C36.4996 189.478 36.61 190.581 37.603 192.291C39.5339 195.436 41.6855 196.374 46.4301 196.098C51.0643 195.822 58.6225 193.505 64.1946 190.691C74.0699 185.726 83.0073 177.561 88.5794 168.513L91.8896 163.162H117.102C140.659 163.162 142.535 163.107 145.845 162.058C153.017 159.852 159.527 153.397 161.734 146.225C162.837 142.694 162.837 141.204 162.837 81.5665C162.837 21.8182 162.837 20.3838 161.734 17.2392C159.417 10.5085 155.058 5.65363 148.548 2.45381L144.907 0.688395L82.2901 0.578056C21.6039 0.467718 19.5627 0.467718 16.6939 1.51593ZM85.6554 41.955C88.3035 43.7204 89.4621 46.3134 89.4621 50.4511V53.9267H102.868C114.454 53.9267 116.495 54.0371 118.15 54.9198C123.998 57.8437 123.943 65.6778 118.15 68.6569C116.164 69.7051 114.785 69.9258 110.647 69.9258H105.627L105.241 73.1808C104.358 81.1252 100.551 91.497 96.1376 98.007C94.8687 99.8276 93.8756 101.427 93.8756 101.593C93.8756 101.703 96.0272 102.586 98.7305 103.579C103.861 105.455 110.371 106.889 113.681 106.889C120.191 106.889 124.66 113.675 121.46 118.916C118.922 123.054 114.95 123.771 105.075 121.84C97.903 120.461 93.655 118.971 86.9795 115.661L81.4074 112.903L76.1663 115.606C67.8358 119.854 56.4709 122.888 48.9679 122.888C42.4027 122.888 38.4857 116.93 41.3545 111.303C42.4579 108.986 46.2646 106.889 49.2437 106.889C52.5539 106.889 59.0638 105.455 64.2498 103.579C66.8979 102.586 69.0495 101.703 69.0495 101.593C69.0495 101.483 67.8358 99.5517 66.3462 97.2898C61.9326 90.5039 58.6225 81.2355 57.6846 73.236L57.2984 69.9258H52.0022C47.5335 69.9258 46.3749 69.7051 44.4992 68.6569C39.1478 65.6226 39.0374 58.2851 44.3337 55.0301C46.0439 54.0371 47.1473 53.9267 59.8362 53.9267H73.463V50.4511C73.463 44.4928 76.6077 40.6861 81.4626 40.6861C82.9521 40.6861 84.4417 41.1275 85.6554 41.955Z"
                        fill="white"/>
                    <path
                        d="M73.4631 71.1939C73.4631 75.0558 77.6008 86.3655 80.3593 90.0067C81.0765 90.9445 81.2972 90.9445 82.0695 90.2825C83.6143 89.0688 87.6416 79.9658 88.5795 75.6075C89.9587 69.4285 90.6208 69.925 81.4627 69.925C73.4631 69.925 73.4631 69.925 73.4631 71.1939Z"
                        fill="white"/>
                    <path
                        d="M203.938 1.01757C202.228 1.95545 184.353 19.8303 183.47 21.4854C182.477 23.4163 182.477 27.1126 183.526 29.3746C184.022 30.3676 188.546 35.2777 193.622 40.2981C201.29 47.8563 203.276 49.5113 205.207 50.0079C208.572 50.9457 211.165 50.2837 213.648 47.8011C217.124 44.3254 217.013 39.1395 213.427 35.2225L212.214 33.8984L214.972 34.2846C223.192 35.4432 232.847 39.1395 239.909 43.8289C244.488 46.8632 251.66 53.8697 254.859 58.5039C261.48 68.1034 264.514 76.9305 265.397 88.847C265.838 95.1915 266.39 96.5155 269.534 98.8327C270.638 99.7154 271.852 99.9912 274.169 99.9912C277.92 99.9912 280.568 98.3913 281.782 95.5225C282.775 93.1502 282.775 87.0264 281.727 80.4061C277.479 52.4353 258.059 29.4849 231.082 20.5475C225.62 18.7821 216.793 16.9615 213.372 16.9615H211.717L213.207 15.4167C214.862 13.7065 216.351 10.3963 216.351 8.57576C216.296 6.31382 214.255 2.67265 212.379 1.5141C210.338 0.300375 205.814 0.0245285 203.938 1.01757Z"
                        fill="white"/>
                    <path
                        d="M230.42 88.1299C215.303 92.1021 202.008 101.812 194.063 114.832L190.753 120.128H184.795H178.837V131.879C178.837 145.616 178.174 149.368 174.313 157.092C172.437 160.898 171.002 162.774 166.699 167.022C162.451 171.325 160.575 172.76 156.769 174.635C149.045 178.497 145.294 179.159 131.556 179.159H119.805L119.916 221.805L120.081 264.396L121.295 267.43C123.833 273.554 129.129 278.85 135.253 281.388L138.287 282.602H201.456H264.625L268.487 280.726C273.562 278.243 277.92 273.885 280.403 268.809L282.279 264.947V201.503V138.058L280.513 134.417C277.258 127.741 272.128 123.273 265.397 121.176C262.749 120.349 260.321 120.128 254.087 120.128H246.143V106.446C246.143 93.8124 246.033 92.709 245.04 90.9987C242.557 86.9714 238.088 86.0887 230.42 88.1299ZM205.373 161.615C206.973 162.719 209.621 167.574 224.792 197.806C238.419 224.95 242.281 233.17 242.281 234.77C242.281 240.673 235.385 244.535 230.309 241.445C228.82 240.507 227.661 238.742 224.848 233.17L221.317 226.053H201.29H181.319L177.843 232.949C175.14 238.356 173.926 240.176 172.327 241.225C168.575 243.762 163.61 242.604 161.182 238.632C158.92 234.935 158.81 235.156 177.623 197.806C196.822 159.464 196.215 160.402 201.18 160.402C202.67 160.402 204.159 160.843 205.373 161.615Z"
                        fill="white"/>
                    <path
                        d="M195.222 198.193L189.319 210.055H201.18C207.69 210.055 213.041 209.944 213.041 209.779C213.041 209.393 201.511 186.332 201.29 186.332C201.235 186.332 198.477 191.683 195.222 198.193Z"
                        fill="white"/>
                    <path
                        d="M4.22568 184.07C0.750017 186.167 0.363833 187.05 0.198325 193.173C-0.132691 203.325 2.68094 214.8 8.1427 225.558C15.4802 239.902 27.4519 251.708 41.7408 258.604C50.0713 262.687 56.9675 264.673 67.5048 266.052L70.0426 266.383L68.1668 269.141C63.3119 276.369 68.553 284.258 77.1594 282.603C78.8697 282.272 80.7454 280.727 88.5243 273.058C93.655 267.983 98.2893 262.907 98.8961 261.804C100.441 258.825 100.22 255.956 98.3444 253.032C96.0273 249.446 80.6903 234.55 78.2628 233.502C74.0148 231.737 69.3806 233.226 67.3945 237.088C65.5187 240.729 66.1807 244.646 69.1599 247.956L70.2633 249.115L67.8358 248.839C66.5669 248.674 63.2016 247.956 60.388 247.239C45.7681 243.598 32.9689 233.888 24.7486 220.206C20.6109 213.31 17.1905 202.001 17.1905 194.939C17.1353 188.981 15.6457 185.615 12.1149 183.795C10.0185 182.691 6.21177 182.857 4.22568 184.07Z"
                        fill="white"/>
                </svg>
            </div>
        </section>
    );
};

export default ContactUs;