/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
      colors: {
        primary: "#111827",
        secondary: "#F3F4F6",
        accent: "#2563EB",
        background: "#FFFFFF",
        text: "#111827",
      },
    },
	},
	plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
