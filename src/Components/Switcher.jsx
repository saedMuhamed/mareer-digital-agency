import React from "react";
import useThemeSwitcher from "./useThemeSwitcher";
import { FiMoon, FiSun , } from "react-icons/fi";


export default function Switcher() {
    const [activeTheme, setTheme] = useThemeSwitcher();
    

    return (
        
        <div onClick={() => setTheme(activeTheme)} aria-label="Theme Switcher">
            {activeTheme === "dark" ? (
                <FiMoon className="text-2xl rounded-full text-primary-dark mx-7 lg:mx-16 divide-primary-light sm:text-primary-dark dark:text-2xl" />
            ) : (
                <FiSun className="text-2xl rounded-md text-primary-light mx-7 lg:mx-16 sm:text-primary-light dark:text-2xl " />
            )}
        </div>
        
        
        
    );
}
