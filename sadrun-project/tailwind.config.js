/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        purple: "#5A0BA9",
        "btn-purple": "#67008F",
        grey: "#707070",
        "light-gray": "#a6a6a6",
        green: "#58AD57",
        lightgrey: "#f2f2f2",
        white: "#fff",
        "light-purple": "#C200BC",
        "green-btn": "#36C54E",
        "input-purple": "#9F0099",
        "link-blue": "#564FCC",
      },
      spacing: {
        106: "25rem",
      },
      fontFamily: {
        vazirmatnThin: "vazirmatnThin",
        vazirmatnExLight: "vazirmatnExLight",
        vazirmatnLight: "vazirmatnLight",
        vazirmatn: "vazirmatn",
        vazirmatnMedium: "vazirmatnMedium",
        vazirmatnSemiB: "vazirmatnSemiB",
        vazirmatnBold: "vazirmatnBold",
        vazirmatnExB: "vazirmatnExB",
        shabnam: "shabnam",
        shabnamBold: "shabnamBold",
      },
    },
  },
  plugins: [],
}