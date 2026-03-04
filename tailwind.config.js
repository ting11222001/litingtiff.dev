/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Cabin', 'sans-serif'],
      },
      animation: {
        "float-spin": "floatSpin 4s ease-in-out infinite",
      },
      keyframes: {
        floatSpin: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
          "100%": { transform: "translateY(0px) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
}
