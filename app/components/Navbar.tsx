"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeBtn from "./ThemeBtn";

export default function Navbar() {
    let pathname = usePathname() || '/'
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex justify-between w-full">
                                <div className="flex items-center">
                                    <Link href="/">
                                        <h1 className="text-2xl font-medium">
                                            <span className="text-indigo-500">Nakarin</span> Srijumrat
                                        </h1>
                                    </Link>
                                </div>

                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                    <Link href="/" prefetch className={`${pathname === "/" ? "border-indigo-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                        }`}>
                                        Home
                                    </Link>

                                    <Link href="/projects" prefetch className={`${pathname === "/projects" ? "border-indigo-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                        }`}>
                                        Projects
                                    </Link>

                                    <Link href="/skills" prefetch className={`${pathname === "/skills" ? "border-indigo-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                        }`}>
                                        Skills
                                    </Link>

                                    <Link href="/contact" prefetch className={`${pathname === "/contact" ? "border-indigo-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                        }`}>
                                        Contact
                                    </Link>

                                    <ThemeBtn />
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                <ThemeBtn />
                                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-800">
                                    {open ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>

                                    )}
                                </DisclosureButton>

                            </div>
                        </div>
                    </div>
                    <DisclosurePanel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link href="/"
                            prefetch
                            className={`${pathname == "/" ? 'bg-indigo-50 border-indigo-500 text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800'
                                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'
                                } `}>
                                    Home
                            </Link>

                            <Link href="/projects"
                            prefetch
                            className={`${pathname == "/projects" ? 'bg-indigo-50 border-indigo-500 text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800'
                                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'
                                } `}>
                                    Projects
                            </Link>

                            <Link href="/skills"
                            prefetch
                            className={`${pathname == "/skills" ? 'bg-indigo-50 border-indigo-500 text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800'
                                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'
                                } `}>
                                    Skills
                            </Link>

                            <Link href="/contact"
                            prefetch
                            className={`${pathname == "/contact" ? 'bg-indigo-50 border-indigo-500 text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800'
                                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'
                                } `}>
                                    Contact
                            </Link>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}