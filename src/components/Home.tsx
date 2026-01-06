import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <section id="home" className="py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gray-100 dark:bg-[#0b1220] relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Content with overlay */}
      <div className="relative z-10 max-w-[80rem] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 min-h-[60vh] md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-16 md:text-left sm:min-h-[50vh]">
          {/* Profile Picture */}
          <div className="flex-shrink-0 animate-[slideInFromLeft_1.2s_ease-out_0.3s_both]">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 animate-[bounceIn_1.5s_ease-out_0.6s_both] border-[6px] border-blue-600 dark:border-blue-400 rounded-full p-1 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.3)] dark:shadow-[0_0_30px_rgba(96,165,250,0.4)] hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_0_40px_rgba(96,165,250,0.6)]">
              <Image
                src="/port2.jpg"
                alt="Fahmida Akter Nupur"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 max-w-[60rem] animate-[slideInFromRight_1.2s_ease-out_0.6s_both] font-bold flex flex-col items-center">
            <p className="text-2xl sm:text-3xl md:text-[2.2rem] lg:text-4xl xl:text-5xl 2xl:text-[3.5rem] text-gray-800 dark:text-white mb-4 sm:mb-6 text-center animate-[fadeInDown_1s_ease-out_0.9s_both] [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]"> Fahmida Akter Nupur </p>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed w-full">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-bold mb-6 sm:mb-8 animate-[fadeInUp_1s_ease-out_0.9s_both] text-center hover:translate-x-2.5 transition-transform duration-300 last:mb-0 last:animate-[fadeInUp_1s_ease-out_1.2s_both]">
                Undergraduate Student at <span className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-300">Green University of Bangladesh</span> || Competitive Programmer || Tech Enthusiast
              </p>
            </div>

            {/* Social media icons below description */}
            <div className="flex flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 items-center justify-center mt-4 sm:mt-6">
              <a href="https://www.facebook.com/nupur.385" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 sm:gap-2 group">
                <FaFacebook className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 dark:text-blue-600 bg-white rounded-full p-1.5 sm:p-2 md:p-[0.35em] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer group-hover:text-white group-hover:bg-blue-700 dark:group-hover:bg-blue-600 group-hover:scale-110 dark:bg-white dark:group-hover:text-white" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/fahmida-akter-nupur-53643426a/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 sm:gap-2 group">
                <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 dark:text-blue-600 bg-white rounded-full p-1.5 sm:p-2 md:p-[0.35em] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer group-hover:text-white group-hover:bg-blue-700 dark:group-hover:bg-blue-600 group-hover:scale-110 dark:bg-white dark:group-hover:text-white" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">LinkedIn</span>
              </a>
              <a href="mailto:fahmidanupur99@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 sm:gap-2 group">
                <MdEmail className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 dark:text-blue-600 bg-white rounded-full p-1.5 sm:p-2 md:p-[0.35em] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer group-hover:text-white group-hover:bg-blue-700 dark:group-hover:bg-blue-600 group-hover:scale-110 dark:bg-white dark:group-hover:text-white" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Email</span>
              </a>
              <a href="https://github.com/nupur221" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 sm:gap-2 group">
                <FaGithub className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 dark:text-blue-600 bg-white rounded-full p-1.5 sm:p-2 md:p-[0.35em] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer group-hover:text-white group-hover:bg-blue-700 dark:group-hover:bg-blue-600 group-hover:scale-110 dark:bg-white dark:group-hover:text-white" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">GitHub</span>
              </a>
            </div>
            <div className="inline-block mt-4 sm:mt-6 mb-0 py-2 sm:py-2.5 px-4 sm:px-6 bg-[#487ae5] dark:bg-[#6ea6eb] text-white dark:text-gray-800 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-[0_2px_8px_rgba(62,52,52,0.08)] border-2 border-blue-600/20 dark:border-blue-400/20 transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-600 hover:border-blue-300 dark:hover:border-blue-300">
              <a href="/Nupur_Resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
