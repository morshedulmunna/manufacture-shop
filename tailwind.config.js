module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#F8D007",
          secondary: "#EFA600",
          accent: "#222222",
          neutral: "#232323",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
};
