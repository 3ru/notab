const colors = require("./node_modules/tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 20s linear infinite",
			},
			colors: {
				rose: colors.rose,
				fuchsia: colors.fuchsia,
				teal: colors.teal,
				lime: colors.lime,
				orange: colors.orange,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
