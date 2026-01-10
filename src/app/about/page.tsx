import { FaGraduationCap, FaTrophy } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="py-24 lg:py-20 md:py-16 sm:py-12 bg-gray-100 dark:bg-[#0b1220] relative overflow-hidden min-h-screen flex items-center justify-center font-Times New Roman">
            <div className="relative z-10 max-w-[140rem] w-full mx-auto px-8 sm:px-12 lg:px-16">
                <div className="flex flex-col items-center w-full gap-12 pb-12 mt-16">
                    {/* Left: About Me */}
                    <div className="flex-1 max-w-[80rem] animate-[slideInFromRight_1.2s_ease-out_0.6s_both] font-bold flex flex-col items-center">
                        <h3 className="inline-block bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-100 py-2 px-6 rounded-full text-[2.2rem] xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl mb-6 text-center animate-[fadeInDown_1s_ease-out_0.9s_both] tracking-wide [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                            ABOUT ME
                        </h3>
                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p className="text-lg xl:text-base lg:text-base md:text-base sm:text-sm font-semibold mb-8 animate-[fadeInUp_1s_ease-out_0.9s_both] tracking-wide text-center hover:translate-x-2.5 transition-transform duration-300">
                                Hi there! Myself Fahmida Akter Nupur, a passionate problem solver and Technology enthusiast. I have an experience in competitive programming, solving hundreds of problems and participating in numerous contests. I enjoy tackling challenging problems and creating efficient, innovative solutions.
                            </p>
                            <p className="text-lg xl:text-base lg:text-base md:text-base sm:text-sm font-semibold mb-8 animate-[fadeInUp_1s_ease-out_0.9s_both] tracking-wide text-center hover:translate-x-2.5 transition-transform duration-300 last:mb-0 last:animate-[fadeInUp_1s_ease-out_1.2s_both]">
                                I also work on Python backend and AI/ML projects, building practical applications and intelligent systems. My skills include Python, Django, Java, C/C++, JavaScript, React, Next.js, and database technologies. I am constantly learning new technologies to expand my expertise and deliver real-world impact.
                            </p>
                        </div>
                    </div>


                    {/* Education and Activities Row */}
                    <div className="flex flex-col gap lg:flex-row gap-8 w-full justify-center items-stretch mt-12">
                        {/* Education */}
                        <aside className="w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300">
                            <div className="text-center mb-8">
                                <h3 className="inline-block text-base sm:text-lg font-extrabold tracking-wide m-0 bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-100 py-2 px-6 rounded-full shadow-sm">
                                    Education
                                </h3>
                            </div>

                            {/* Timeline container */}
                            <div className="relative ml-6 border-l-2 border-blue-500">

                                {/* First Education Item */}
                                <div className="mb-8 pl-6 relative">
                                    <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white">
                                        <FaGraduationCap />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold mb-1">Bachelor of Science in Computer Science and Engineering</div>
                                    <div className="text-xs text-gray-400">Green University of Bangladesh</div>
                                    <div className="text-xs text-gray-400">2022 - 2026</div>
                                </div>

                                {/* Second Education Item */}
                                <div className="mb-8 pl-6 relative">
                                    <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <FaGraduationCap />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold mb-1">Higher Secondary School Certificate (Science)</div>
                                    <div className="text-xs text-gray-400">Cumilla Model College</div>
                                    <div className="text-xs text-gray-400">2018 - 2020</div>
                                </div>

                                {/* Third Education Item */}
                                <div className="mb-0 pl-6 relative">
                                    <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        <FaGraduationCap />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold mb-1">Secondary School Certificate (Science)</div>
                                    <div className="text-xs text-gray-400">Jalal Memorial High School</div>
                                    <div className="text-xs text-gray-400">2016 - 2018</div>
                                </div>

                            </div>
                        </aside>


                        {/* Extra-Curricular Activities */}
                        <aside className="w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300">
                            <div className="text-center mb-8">
                                <h3 className="inline-block text-base sm:text-lg font-extrabold tracking-wide m-0 bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-100 py-2 px-6 rounded-full shadow-sm">
                                    Extra-Curricular Activities
                                </h3>
                            </div>

                            {/* Timeline container */}
                            <div className="relative ml-6 border-l-2 border-blue-500">

                                {/* First Extra-Curricular Activities Item */}
                                <div className="mb-8 pl-6 relative">
                                    <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white">
                                        <FaTrophy />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold mb-1">Programming and Development Sacretery </div>
                                    <div className="text-xs text-gray-400">Green University Computer Club : GUCC</div>
                                    <div className="text-xs text-gray-400">2024 - 2025</div>
                                </div>

                                {/* Second Extra-Curricular Activities Item */}
                                <div className="mb-8 pl-6 relative">
                                    <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <FaTrophy />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold mb-1">Organizing Team Member</div>
                                    <div className="text-xs text-gray-400">Bangladesh Mathematical Olympiad</div>
                                    <div className="text-xs text-gray-400">2022 - 2025</div>
                                </div>
                                {/* Third Extra-Curricular Activities Item */}
                                <div className="mb-0 pl-6 relative">
                                    <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        <FaTrophy />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold mb-1">Former IEEE Executive Member</div>
                                    <div className="text-xs text-gray-400">IEEE Computer Society Chapter GUB</div>
                                    <div className="text-xs text-gray-400">2023 - 2024</div>
                                </div>
                            </div>
                        </aside>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default About;