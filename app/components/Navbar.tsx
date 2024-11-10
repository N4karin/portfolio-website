"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import ThemeBtn from "./ThemeBtn";
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

export default function Navbar() {
    const [activeHash, setActiveHash] = useState('');
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
        };

        const observer = new IntersectionObserver((entries) => {
            const visibleSections = entries
                .filter(entry => entry.isIntersecting)
                .map(entry => ({
                    id: entry.target.id,
                    top: entry.target.getBoundingClientRect().top
                }));
    
            if (visibleSections.length > 0) {
                // Sort by top position to find the section closest to the top
                visibleSections.sort((a, b) => a.top - b.top);
                const closestSection = visibleSections[0];
                const newHash = `#${closestSection.id}`;
                if (newHash !== activeHash && !scrolling) {
                    updateHash(newHash);
                }
            }
        }, observerOptions);

        const updateHash = debounce((newHash: string) => {
            if (!scrolling) { // Update only if not in scrolling mode
                setActiveHash(newHash);
                window.history.replaceState(null, "", newHash);
            }
        }, 50);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            updateHash.cancel();
        };
    }, [activeHash, scrolling]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);

        if (section) {
            setScrolling(true);
    
            // Scroll to the section with an offset for the navbar height
            const offset = -20; // height of navbar
            const yCoordinate = section.getBoundingClientRect().top + window.scrollY + offset;
    
            window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
    
            setTimeout(() => {
                setActiveHash(`#${sectionId}`);
                window.history.replaceState(null, "", `#${sectionId}`);
                setScrolling(false);
            }, 600);
        }
    };

    return (
        <Disclosure as="nav" className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b-2 dark:border-gray-500">
            {({ open, close }) => (
                <>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-12">
                            <div className="flex justify-between w-full">
                                <Link href="/">
                                    <h1 className="text-3xl font-medium pt-2">
                                        <span className="text-indigo-500">nakarin</span>.dev
                                    </h1>
                                </Link>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                    {["home", "projects", "skills", "contact"].map((section) => (
                                        <a
                                            key={section}
                                            href={`#${section}`}
                                            onClick={(e) => handleSmoothScroll(e, section || "home")}
                                            className={`${activeHash === `#${section}` ? 
                                                "border-indigo-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                : 'hover:text-black border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full'
                                            }`}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1) || 'Home'}
                                        </a>
                                    ))}
                                    <ThemeBtn />
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                <ThemeBtn />
                                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-800">
                                    {open ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                            {["home", "projects", "skills", "contact"].map((section) => (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, section || "home");
                                        close();
                                    }}
                                    className={`${activeHash === `#${section}` ? 
                                        'bg-indigo-100 border-indigo-500 text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800'
                                        : 'hover:text-black border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 dark:hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1) || 'Home'}
                                </a>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
