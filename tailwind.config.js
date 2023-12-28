/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        given: "1050px", // 'w-1000' 클래스를 사용할 수 있습니다.
      },
      backgroundImage: {
        "index-gradient":
          "linear-gradient(0deg, #000000cf 5%, #000000ba 40%, #000000b0 58%, #0000008f 70%)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out",
      },
    },
  },
  plugins: [],
};
