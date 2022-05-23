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
          primary: "#E7560C",
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
