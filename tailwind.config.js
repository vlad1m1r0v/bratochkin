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
            "linear-gradient(90deg, #ffffff00 0%, #ffffff 5%, #ffffff 95%, #ffffff00 100%)",
          mask: "linear-gradient(90deg, #ffffff00 0%, #ffffff 5%, #ffffff 95%, #ffffff00 100%)",
        },
      });
    },
  ],
};
