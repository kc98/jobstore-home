/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "purple-blue": "#0704e1",
        grey: "#666",
      },
      backgroundImage: {
        "index-left": "url('/images/index_left.jpg')",
        "index-right": "url('/images/index_right.jpg')",
        location:
          "url('https://assets.jobstore.com/images/index/icon/icon_locationpin.png')",
        purple:
          "linear-gradient(to bottom, #4849d5, #3f41d9, #3638dd, #2b2ee0, #1e22e3)",
        search:
          "url('https://assets.jobstore.com/images/index/icon/icon_searchglass_white.png')",
      },
    },
  },
  plugins: [],
};
