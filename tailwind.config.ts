import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        striped:
          "repeating-linear-gradient(45deg, #ffffff, #ffffff 12px, #f5f5f5 10px, #f5f5f5 20px)",
        "darken-striped":
          "repeating-linear-gradient(45deg, #e3e3e3, #e3e3e3 12px, #b3b3b3 10px, #b3b3b3 20px)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark", "bumblebee"],
  },
} satisfies Config;
