import React from "react";
import PageNotFound from "../Assets/img/404.png";

export default function Error() {
    return (
        <div className="bg-slate-100 dark:bg-primary-light lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 flex  flex-col-reverse justify-items-center lg:flex-row md:gap-28 gap-10">
            <div className="xl:pt-24  w-full xl:w-[900px]relative pb-12 lg:pb-0">
                <div className="relative  ">
                    <div className="absolute ml-12 m:mr-14  md:mb-44 ">
                        <div className="">
                            <h1 className="my-2 text-gray-800 dark:text-white font-bold text-2xl">
                                Looks like you've found the doorway to the great
                                nothing
                            </h1>
                            <p className="my-2 text-gray-800 dark:text-white">
                                Sorry about that! Please visit our hompage to
                                get where you need to go.
                            </p>
                            <button className="sm:w-full lg:w-auto  md:w-64 my-2 border rounded  py-4 px-8 text-center bg-yellow-400 dark:bg-bluedark  text-white  hover:bg-primary-dark dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                                <a href="/">Take me there!</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-12">
                <img
                    src={PageNotFound}
                    className="w-[900px] sm:w-44 lg:w-[700px] md:w-[400px] mr-12 lg:mr-96"
                />
            </div>
        </div>
    );
}
