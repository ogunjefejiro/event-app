/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#240D57",
          "primary-content": "#ffffff",
          "primary-focus": "#240D57",
          secondary: "#CCB6FF",
          "secondary-content": "#ffffff",
          "secondary-focus": "#CCB6FF",
          // accent: "#DCDCFF",
          // "accent-content": "#4543A5",
          // "accent-focus": "#DCDCFF",
        },
      },
    ],
  },
};
