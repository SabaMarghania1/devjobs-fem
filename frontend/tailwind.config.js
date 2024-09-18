/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      backgroundImage: {
        bgsm: "url('/mobile/bg-pattern-header.svg')",
        bgmd: "url('/tablet/bg-pattern-header.svg')",
      },
      screens: {
        md: "768px",
        lg: "1440px",
      },
      colors: {
        "main-bg": "var(--main-bg)",
        "secondary-bg": "var(--secondary-bg)",
      },
    },
  },
  plugins: [],
};
