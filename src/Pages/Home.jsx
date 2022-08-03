import React from "react";

// import svglearning from "images/svg/learning.svg";
import { CheckIcon } from "@heroicons/react/outline";
import * as FeatherIcons from "react-feather";

export default function Home() {
    return (
        <div className="dark:bg-bluedarklight ">
            <div className="container flex flex-col items-center md:grid md:grid-cols-2 mdsm:grid mdsm:grid-cols-2 px-6 py-5 mx-auto space-y-6 lg:h-[38rem] lg:py-10 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/1">
                    <div className="lg:ml-4 lg:max-w-1xl md:max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-wide lg:leading-tight text-gray-800 dark:text-white lg:text-5xl ">
                            Easiest way to get profesional teacher for your
                            student
                        </h1>

                        <div className="mt-8 space-y-5 tracking-wide">
                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <FeatherIcons.CheckCircle className="h-5 w-5 mx-2 text-bluelight-700" />

                                <span className="mx-2">
                                    Clean and Simple Layout
                                </span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <FeatherIcons.CheckCircle className="h-5 w-5 mx-2 text-bluelight-700" />

                                <span className="mx-2">
                                    Just Copy Paste Codeing
                                </span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <FeatherIcons.CheckCircle className="h-5 w-5 mx-2 text-bluelight-700" />

                                <span className="mx-2">Easy to Use</span>
                            </p>
                        </div>

                        <div className="py-5">
                            <button
                                type="button"
                                className="btn-home tracking-wide"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/1 md:max-w-xl">
                    <img
                        className="object-cover w-full mx-auto lg:max-w-3xl max-w-lg py-10"
                        src="images/svg/teacher.svg"
                        alt="glasses photo"
                    />
                </div>
            </div>

            <div className="py-10 px-5 bg-slate-100 dark:bg-bluedark">
                <div className=" justify-center items-center text-center mb-8 lg:mb-10">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Top Teachers
                    </h2>
                    <p className="text-gray-500 lg:px-56 sm:text-xl dark:text-white">
                        Here at Flowbite we focus on markets where technology,
                        innovation, and capital can unlock long-term value and
                        drive economic growth.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-center">
                        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img
                                className="object-cover object-center w-full h-56"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                alt="avatar"
                            />

                            <div className="flex items-center px-6 py-3 bg-gray-900">
                                <svg
                                    className="w-6 h-6 text-white fill-current"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                                    />
                                </svg>

                                <h1 className="mx-3 text-lg font-semibold text-white">
                                    Focusing
                                </h1>
                            </div>

                            <div className="px-6 py-4">
                                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Patterson johnson
                                </h1>

                                <p className="py-2 text-gray-700 dark:text-gray-300">
                                    Full Stack maker & UI / UX Designer , love
                                    hip hop music Author of Building UI.
                                </p>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M14 11H10V13H14V11Z" />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">Meraki UI</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">California</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">
                                        patterson@example.com
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img
                                className="object-cover object-center w-full h-56"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                alt="avatar"
                            />

                            <div className="flex items-center px-6 py-3 bg-gray-900">
                                <svg
                                    className="w-6 h-6 text-white fill-current"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                                    />
                                </svg>

                                <h1 className="mx-3 text-lg font-semibold text-white">
                                    Focusing
                                </h1>
                            </div>

                            <div className="px-6 py-4">
                                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Patterson johnson
                                </h1>

                                <p className="py-2 text-gray-700 dark:text-gray-400">
                                    Full Stack maker & UI / UX Designer , love
                                    hip hop music Author of Building UI.
                                </p>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M14 11H10V13H14V11Z" />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">Meraki UI</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">California</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">
                                        patterson@example.com
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img
                                className="object-cover object-center w-full h-56"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                alt="avatar"
                            />

                            <div className="flex items-center px-6 py-3 bg-gray-900">
                                <svg
                                    className="w-6 h-6 text-white fill-current"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                                    />
                                </svg>

                                <h1 className="mx-3 text-lg font-semibold text-white">
                                    Focusing
                                </h1>
                            </div>

                            <div className="px-6 py-4">
                                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Patterson johnson
                                </h1>

                                <p className="py-2 text-gray-700 dark:text-gray-400">
                                    Full Stack maker & UI / UX Designer , love
                                    hip hop music Author of Building UI.
                                </p>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M14 11H10V13H14V11Z" />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">Meraki UI</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">California</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                                        />
                                    </svg>

                                    <h1 className="px-2 text-sm">
                                        patterson@example.com
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="features"
                class="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
            >
                <div class="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
                    <h2 class="my-5  text-2xl font-medium tracking-tight text-bluedarklight dark:text-white  uppercase">
                        Our Services
                    </h2>
                    <h3 class="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 dark:text-white sm:mt-0 sm:px-0 sm:text-6xl">
                        Built For the Caloabation with Students
                    </h3>
                    <div class="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
                        <div class="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                            <div class="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                                <svg
                                    class="absolute w-full h-full text-slate-50 fill-current"
                                    viewBox="0 0 377 340"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <g>
                                            <path d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z"></path>
                                        </g>
                                    </g>
                                </svg>
                                {/* <!-- FEATURE Icon 1 --> */}
                                <svg
                                    class="relative w-20 h-20"
                                    viewBox="0 0 58 58"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                >
                                    <defs>
                                        <linearGradient
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="100%"
                                            id="linearGradient-1TriangleIcon1"
                                        >
                                            <stop
                                                stop-color="#9C09DB"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                stop-color="#1C0FD7"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                        <filter
                                            x="-14%"
                                            y="-10%"
                                            width="128%"
                                            height="128%"
                                            filterUnits="objectBoundingBox"
                                            id="filter-3TriangleIcon1"
                                        >
                                            <feOffset
                                                dy="2"
                                                in="SourceAlpha"
                                                result="shadowOffsetOuter1"
                                            ></feOffset>
                                            <feGaussianBlur
                                                stdDeviation="2"
                                                in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"
                                            ></feGaussianBlur>
                                            <feColorMatrix
                                                values="0 0 0 0 0.141176471 0 0 0 0 0.031372549 0 0 0 0 0.501960784 0 0 0 0.15 0"
                                                in="shadowBlurOuter1"
                                            ></feColorMatrix>
                                        </filter>
                                        <path
                                            d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                                            id="path-2TriangleIcon1"
                                        ></path>
                                    </defs>
                                    <g
                                        id="Page-1TriangleIcon1"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <g
                                            id="Desktop-HDTriangleIcon1"
                                            transform="translate(-291 -1278)"
                                        >
                                            <g
                                                id="FeaturesTriangleIcon1"
                                                transform="translate(170 915)"
                                            >
                                                <g
                                                    id="Group-9TriangleIcon1"
                                                    transform="translate(0 365)"
                                                >
                                                    <g
                                                        id="Group-8TriangleIcon1"
                                                        transform="translate(125)"
                                                    >
                                                        <g id="Rectangle-9TriangleIcon1">
                                                            <use
                                                                fill="#000"
                                                                filter="url(#filter-3TriangleIcon1)"
                                                                href="#path-2TriangleIcon1"
                                                            ></use>
                                                            <use
                                                                fill="url(#linearGradient-1TriangleIcon1)"
                                                                href="#path-2TriangleIcon1"
                                                            ></use>
                                                        </g>
                                                        <g
                                                            id="playTriangleIcon1"
                                                            transform="translate(18 15)"
                                                            fill="#FFF"
                                                            fill-rule="nonzero"
                                                        >
                                                            <path
                                                                d="M9.432 2.023l8.919 14.879a1.05 1.05 0 01-.384 1.452 1.097 1.097 0 01-.548.146H-.42A1.07 1.07 0 01-1.5 17.44c0-.19.052-.375.15-.538L7.567 2.023a1.092 1.092 0 011.864 0z"
                                                                id="TriangleIcon1"
                                                                transform="rotate(90 8.5 10)"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <h4 class="relative mt-6 text-lg font-bold">
                                    Teacher Info
                                </h4>
                                <p class="relative mt-2 text-base text-center text-gray-600">
                                    It is important to get the Teacher you need
                                </p>
                                <a
                                    href="#_"
                                    class="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        <div class="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                            <div class="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                                <svg
                                    class="absolute w-full h-full text-slate-50 fill-current"
                                    viewBox="0 0 358 372"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <g>
                                            <path d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z"></path>
                                        </g>
                                    </g>
                                </svg>
                                {/* <!-- FEATURE Icon 2 --> */}
                                <svg
                                    class="relative w-20 h-20"
                                    viewBox="0 0 58 58"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                >
                                    <defs>
                                        <linearGradient
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="100%"
                                            id="linearGradient-1Icon2"
                                        >
                                            <stop
                                                stop-color="#F2C314"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                stop-color="#FC3832"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                        <filter
                                            x="-14%"
                                            y="-10%"
                                            width="128%"
                                            height="128%"
                                            filterUnits="objectBoundingBox"
                                            id="filter-3Icon2"
                                        >
                                            <feOffset
                                                dy="2"
                                                in="SourceAlpha"
                                                result="shadowOffsetOuter1"
                                            ></feOffset>
                                            <feGaussianBlur
                                                stdDeviation="2"
                                                in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"
                                            ></feGaussianBlur>
                                            <feColorMatrix
                                                values="0 0 0 0 0.501960784 0 0 0 0 0.125490196 0 0 0 0 0 0 0 0 0.15 0"
                                                in="shadowBlurOuter1"
                                            ></feColorMatrix>
                                        </filter>
                                        <path
                                            d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                                            id="path-2Icon2"
                                        ></path>
                                    </defs>
                                    <g
                                        id="Page-1Icon2"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <g
                                            id="Desktop-HDIcon2"
                                            transform="translate(-691 -1278)"
                                        >
                                            <g
                                                id="FeaturesIcon2"
                                                transform="translate(170 915)"
                                            >
                                                <g
                                                    id="Group-9-CopyIcon2"
                                                    transform="translate(400 365)"
                                                >
                                                    <g
                                                        id="Group-8Icon2"
                                                        transform="translate(125)"
                                                    >
                                                        <g id="Rectangle-9Icon2">
                                                            <use
                                                                fill="#000"
                                                                filter="url(#filter-3Icon2)"
                                                                href="#path-2Icon2"
                                                            ></use>
                                                            <use
                                                                fill="url(#linearGradient-1Icon2)"
                                                                href="#path-2Icon2"
                                                            ></use>
                                                        </g>
                                                        <g
                                                            id="machine-learningIcon2"
                                                            transform="translate(14 12)"
                                                            fill="#FFF"
                                                            fill-rule="nonzero"
                                                        >
                                                            <path
                                                                d="M10.554 21.418v-2.68c-1.1-.204-1.932-1.143-1.932-2.271 0-.468.143-.903.388-1.267l-2.32-1.662L4.367 15.2a2.254 2.254 0 01-.005 2.541l5.28 4.05c.268-.182.577-.311.911-.373zm.892 0c.334.062.643.191.912.373l5.28-4.05a2.254 2.254 0 01-.006-2.54l-2.321-1.663L12.99 15.2c.245.364.388.8.388 1.267 0 1.128-.832 2.067-1.932 2.27v2.681zm1.538.997c.25.365.394.803.394 1.274C13.378 24.965 12.314 26 11 26s-2.378-1.035-2.378-2.311c0-.471.145-.91.394-1.274l-5.28-4.05c-.385.26-.853.413-1.358.413C1.065 18.778 0 17.743 0 16.467c0-1.129.832-2.068 1.932-2.27v-2.393C.832 11.6 0 10.662 0 9.534c0-1.277 1.065-2.312 2.378-2.312.505 0 .973.153 1.358.414l5.28-4.05a2.254 2.254 0 01-.394-1.275C8.622 1.035 9.686 0 11 0s2.378 1.035 2.378 2.311c0 .471-.145.91-.394 1.274l5.28 4.05c.385-.26.853-.413 1.358-.413C20.935 7.222 22 8.257 22 9.533c0 1.129-.832 2.068-1.932 2.27v2.393c1.1.203 1.932 1.142 1.932 2.27 0 1.277-1.065 2.312-2.378 2.312-.505 0-.973-.153-1.358-.414l-5.28 4.05zm-9.243-7.843L5.937 13l-2.196-1.572c-.27.183-.58.314-.917.376v2.392c.336.062.647.193.917.376zm.627-3.772l2.321 1.662L9.01 10.8a2.254 2.254 0 01-.388-1.267c0-1.128.832-2.067 1.932-2.27V4.582a2.403 2.403 0 01-.912-.373l-5.28 4.05a2.254 2.254 0 01.006 2.54zm13.89 3.772c.27-.183.582-.314.918-.376v-2.392a2.403 2.403 0 01-.917-.376L16.063 13l2.196 1.572zm-.62-6.313l-5.28-4.05a2.403 2.403 0 01-.912.373v2.68c1.1.204 1.932 1.143 1.932 2.271 0 .468-.143.903-.388 1.267l2.32 1.662 2.322-1.662a2.254 2.254 0 01.005-2.541zm-8 6.313A2.415 2.415 0 0111 14.156c.507 0 .977.154 1.363.416L14.559 13l-2.196-1.572a2.415 2.415 0 01-1.363.416c-.507 0-.977-.154-1.363-.416L7.441 13l2.196 1.572zM11 10.978c.821 0 1.486-.647 1.486-1.445 0-.797-.665-1.444-1.486-1.444s-1.486.647-1.486 1.444c0 .798.665 1.445 1.486 1.445zm0 6.933c.821 0 1.486-.647 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.486.647-1.486 1.445c0 .797.665 1.444 1.486 1.444zm8.622-6.933c.82 0 1.486-.647 1.486-1.445 0-.797-.665-1.444-1.486-1.444s-1.487.647-1.487 1.444c0 .798.666 1.445 1.487 1.445zm0 6.933c.82 0 1.486-.647 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.487.647-1.487 1.445c0 .797.666 1.444 1.487 1.444zM2.378 10.978c.821 0 1.487-.647 1.487-1.445 0-.797-.666-1.444-1.487-1.444-.82 0-1.486.647-1.486 1.444 0 .798.665 1.445 1.486 1.445zm0 6.933c.821 0 1.487-.647 1.487-1.444 0-.798-.666-1.445-1.487-1.445-.82 0-1.486.647-1.486 1.445 0 .797.665 1.444 1.486 1.444zM11 25.133c.821 0 1.486-.646 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.486.647-1.486 1.445.665 1.444 1.486 1.444zm0-21.377c.821 0 1.486-.647 1.486-1.445S11.821.867 11 .867s-1.486.646-1.486 1.444c0 .798.665 1.445 1.486 1.445z"
                                                                id="ShapeIcon2"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <h4 class="relative mt-6 text-lg font-bold">
                                    Student Panel
                                </h4>
                                <p class="relative mt-2 text-base text-center text-gray-600">
                                    Students can manage which type of subject
                                    and teacher the want
                                </p>
                                <a
                                    href="#_"
                                    class="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        <div class="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
                            <div class="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                                <svg
                                    class="absolute w-full h-full text-slate-50 fill-current"
                                    viewBox="0 0 378 410"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <g>
                                            <path d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z"></path>
                                        </g>
                                    </g>
                                </svg>
                                {/* <!-- FEATURE Icon 3 --> */}
                                <svg
                                    class="relative w-20 h-20"
                                    viewBox="0 0 58 58"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                >
                                    <defs>
                                        <linearGradient
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="100%"
                                            id="linearGradient-1Icon3"
                                        >
                                            <stop
                                                stop-color="#32FBFC"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                stop-color="#3214F2"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                        <filter
                                            x="-14%"
                                            y="-10%"
                                            width="128%"
                                            height="128%"
                                            filterUnits="objectBoundingBox"
                                            id="filter-3Icon3"
                                        >
                                            <feOffset
                                                dy="2"
                                                in="SourceAlpha"
                                                result="shadowOffsetOuter1"
                                            ></feOffset>
                                            <feGaussianBlur
                                                stdDeviation="2"
                                                in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"
                                            ></feGaussianBlur>
                                            <feColorMatrix
                                                values="0 0 0 0 0.031372549 0 0 0 0 0.149019608 0 0 0 0 0.658823529 0 0 0 0.15 0"
                                                in="shadowBlurOuter1"
                                            ></feColorMatrix>
                                        </filter>
                                        <path
                                            d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                                            id="path-2Icon3"
                                        ></path>
                                    </defs>
                                    <g
                                        id="Page-1Icon3"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <g
                                            id="Desktop-HDIcon3"
                                            transform="translate(-1091 -1278)"
                                        >
                                            <g
                                                id="FeaturesIcon3"
                                                transform="translate(170 915)"
                                            >
                                                <g
                                                    id="Group-9-Copy-2Icon3"
                                                    transform="translate(800 365)"
                                                >
                                                    <g
                                                        id="Group-8Icon3"
                                                        transform="translate(125)"
                                                    >
                                                        <g id="Rectangle-9Icon3">
                                                            <use
                                                                fill="#000"
                                                                filter="url(#filter-3Icon3)"
                                                                href="#path-2Icon3"
                                                            ></use>
                                                            <use
                                                                fill="url(#linearGradient-1Icon3)"
                                                                href="#path-2Icon3"
                                                            ></use>
                                                        </g>
                                                        <g
                                                            id="smart-notificationsIcon3"
                                                            transform="translate(15 11)"
                                                            fill="#FFF"
                                                            fill-rule="nonzero"
                                                        >
                                                            <path
                                                                d="M12.519 3.243a6.808 6.808 0 00-.187 1.298h-8.44a2.595 2.595 0 00-2.595 2.594v12.973a2.595 2.595 0 002.595 2.595h12.973a2.595 2.595 0 002.594-2.595v-8.44c.445-.02.88-.084 1.298-.187v8.627A3.892 3.892 0 0116.865 24H3.892A3.892 3.892 0 010 20.108V7.135a3.892 3.892 0 013.892-3.892h8.627zm6.616 6.487a4.865 4.865 0 110-9.73 4.865 4.865 0 010 9.73z"
                                                                id="IconIcon3"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <h4 class="relative mt-6 text-lg font-bold">
                                    Smart Notifications
                                </h4>
                                <p class="relative mt-2 text-base text-center text-gray-600">
                                    Our smart notifications will notify you !
                                </p>
                                <a
                                    href="#_"
                                    class="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section
                id="free-chapters"
                aria-label="Free preview"
                class="scroll-mt-14 bg-blue-600 dark:bg-slate-700 sm:scroll-mt-32"
            >
                <div class="overflow-hidden lg:relative">
                    <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32">
                        <svg
                            aria-hidden="true"
                            width="432"
                            height="184"
                            class="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3"
                        >
                            <defs>
                                <symbol id=":Rd6:-0" width="40" height="40">
                                    <rect
                                        class="fill-blue-500"
                                        width="40"
                                        height="40"
                                    ></rect>
                                    <circle
                                        class="fill-blue-600"
                                        cx="20"
                                        cy="20"
                                        r="13"
                                    ></circle>
                                </symbol>
                                <symbol id=":Rd6:-1" width="40" height="40">
                                    <circle
                                        class="fill-blue-300"
                                        cx="20"
                                        cy="20"
                                        r="20"
                                    ></circle>
                                    <rect
                                        class="fill-blue-600"
                                        width="20"
                                        height="20"
                                        x="10"
                                        y="10"
                                    ></rect>
                                </symbol>
                            </defs>
                            <use href="#:Rd6:-0" x="0" y="0"></use>
                            <use href="#:Rd6:-1" x="56" y="0"></use>
                            <use href="#:Rd6:-0" x="112" y="0"></use>
                            <use href="#:Rd6:-1" x="168" y="0"></use>
                            <use href="#:Rd6:-1" x="224" y="0"></use>
                            <use href="#:Rd6:-0" x="280" y="0"></use>
                            <use href="#:Rd6:-1" x="336" y="0"></use>
                            <use href="#:Rd6:-0" x="392" y="0"></use>
                            <use href="#:Rd6:-1" x="0" y="48"></use>
                            <use href="#:Rd6:-0" x="56" y="48"></use>
                            <use href="#:Rd6:-1" x="112" y="48"></use>
                            <use href="#:Rd6:-1" x="168" y="48"></use>
                            <use href="#:Rd6:-0" x="224" y="48"></use>
                            <use href="#:Rd6:-0" x="280" y="48"></use>
                            <use href="#:Rd6:-0" x="336" y="48"></use>
                            <use href="#:Rd6:-1" x="392" y="48"></use>
                            <use href="#:Rd6:-0" x="0" y="96"></use>
                            <use href="#:Rd6:-1" x="56" y="96"></use>
                            <use href="#:Rd6:-0" x="112" y="96"></use>
                            <use href="#:Rd6:-1" x="168" y="96"></use>
                            <use href="#:Rd6:-1" x="224" y="96"></use>
                            <use href="#:Rd6:-0" x="280" y="96"></use>
                            <use href="#:Rd6:-1" x="336" y="96"></use>
                            <use href="#:Rd6:-0" x="392" y="96"></use>
                            <use href="#:Rd6:-1" x="0" y="144"></use>
                            <use href="#:Rd6:-0" x="56" y="144"></use>
                            <use href="#:Rd6:-1" x="112" y="144"></use>
                            <use href="#:Rd6:-1" x="168" y="144"></use>
                            <use href="#:Rd6:-0" x="224" y="144"></use>
                            <use href="#:Rd6:-0" x="280" y="144"></use>
                            <use href="#:Rd6:-0" x="336" y="144"></use>
                            <use href="#:Rd6:-1" x="392" y="144"></use>
                        </svg>
                        <div>
                            <h2 class="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
                                Get the free Subscription for the first Month
                            </h2>
                            <p class="mt-4 text-lg tracking-tight text-blue-200">
                                Enter your email address To Subscribe To get The
                                latest Article from Us
                            </p>
                        </div>
                        <form class="lg:pl-16">
                            <h3 class="text-base font-medium tracking-tight text-white">
                                Get first free subscription straight to your
                                inbox
                                <span aria-hidden="true">→</span>
                            </h3>
                            <div class="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
                                <div class="relative sm:static sm:flex-auto">
                                    <input
                                        type="email"
                                        id="email-address"
                                        required=""
                                        aria-label="Email address"
                                        placeholder="Email address"
                                        class="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                                    />
                                    <div class="absolute inset-0 rounded-xl border border-white peer-focus:border-white peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl"></div>
                                </div>
                                <button
                                    class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img
                            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                            alt="m"
                        />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                            Download our free mobile app
                        </h2>
                        <p class="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Iusto recusandae tenetur iste quaerat
                            voluptatibus quibusdam nam repudiandae{" "}
                        </p>

                        <div class="mt-6 sm:-mx-2">
                            <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                                <a
                                    href="#"
                                    class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
                                >
                                    <svg
                                        class="w-6 h-6 mx-2 fill-current"
                                        xlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 512 512"
                                        space="preserve"
                                    >
                                        <g>
                                            <g>
                                                <path
                                                    d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105
                                            C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302
                                            c41.355,0,75,33.645,75,75V407z"
                                                ></path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166
                                            l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664
                                            L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498
                                            C306.487,136.719,307.375,129.981,305.646,123.531z"
                                                ></path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65
                                            c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341
                                            H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"
                                                ></path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344
                                            c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span class="mx-2">
                                        Get it on the App Store
                                    </span>
                                </a>
                            </div>

                            <div class="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                                <a
                                    href="#"
                                    class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
                                >
                                    <svg
                                        class="w-6 h-6 mx-2 fill-current"
                                        viewBox="-28 0 512 512.00075"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path>
                                    </svg>
                                    <span class="mx-2">
                                        Get it on Google Play
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-6 mx-auto container sm:py-16 lg:px-24 ">
                    <div className=" items-center text-center mb-8 lg:mb-16 ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Created For Teachers and Students
                        </h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                            Here at Gubdiye you can find the best teachers and
                            the subject you like
                        </p>
                    </div>
                    <div className="space-y-8 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 justify-center lg:grid-cols-3 mdsm:gap-12 md:gap-12 md:space-y-0">
                        <div className="sm:mt-8 md:mt-0 lg:mt-0 flex flex-col items-center text-center">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-bluelight-100 lg:h-12 lg:w-12 dark:bg-bluelight-900">
                                <FeatherIcons.BarChart2 className="w-5 h-5 text-bluelight-600 lg:w-6 lg:h-6 dark:text-bluelight-300" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Calloabartion
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Here You can callaobrate the teacher you like
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-bluelight-100 lg:h-12 lg:w-12 dark:bg-bluelight-900">
                                <svg
                                    className="w-5 h-5 text-bluelight-600 lg:w-6 lg:h-6 dark:text-bluelight-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Legal
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Protect your organization, devices and stay
                                compliant with our structured workflows and
                                custom permissions made for you.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-bluelight-100 lg:h-12 lg:w-12 dark:bg-bluelight-900">
                                <svg
                                    className="w-5 h-5 text-bluelight-600 lg:w-6 lg:h-6 dark:text-bluelight-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Business Automation
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Auto-assign tasks, send Slack messages, and much
                                more. Now power up with hundreds of new
                                templates to help you get started.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-bluelight-100 lg:h-12 lg:w-12 dark:bg-bluelight-900">
                                <svg
                                    className="w-5 h-5 text-bluelight-600 lg:w-6 lg:h-6 dark:text-bluelight-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                    <path
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Finance
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Audit-proof software built for critical
                                financial operations like month-end close and
                                quarterly budgeting.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-bluelight-100 lg:h-12 lg:w-12 dark:bg-bluelight-900">
                                <svg
                                    className="w-5 h-5 text-bluelight-600 lg:w-6 lg:h-6 dark:text-bluelight-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Enterprise Design
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Craft beautiful, delightful experiences for both
                                marketing and product with real cross-company
                                collaboration.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-bluelight-100 lg:h-12 lg:w-12 dark:bg-bluelight-900">
                                <svg
                                    className="w-5 h-5 text-bluelight-600 lg:w-6 lg:h-6 dark:text-bluelight-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Operations
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Keep your company’s lights on with customizable,
                                iterative, and structured workflows built for
                                all efficient teams and individual.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <section
                    id="resources"
                    aria-labelledby="resources-title"
                    class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
                >
                    <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
                        <h2
                            class="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600"
                            id="resources-title"
                        >
                            <span class="font-mono text-sm" aria-hidden="true">
                                03
                            </span>
                            <span class="ml-3 h-3.5 w-px bg-blue-600/20"></span>
                            <span class="ml-3 text-base font-medium tracking-tight">
                                Resources
                            </span>
                        </h2>
                        <p class="mt-8 font-display text-4xl font-bold tracking-tight dark:text-white text-slate-900">
                            Tools and resources you can use to get started even
                            faster and progress even further.
                        </p>
                        <p class="mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300">
                            Design assets, icon teardowns, and a community of
                            fellow icon designers where you can ask questions,
                            get feedback, and accelerate your learning.
                        </p>
                    </div>
                    <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
                        <ol
                            role="list"
                            class="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
                        >
                            <li class="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                                <div class="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                    <div class="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                                        <img
                                            alt=""
                                            src="https://primer.tailwindui.com/_next/static/media/figma.0d78130b.svg"
                                            width="160"
                                            height="144"
                                            decoding="async"
                                            data-nimg="future"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-base font-medium tracking-tight dark:text-slate-100 text-slate-900">
                                        Figma icon templates
                                    </h3>
                                    <p class="mt-2 text-sm dark:text-slate-300 text-slate-600">
                                        Pefectly structured templates for
                                        quickly designing new icons at dozens of
                                        common sizes.
                                    </p>
                                </div>
                            </li>
                            <li class="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                                <div class="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <img
                                            alt=""
                                            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
                                            srcset="https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=256&amp;q=75 256w, 
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=384&amp;q=75 384w, 
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=640&amp;q=75 640w,
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=750&amp;q=75 750w,
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=828&amp;q=75 828w,
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=1080&amp;q=75 1080w,
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=1200&amp;q=75 1200w,
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=1920&amp;q=75 1920w,
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=2048&amp;q=75 2048w,
                                            https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=3840&amp;q=75 3840w"
                                            src="https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&amp;w=3840&amp;q=75"
                                            width="4096"
                                            height="4096"
                                            decoding="async"
                                            data-nimg="future"
                                            class="absolute inset-0 h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                        <img
                                            alt=""
                                            src="https://primer.tailwindui.com/_next/static/media/video-player.e8496657.svg"
                                            width="160"
                                            height="144"
                                            decoding="async"
                                            data-nimg="future"
                                            class="relative"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-base font-medium tracking-tight dark:text-slate-100 text-slate-900">
                                        Weekly icon teardowns
                                    </h3>
                                    <p class="mt-2 text-sm dark:text-slate-300 text-slate-600">
                                        Weekly videos where we dissect and
                                        recreate beautiful icons we find on the
                                        web.
                                    </p>
                                </div>
                            </li>
                            <li class="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                                <div class="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                    <div class="absolute inset-0 flex items-center justify-center dark:bg-white bg-[#6366F1]">
                                        <img
                                            alt=""
                                            src="https://primer.tailwindui.com/_next/static/media/discord.ad5bcc98.svg"
                                            width="160"
                                            height="144"
                                            decoding="async"
                                            data-nimg="future"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-base font-medium tracking-tight dark:text-slate-100 text-slate-900">
                                        Community of icon designers
                                    </h3>
                                    <p class="mt-2 text-sm dark:text-slate-300 text-slate-600">
                                        A private Discord server where you can
                                        get help and give feedback on each
                                        others' work.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        </div>
    );
}
