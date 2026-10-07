import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const color = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: color("bg"),
        surface: color("surface"),
        ink: color("ink"),
        muted: color("muted"),
        line: color("line"),
        accent: color("accent"),
        "accent-soft": color("accent-soft"),
        gold: color("gold"),
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { content: "72rem" },
    },
  },
  plugins: [typography],
} satisfies Config;
