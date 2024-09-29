
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
	},
	plugins: [require('daisyui'),],
	daisyui: {
		themes: ["light", "dark", "cupcake"], // Add any themes you want to use
	},
}
