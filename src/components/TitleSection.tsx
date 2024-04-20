import { loraSoftSemibold } from '@/lib/fonts';

export default function TitleSection({ title }: { title: string }) {
	return (
		<h1
			className={`${loraSoftSemibold.className} mb-4 text-veryDarkGray text-[3.5rem] lg:text-[4rem] uppercase opacity-80`}
		>
			{title}
		</h1>
	);
}
