/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				bubblegum: ['Bubblegum Sans', 'cursive'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: '#9ADAEA', // blue
				secondary: '#F6DCD5', // pink
				accent: '#e9964054', // brown
			},
		},
	},
	plugins: [],
};
