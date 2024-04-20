import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				veryDarkGray: '#292929',
				veryBlue: '#005691',
				darkBlue: '#14213d',
				goldYellow: '#fca311',
				lightGrey: '#e5e5e5',
				whiteBlur: 'rgba(183, 211, 229, 0.2)'
			}
		}
	},
	plugins: [require('daisyui')]
};
export default config;
