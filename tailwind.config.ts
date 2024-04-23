import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			screens: {
				'2xl': '1600px'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				lightMode: '#fafafa',
				darkMode: '#1E1E1E',
				darkMode100: '#121212',
				veryDarkGray: '#292929',
				veryBlue: '#005691',
				darkModeBlue: '#639AB4',
				greyWhite: '#FFFDFD',
				darkBlue: '#005691',
				lightGrey: '#e5e5e5',
				whiteBlur: 'rgba(183, 211, 229, 0.2)'
			}
		}
	},
	plugins: [require('daisyui')],
	darkMode: 'class'
};
export default config;
