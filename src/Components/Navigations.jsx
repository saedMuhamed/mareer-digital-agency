import React from "react";
import { FiMenu } from "react-icons/fi";

import Switcher from "../Components/Switcher";

export default function Navbar() {
  return (
    <div className="absolute b-40 left-2/4 z-[999] my-4 flex w-full max-w-screen-2xl -translate-x-2/4 flex-wrap items-center px-4 lg:fixed undefined">
      <nav className="block w-full max-w-screen-2xl rounded-xl px-8 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-white py-4 pl-6 pr-5 lg:py-2 shadow-2xl shadow-blue-gray-500/10">
        <div className="flex w-full items-center !justify-between text-black dark:text-white undefined">
          <a
            href="/"
            className="py-2.375 text-size-4xl font-semibold mr-4 whitespace-nowrap text-inherit lg:ml-0"
          >
            Mareer Digital Agency
          </a>
          <button
            className="relative middle none font-sans font-semibold text-center uppercase transition-all
          disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[60px] max-h-[60px] 
          rounded-lg text-2xl ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent
          active:bg-transparent lg:hidden"
            type="button"
            onClick={""}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <FiMenu />
            </span>
          </button>
          <div className="lg:base-auto hidden flex-grow basis-full items-center overflow-hidden lg:flex lg-max:max-h-0">
            <ul className=" mb-0 flex list-none flex-col gap-2 pl-0 text-inherit transition-all lg:ml-auto lg:flex-row lg:gap-4">
              <i aria-expanded="false">
                <span className="flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current lg:px-2 cursor-pointer">
                  <span className="font-semibold not-italic">Home</span>
                </span>
              </i>
              <i aria-expanded="false">
                <span className="flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current lg:px-2 cursor-pointer">
                  <span className="font-semibold not-italic">Services</span>
                </span>
              </i>
              <i aria-expanded="false">
                <span className="flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current lg:px-2 cursor-pointer">
                  <span className="font-semibold not-italic">Our Team</span>
                </span>
              </i>
              <i aria-expanded="false">
                <span className="flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current lg:px-2 cursor-pointer">
                  <span className="font-semibold not-italic">About</span>
                </span>
              </i>
              <i aria-expanded="false">
                <span className="flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current lg:px-2 cursor-pointer">
                  <span className="font-semibold not-italic">Contact Us</span>
                </span>
              </i>
            </ul>
          </div>
          <Switcher className="text-lg font-semibold flex items-centertransition-all duration-250 text-size-sm text-current  cursor-pointer" />
        </div>
      </nav>
    </div>
  );
}
