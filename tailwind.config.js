/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          "-webkit-mask":
            "linear-gradient(90deg, #0000, #000 10%, #000 80%, #0000)",
          mask: "linear-gradient(90deg, #0000, #000 10%, #000 80%, #0000)",
        },
      });
    },
  ],
};
