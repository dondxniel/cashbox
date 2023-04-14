/** @type {import('tailwindcss').Config} */
if (typeof window !== "undefined") console.log(`${window.innerHeight}px`);
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundSize: {
				"size-200": "200% 200%",
			},
			backgroundPosition: {
				"pos-0": "0% 0%",
				"pos-100": "100% 100%",
			},
		},
	},
	plugins: [],
	darkMode: "media",
};
