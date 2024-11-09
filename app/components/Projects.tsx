"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="pb-10">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-indigo-950 from-indigo-100 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute transform translate-x-1/2 translate-y-1/2"></div>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 pb-6">
                {[
                    { src: "/projectimages/project1.jpg", name: "nakar.in", technologies: "Python, Django", link:"https://nakar.in", source:"https://github.com/N4karin/music-webpage", alt: "MusicPage", description: "My personal website showcasing current and past music projects, software/tools used and a comprehensive library of my discography." },
                    { src: "/projectimages/project2.jpg", name: "VR Open Text Input", technologies: "C#, Unity", link:"https://github.com/N4karin/vr-open-text-input", source:"https://github.com/N4karin/vr-open-text-input", alt: "VRProject", description: "A set of 3 modular input methods to use with the Unity Game engine. Result of my Bachelor Thesis, researching whether mimicking real-life input methods is the most user-friendly." },
                    { src: "", name: "Kanji Driller (WIP)", technologies: "Angular, MongoDB", alt: "KanjiDrill", link:"", source:"", description: "A Japanese kanji learning tool featuring flashcard-style drills. Users can filter and select specific letters they want to learn." },
                    { src: "", name: "Interval Trainer (WIP)", technologies: "React, Express", alt: "IntervalTrainer", link:"", source:"", description: "An app to learn and memorize music intervals and chords. Offers recognition and recall quizzes using the keyboard as a virtual instrument." },
                ].map((project, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="relative group w-full h-64 md:h-48 transform hover:-translate-y-6 transition-all duration-200">
                            {project.src ? (
                                <Image
                                    src={project.src}
                                    alt={project.alt}
                                    layout="fill"
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center w-full h-full text-indigo-500 border-indigo-500 border-2">
                                    Coming Soon
                                </div>
                            )}

                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300"></div>

                            {/* Overlay buttons */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex gap-x-8">
                                    <a href={project.link} target="_blank">
                                        <button
                                            className="bg-gray-500 bg-opacity-50 border-gray-500 border-2 text-white py-2 px-4 hover:bg-gray-700 hover:bg-opacity-50"
                                        >
                                            Go to
                                        </button>
                                    </a>
                                    <a href={project.source} target="_blank">
                                        <button
                                            className="bg-gray-500 bg-opacity-50 border-gray-500 border-2 text-white py-2 px-4 hover:bg-gray-700 hover:bg-opacity-50"
                                        >
                                            Source
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project description */}
                        <div className="mt-4 flex flex-col space-y-2 h-40">
                            <p className="text-left font-bold text-xl">{project.name}</p>
                            <p className="text-left flex-grow">{project.description}</p>
                            <p className="text-left font-semibold text-sm text-gray-500">{project.technologies}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
