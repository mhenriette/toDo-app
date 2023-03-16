/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        small: "2px 2px 10px 0 rgba(57, 57, 57, 0.5)",
      },
    },
  },
  plugins: [],
};
