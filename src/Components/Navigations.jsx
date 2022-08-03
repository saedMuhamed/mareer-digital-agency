import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuAlt1Icon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import logo from "../../Assets/logo/logo.png";
import { NavLink, Link } from "react-router-dom";

import logo from "../../Assets/images/logo/logo.png";
import smalllogo from "../../Assets/images/logo/smalllogo.png";

import Switcher from "../Switcher/Switcher";

const solutions = [
    {
        name: "Analytics",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: ChartBarIcon,
    },
    {
        name: "Engagement",
        description:
            "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: CursorClickIcon,
    },
    {
        name: "Security",
        description: "Your customers' data will be safe and secure.",
        href: "#",
        icon: ShieldCheckIcon,
    },
    {
        name: "Integrations",
        description:
            "Connect with third-party tools that you're already using.",
        href: "#",
        icon: ViewGridIcon,
    },
    {
        name: "Automations",
        description:
            "Build strategic funnels that will drive your customers to convert",
        href: "#",
        icon: RefreshIcon,
    },
];

const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: SupportIcon,
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkAltIcon,
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: CalendarIcon,
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: ShieldCheckIcon,
    },
];

const navitem = [
    //href === to
    {
        id: 1,
        name: "Home",
        to: "home",
    },
    {
        id: 2,
        name: "Teachers",
        to: "teachers",
    },
    {
        id: 3,
        name: "Pricing",
        to: "pricing",
    },
    {
        id: 4,
        name: "Contact US",
        to: "contact",
    },
    {
        id: 5,
        name: "About",
        to: "about",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    let [isPopover, setIsPopover] = useState(false);

    return (
        <>
            {/* // Navbar */}
            <Popover className="sticky top-0 z-50 bg-white dark:bg-bluedark">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 py-0 sm:py-0">
                    <div className="flex justify-between items-center border-b-2 border-gray-50 dark:border-bluedark py-4 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="sr-only">Gudbiye</span>
                                <img
                                    className="h-10 w-auto sm:h-10"
                                    src={logo}
                                    alt="Raabid Logo"
                                />
                            </a>
                        </div>

                        {/* <div className="md:hidden p-2">
                            <Switcher />
                        </div> */}
                        {/* Mobile Button Menu */}
                        <div className="md:hidden ">
                            <Popover.Button
                                onClick={() => setIsPopover(true)}
                                className="bg-white dark:bg-bluedark p-2 rounded-md inline-flex  text-gray-400 dark:text-white hover:text-bluelight-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bluelight-700"
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuAlt1Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>

                        {/* Navbar Menu Items */}

                        <Popover.Group
                            as="nav"
                            className="hidden md:flex items-center space-x-6 lg:space-x-10 dark:bg-bluedark"
                        >
                            {/* <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open
                                                ? "text-gray-900 dark:text-slate-100"
                                                : "text-gray-500 dark:text-gray-400",
                                            "group bg-white  dark:bg-bluedark dark:hover:text-gray-100 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-bluelight-500"
                                        )}
                                    >
                                        <span>Solutions</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open
                                                    ? "text-gray-900 dark:text-slate-100"
                                                    : "text-gray-400 dark:text-slate-400",
                                                "ml-2 h-5 w-5 group-hover:text-gray-500 "
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white dark:bg-bluedarklight px-5 py-6 sm:gap-8 sm:p-8">
                                                    
                                                    <a
                                                        key="Analytics"
                                                        href="#"
                                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-bluedark"
                                                    >
                                                        <ChartBarIcon
                                                            className="flex-shrink-0 h-6 w-6 text-bluelight-600"
                                                            aria-hidden="true"
                                                        />
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900 dark:text-white">
                                                                Analytics
                                                            </p>
                                                            <p className="mt-1 text-sm text-gray-500 dark:text-slate-500">
                                                                Get a better
                                                                understanding of
                                                                where your
                                                                traffic is
                                                                coming from.
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                                // Footer Popover
                                                <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 dark:bg-bluedark">
                                                    <div
                                                        key="Watch Demo"
                                                        className="flow-root"
                                                    >
                                                        <a
                                                            href="#"
                                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-bluedarklight"
                                                        >
                                                            <PlayIcon
                                                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                            <span className="ml-3">
                                                                Watch Demo
                                                            </span>
                                                        </a>
                                                    </div>

                                                    <div
                                                        key="Contact Sales"
                                                        className="flow-root"
                                                    >
                                                        <a
                                                            href="#"
                                                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-bluedarklight"
                                                        >
                                                            <PhoneIcon
                                                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                            <span className="ml-3">
                                                                Watch Demo
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover> */}

                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-base font-medium text-bluelight-500 hover:text-bluelight-700  dark:text-bluelight-500 dark:hover:text-bluelight-700" //activeClassName
                                        : "text-base font-medium text-gray-500 hover:text-gray-900  dark:text-slate-400 dark:hover:text-slate-100"
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="teachers"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-base font-medium text-bluelight-500 hover:text-bluelight-700  dark:text-bluelight-500 dark:hover:text-bluelight-700" //activeClassName
                                        : "text-base font-medium text-gray-500 hover:text-gray-900  dark:text-slate-400 dark:hover:text-slate-100"
                                }
                            >
                                Teachers
                            </NavLink>

                            <NavLink
                                to="pricing"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-base font-medium text-bluelight-500 hover:text-bluelight-700  dark:text-bluelight-500 dark:hover:text-bluelight-700" //activeClassName
                                        : "text-base font-medium text-gray-500 hover:text-gray-900  dark:text-slate-400 dark:hover:text-slate-100"
                                }
                            >
                                Pricing
                            </NavLink>

                            <NavLink
                                to="contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-base font-medium text-bluelight-500 hover:text-bluelight-700  dark:text-bluelight-500 dark:hover:text-bluelight-700" //activeClassName
                                        : "text-base font-medium text-gray-500 hover:text-gray-900  dark:text-slate-400 dark:hover:text-slate-100"
                                }
                            >
                                Contact US
                            </NavLink>

                            <NavLink
                                to="about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-base font-medium text-bluelight-500 hover:text-bluelight-700  dark:text-bluelight-500 dark:hover:text-bluelight-700" //activeClassName
                                        : "text-base font-medium text-gray-500 hover:text-gray-900  dark:text-slate-400 dark:hover:text-slate-100"
                                }
                            >
                                About
                            </NavLink>

                            {/* <a
                            href="pricing"
                            className="text-base font-medium text-gray-500 hover:text-gray-900  dark:text-slate-400 dark:hover:text-slate-100"
                        >
                            Pricing
                        </a> */}
                            {/* <NavLink to='#' className='' >Home</NavLink> */}
                            {/* <a
                            href="#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Docs
                        </a> */}

                            {/* <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open
                                                ? "text-gray-900"
                                                : "text-gray-500",
                                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluelight-500"
                                        )}
                                    >
                                        <span>More</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open
                                                    ? "text-gray-600"
                                                    : "text-gray-400",
                                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {resources.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon
                                                                className="flex-shrink-0 h-6 w-6 text-bluelight-600"
                                                                aria-hidden="true"
                                                            />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    {item.name}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                                            Recent Posts
                                                        </h3>
                                                        <ul
                                                            role="list"
                                                            className="mt-4 space-y-4"
                                                        >
                                                            {recentPosts.map(
                                                                (post) => (
                                                                    <li
                                                                        key={
                                                                            post.id
                                                                        }
                                                                        className="text-base truncate"
                                                                    >
                                                                        <a
                                                                            href={
                                                                                post.href
                                                                            }
                                                                            className="font-medium text-gray-900 hover:text-gray-700"
                                                                        >
                                                                            {
                                                                                post.name
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-bluelight-600 hover:text-bluelight-500"
                                                        >
                                                            {" "}
                                                            View all posts{" "}
                                                            <span aria-hidden="true">
                                                                &rarr;
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover> */}
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Switcher />

                            <Link
                                to="login"
                                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-bluelight-700 dark:text-bluelight-700 dark:hover:text-white"
                            >
                                Log in
                            </Link>
                            <Link
                                to="signup"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-bluelight-700 hover:bg-bluelight-700"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Meanu items */}
                <Transition
                    as={Fragment}
                    show={isPopover}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        static="false"
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right overflow-hidden md:hidden"
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-bluedark divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src={logo}
                                            alt="gudbiyr"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button
                                            onClick={() => setIsPopover(false)}
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center dark:bg-bluedark text-gray-400 hover:text-bluelight-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bluelight-700"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-6">
                                        {navitem.map((item) => (
                                            <NavLink
                                                key={item.id}
                                                to={item.to}
                                                onClick={() =>
                                                    setIsPopover(false)
                                                }
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "text-base font-medium text-bluelight-500 hover:text-bluelight-700  dark:text-bluelight-500 dark:hover:text-bluelight-700" //activeClassName
                                                        : "text-base font-medium text-gray-500 hover:text-gray-900  dark:text-slate-400 dark:hover:text-slate-100"
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <a
                                        href="#"
                                        className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                    >
                                        Pricing
                                    </a>

                                    <a
                                        href="#"
                                        className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                    >
                                        Docss
                                    </a>
                                    {resources.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </a>
                                    <p className="mt-6 text-center text-base font-medium dark:text-white text-gray-500">
                                        Existing customer?{" "}
                                        <a
                                            href="#"
                                            className="text-bluelight-600 hover:text-bluelight-500"
                                        >
                                            Sign in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    );
}
