import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaGraduationCap, FaChartBar } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "Resume Analyzer",
            description: "An AI-powered system that analyzes CVs, evaluates skills, and ranks candidates for job suitability.",
            technologies: ["Next.js", "FastAPI", "PostgreSQL", "RAG", "OCR", "ML model integration for skill extraction"],
            image: "rzmi.png",
            icon: <FaGraduationCap className="text-blue-400 text-3xl" />,
            github: "https://github.com/nupur221/resume_analizer",
            live: "#"
        },
        {
            title: "Green University Computer Club Website",
            description: "A dynamic platform for managing club activities, events, and member projects.",
            technologies: ["TypeScript", "Next.js", "Vercel", "MongoDB"],
            image: "gucc.png",
            icon: <FaGraduationCap className="text-green-400 text-3xl" />,
            github: "https://github.com/GreenUniversityComputerClub/gucc",
            githubText: "Contrubution.",
            live: "https://gucc.green.edu.bd/"
        },
        {
            title: "Chat Application",
            description: "A chat application built with Java Swing.",
            technologies: ["Java", "Java Swing", "MySQL"],
            image: "cap.png",
            icon: <FaGraduationCap className="text-yellow-400 text-3xl" />,
            github: "https://github.com/nupur221/OOP_Project-swing-",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 lg:py-20 md:py-16 sm:py-12 bg-gray-100 dark:bg-[#0b1220] min-h-screen flex items-center justify-center font-Times New Roman">
            <div className="max-w-[140rem] w-full mx-auto px-4 sm:px-8 lg:px-12 ">

                {/* Header */}
                <div className="w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] text-center mb-16 mt-16">
                    <h2 className="inline-block bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-100 py-2 px-6 rounded-full text-[2.2rem] xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl mb-6 text-center animate-[fadeInDown_1s_ease-out_0.9s_both] tracking-wide [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] font-bold">
                        Featured Projects
                    </h2>
                    <p className="text-lg xl:text-base lg:text-base md:text-base sm:text-sm font-semibold mb-8 animate-[fadeInUp_1s_ease-out_0.9s_both] tracking-wide text-center hover:translate-x-2.5 transition-transform duration-300 text-gray-600 dark:text-gray-300">
                        A collection of my recent work and side projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 rounded-sm overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-xl hover:-translate-y-2 flex flex-col">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest shadow-md">
                                    FEATURED
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-blue-600 dark:text-blue-400 text-xl bg-blue-50 dark:bg-blue-900/20 p-2 rounded shrink-0">
                                        {project.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="text-xs border border-gray-300 dark:border-zinc-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-zinc-800">
                                    <div>
                                        {/* @ts-ignore - githubText property might not exist on all projects */}
                                        {project.githubText && (
                                            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-wider">
                                                {project.githubText}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors border border-gray-200 dark:border-zinc-700 rounded-sm hover:border-gray-400 dark:hover:border-zinc-500">
                                            <FaGithub size={18} />
                                            <span className="text-xs font-medium"><i>_repo</i></span>
                                        </a>
                                        <a href={project.live} className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors border border-gray-200 dark:border-zinc-700 rounded-sm hover:border-gray-400 dark:hover:border-zinc-500">
                                            <FaExternalLinkAlt size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
