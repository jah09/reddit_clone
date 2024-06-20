/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",
        "text-primary": "var(--text-primary)",

        "text-secondary": "var(--text-secondary)",
        "primary-accent": "var(--primary-accent)",
        "primary-accent-hover": "var(--primary-accent-hover)",

        "secondary-accent": "var(--secondary-accent)",
        success: "var(--success)",
        error: "var(--error)",
        neutral: "var(--neutral)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
