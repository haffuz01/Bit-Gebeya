/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,svelte,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura", "Sans UI"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
