const defaultColors = require("tailwindcss/colors");

const refactoringUiPalette4 = {
  "blue": {
    "50": "#DCEEFB",
    "100": "#B6E0FE",
    "200": "#84C5F4",
    "300": "#62B0E8",
    "400": "#4098D7",
    "500": "#2680C2",
    "600": "#186FAF",
    "700": "#0F609B",
    "800": "#0A558C",
    "900": "#003E6B",
  },
  "red": {
    "50": "#FFEEEE",
    "100": "#FACDCD",
    "200": "#F29B9B",
    "300": "#E66A6A",
    "400": "#D64545",
    "500": "#BA2525",
    "600": "#A61B1B",
    "700": "#911111",
    "800": "#780A0A",
    "900": "#610404",
  },
  "yellow": {
    "50": "#FFFAEB",
    "100": "#FCEFC7",
    "200": "#F8E3A3",
    "300": "#F9DA8B",
    "400": "#F7D070",
    "500": "#E9B949",
    "600": "#C99A2E",
    "700": "#A27C1A",
    "800": "#7C5E10",
    "900": "#513C06",
  },
  "purple": {
    "50": "#EAE2F8",
    "100": "#CFBCF2",
    "200": "#A081D9",
    "300": "#8662C7",
    "400": "#724BB7",
    "500": "#653CAD",
    "600": "#51279B",
    "700": "#421987",
    "800": "#34126F",
    "900": "#240754",
  },
  "blue-grey": {
    "50": "#F0F4F8",
    "100": "#D9E2EC",
    "200": "#BCCCDC",
    "300": "#9FB3C8",
    "400": "#829AB1",
    "500": "#627D98",
    "600": "#486581",
    "700": "#334E68",
    "800": "#243B53",
    "900": "#102A43",
  },
  "teal": {
    "50": "#EFFCF6",
    "100": "#C6F7E2",
    "200": "#8EEDC7",
    "300": "#65D6AD",
    "400": "#3EBD93",
    "500": "#27AB83",
    "600": "#199473",
    "700": "#147D64",
    "800": "#0C6B58",
    "900": "#014D40",
  }
}

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "blue": refactoringUiPalette4.blue,
      "red": refactoringUiPalette4.red,
      "yellow": refactoringUiPalette4.yellow,
      "purple": refactoringUiPalette4.purple,
      "teal": refactoringUiPalette4.teal,
      "green": refactoringUiPalette4.teal,
      "gray": defaultColors.gray,
      "white": defaultColors.white
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
  safelist: [
    "bg-blue-50",
    "bg-yellow-50",
    "bg-red-50",
    "bg-green-50",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-green-100",
    "text-blue-400",
    "text-yellow-400",
    "text-red-400",
    "text-green-400",
    "text-blue-800",
    "text-yellow-800",
    "text-red-800",
    "text-green-800",
    "text-blue-700",
    "text-yellow-700",
    "text-red-700",
    "text-green-700",
    "text-blue-500",
    "text-yellow-500",
    "text-red-500",
    "text-green-500",
    "border-teal-500",
    "ring-teal-500",
    "hover:text-blue-600",
    "hover:text-yellow-600",
    "hover:text-red-600",
    "hover:text-green-600",
    "hover:bg-blue-100",
    "hover:bg-yellow-100",
    "hover:bg-red-100",
    "hover:bg-green-100",
    "focus:ring-blue-600",
    "focus:ring-yellow-600",
    "focus:ring-red-600",
    "focus:ring-green-600",
    "focus:ring-offset-blue-50",
    "focus:ring-offset-yellow-50",
    "focus:ring-offset-red-50",
    "focus:ring-offset-green-50",
  ]
};

module.exports = config;