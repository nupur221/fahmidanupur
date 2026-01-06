import React from 'react';
import { FaAward, FaGraduationCap } from "react-icons/fa";

const Achievements = () => {
    const achievements = [
        {
            title: "IDPC Spring 2024",
            description: "Secured the Best Female Team of Inter Department Programming Contest (IDPC) Spring 2024 at Green University of Bangladesh.",
            image: "idpc.jpg",
             icon: <FaAward className="text-yellow-400 text-3xl" />,
        },
        {
            title: "UIU IUPC 2025",
            description: "Participated in the Inter University Programming Contest (IUPC) 2025 at United International University (UIU).",
            image: "uiu.png",
            icon: <FaAward className="text-orange-400 text-3xl" />,
        },
        {
            title: "IAAC 2025",
            description: "Participated in the Internal Astronomy and Astrophysics Competetion 2025.",
            image: "iaac.pdf",
            icon: <FaAward className="text-green-400 text-3xl" />,
        }
    ];

    return (
        <section id="achievements" className="py-24 lg:py-20 md:py-16 sm:py-12 bg-gray-100 dark:bg-[#0b1220] min-h-screen flex items-center justify-center font-Times New Roman">
            <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-8 lg:px-12 ">

                {/* Header */}
                <div className="w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] text-center mb-16 mt-16">
                    <h2 className="inline-block bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-100 py-2 px-6 rounded-full text-[2.2rem] xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl mb-6 text-center animate-[fadeInDown_1s_ease-out_0.9s_both] tracking-wide [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] font-bold">
                        Achievements and Certificates
                    </h2>
                    <p className="text-lg xl:text-base lg:text-base md:text-base sm:text-sm font-semibold mb-8 animate-[fadeInUp_1s_ease-out_0.9s_both] tracking-wide text-center hover:translate-x-2.5 transition-transform duration-300 text-gray-600 dark:text-gray-300">
                        A collection of my Achievements and Certificates
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                    {achievements.map((item, index) => (
                        <div key={index} className="group bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 rounded-sm overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-xl hover:-translate-y-2 flex flex-col">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                {item.image.endsWith('.pdf') ? (
                                    <iframe
                                        src={item.image}
                                        title={item.title}
                                        className="w-full h-full border-0"
                                        style={{ overflow: 'hidden' }}
                                    />
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest shadow-md pointer-events-none">
                                    Featured
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-blue-600 dark:text-blue-400 text-xl bg-blue-50 dark:bg-blue-900/20 p-2 rounded shrink-0">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
