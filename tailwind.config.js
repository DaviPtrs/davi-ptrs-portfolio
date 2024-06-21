/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    boxShadow: {
      "custom-blue": "0px 5px 15px 0 rgba(61,61,255,0.15)",
    },
    animation: {
      pulse: "pulse 2s ease-in-out infinite;",
      "fade-in-down": "fade-in-down 0.6s ease-in-out;",
    },
    keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      pulse: {
        "50%": {
          opacity: "0.5",
        },
      },
    },
  },
  plugins: [],
};
