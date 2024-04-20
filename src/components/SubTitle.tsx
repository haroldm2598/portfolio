import { loraSoftMedium } from '@/lib/fonts';

export default function SubTitle({ title }: { title: string }) {
	return (
		<h1
			className={`${loraSoftMedium.className} mb-4 text-veryDarkGray text-4xl opacity-70`}
		>
			{title}
		</h1>
	);
}
