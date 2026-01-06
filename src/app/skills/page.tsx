import React from 'react';
import { FaCode, FaReact, FaDatabase, FaTools, FaCog, FaWrench, FaBrain, FaCodeBranch, FaRobot, FaDocker } from "react-icons/fa";
import { MdApi, MdBuild } from 'react-icons/md';

const Skills = () => {
    const skillCategories = [
        {
            title: "CP Skills",
            description: "Solving algorithmic problems efficiently using data structures and logic.",
            icon: <FaBrain className="text-green-400 text-3xl" />,
            skills: [
                { name: "Codeforces", link: "https://codeforces.com/profile/hall_of_N" },
                { name: "CodeChef", link: "https://www.codechef.com/users/sn0w_fall" },
                { name: "LeetCode", link: "https://leetcode.com/u/Sn0w_Fall/" },
                { name: "HackerRank", link: "https://www.hackerrank.com/profile/fahmida_nupur" },
                { name: "Atcoder", link: "https://atcoder.jp/users/Sn0w_Fall" },
                { name: "SPOJ", link: "https://www.spoj.com/myaccount/" },

            ]
        },
        {
            title: "Languages",
            description: "Languages used to implement algorithms and optimized solutions.",
            icon: <FaCode className="text-cyan-400 text-3xl" />,
            skills: ["C", "C++", "Java", "Python", "JavaScript", "Bash"]
        },
        {
            title: "Frameworks",
            description: "Tools for building fast, responsive web applications.",
            icon: <FaReact className="text-purple-400 text-3xl" />,
            skills: ["React.js", "Next.js", "TailwindCSS", "Django"]
        },
        {
            title: "API Skills",
            description: "Designing and building secure, scalable, and efficient backend APIs.",
            icon: <MdApi className="text-green-500 text-3xl" />,
            skills: ["Flask", "FAST API", "RESTful API", "Django REST"]
        },
        {
            title: "Data Science",
            description: "Data preprocessing, visualization, and machine learning model development.",
            icon: <FaRobot className="text-yellow-400 text-3xl" />,
            skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "PyTorch"]
        },
        {
            title: "Database Technology",
            description: "Efficient data storage and management.",
            icon: <FaDatabase className="text-blue-400 text-3xl" />,
            skills: ["MySQL", "PostgreSQL"]
        },
        {
            title: "Version Control",
            description: "Managing code versions, collaboration, and automated workflows.",
            icon: <FaCodeBranch className="text-pink-400 text-3xl" />,
            skills: ["Git", "GitHub", "GitHub Actions"]
        },
        {
            title: "Dev. Tools",
            description: "Tools that streamline development, testing, and delivery processes.",
            icon: <MdBuild className="text-orange-400 text-3xl" />,
            skills: ["Postman", "Docker(basic)"]
        },
        {
            title: "Analytical Skills",
            description: "Utilities that enhance productivity and development efficiency",
            icon: <FaCog className="text-red-400 text-3xl" />,
            skills: ["Problem Solving", "Data Structure", "Algorithms", "OOP", "AI/ML Integration"]
        }
    ];

    return (
        <section id="skills" className="py-24 lg:py-20 md:py-16 sm:py-12 bg-gray-100 dark:bg-[#0b1220] min-h-screen flex items-center justify-center font-Times New Roman">
            <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] text-center mb-16 mt-16">
                    <h2 className="inline-block bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-100 py-2 px-6 rounded-full text-[2.2rem] xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl mb-6 text-center animate-[fadeInDown_1s_ease-out_0.9s_both] tracking-wide [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] font-bold">
                        My Skills
                    </h2>
                    <p className="text-lg xl:text-base lg:text-base md:text-base sm:text-sm font-semibold mb-8 animate-[fadeInUp_1s_ease-out_0.9s_both] tracking-wide text-center hover:translate-x-2.5 transition-transform duration-300 text-gray-600 dark:text-gray-300">
                        Technologies and tools I work with to build impactful solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full flex-1 bg-blue-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-zinc-800 rounded-sm p-8 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm dark:shadow-none h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="mt-1 bg-gray-50 dark:bg-zinc-900/50 p-2 rounded-lg">
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{category.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {category.skills.map((skill, skillIndex) => {
                                    const isLink = typeof skill === 'object';
                                    const content = isLink ? skill.name : skill;
                                    const link = isLink ? skill.link : undefined;

                                    if (isLink) {
                                        return (
                                            <a
                                                key={skillIndex}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 py-2 px-4 rounded-sm text-sm hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-pointer"
                                            >
                                                {content}
                                            </a>
                                        );
                                    }

                                    return (
                                        <span
                                            key={skillIndex}
                                            className="inline-block border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-sm text-sm hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                                        >
                                            {content}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
