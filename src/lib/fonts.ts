import { Montserrat, Libre_Baskerville } from 'next/font/google';

export const libreBaskerville = Libre_Baskerville({
	weight: ['400', '700'],
	subsets: ['latin']
});

export const montserrat = Montserrat({
	weight: ['400', '600', '700', '900'],
	style: ['normal'],
	subsets: ['latin']
});
