import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-[80rem] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex gap-6 mb-4">
                    <a
                        href="https://www.facebook.com/nupur.385"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fahmida-akter-nupur-53643426a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="mailto:fahmidanupur99@gmail.com"
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        aria-label="Email"
                    >
                        <MdEmail size={24} />
                    </a>
                    <a
                        href="https://github.com/nupur221"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                    © {currentYear} Fahmida Akter Nupur. All rights reserved.
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                    Built with Next.js
                </p>
            </div>
        </footer>
    );
};

export default Footer;
