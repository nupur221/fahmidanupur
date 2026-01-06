/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Times New Roman"', 'Times', 'serif'],
                serif: ['"Times New Roman"', 'Times', 'serif'],
                mono: ['"Times New Roman"', 'Times', 'serif'], // Even mono for total enforcement if requested, though usually bad for code blocks. User said "hole project". Ill stick to sans/serif generally but user said "hole project font design is Times new roman". Ill set sans and serif.
            },
        },
    },
    plugins: [],
};
export default config;
