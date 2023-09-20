let widths = {};
for (let i = 1; i < 10; i++) {
  widths[`${i}/10`] = `${10 * i}%`;
}
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "wa-green": "#00a884",
        "wa-msg-green": "#D9FDD3",
        "wa-gray": "#e9edef",
        "wa-dark-gray": "#54656f",
        "wa-msg-gray": "#667781",
        "wa-msg-cream": "#efeae2",
        "wa-unread": "#25d366",
      },
      height: {
        127: "127px",
        "40px": "40px",
        "24px": "24px",
      },
      width: { ...widths, "40px": "40px", "24px": "24px" },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
