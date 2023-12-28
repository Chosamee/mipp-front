/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        given: "1050px", // 'w-1000' 클래스를 사용할 수 있습니다.
      },
    },
  },
  plugins: [],
};
