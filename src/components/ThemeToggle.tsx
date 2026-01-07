'use client';

import { useTheme } from '../theme';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi2';

const ThemeToggle = () => {
    const { theme, toggleTheme, mounted } = useTheme();

    if (!mounted) {
        return (
            <div className="flex items-center">
                <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            </div>
        );
    }

    const isDark = theme === 'dark';

    return (
        <div className="flex items-center select-none">
            {/* The Toggle Switch */}
            <div
                onClick={toggleTheme}
                className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 flex items-center p-1 ${isDark ? 'bg-blue-600' : 'bg-white border-2 border-slate-300'
                    }`}
            >
                {/* The Sliding Knob */}
                <motion.div
                    layout
                    initial={false}
                    animate={{
                        x: isDark ? 32 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isDark ? 'bg-white' : 'bg-slate-400'
                        }`}
                >
                    {isDark ? (
                        <HiSun className="w-4 h-4 text-blue-600" />
                    ) : (
                        <HiMoon className="w-4 h-4 text-white" />
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default ThemeToggle;
