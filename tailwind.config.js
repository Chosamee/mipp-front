/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "768px",
      },
      backgroundImage: {
        "index-gradient":
          "linear-gradient(0deg, #000000cf 5%, #000000ba 40%, #000000b0 58%, #0000008f 70%)",
      },
      width: {
        // 최소 너비 모바일 환경 cell phone이라서 cp임..
        cp: "375px",
      },
    },
  },
  plugins: [],
};
