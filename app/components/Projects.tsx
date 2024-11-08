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
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 pb-6">
                {[
                    { src: "/projectimages/project1.jpg", name: "nakar.in", technologies: "Python, Django", alt: "MusicPage", description: "My personal website showcasing current and past projects, software/tools used and a comprehensive library of my discography." },
                    { src: "/projectimages/project2.png", name: "Kanji Driller", technologies: "Angular, MongoDB", alt: "KanjiDrill", description: "A Japanese kanji learning tool featuring flashcard-style drills. Users can filter and select specific letters they want to learn." },
                    { src: "/projectimages/project3.png", name: "Interval Trainer", technologies: "React, Express", alt: "IntervalTrainer", description: "An app to learn and memorize music intervals and chords. Offers recognition and recall quizzes using the keyboard as a virtual instrument." },
                ].map((project, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="relative group w-full h-64 md:h-48 transform hover:-translate-y-6 transition-all duration-200">
                            <Image
                                src={project.src}
                                alt={project.alt}
                                layout="fill"
                                className="object-cover"
                            />

                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300"></div>

                            {/* Overlay buttons */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex gap-x-8">
                                    <a href="https://www.youtube.com/watch?v=zaLPtByJEG0" target="_blank">
                                        <button
                                            className="bg-gray-500 bg-opacity-50 border-gray-500 border-2 text-white py-2 px-4 hover:bg-gray-700 hover:bg-opacity-50"
                                        >
                                            Go to
                                        </button>
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=zaLPtByJEG0" target="_blank">
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
