import { libreBaskerville } from '@/lib/fonts';

export default function TitleSection({ title }: { title: string }) {
	return (
		<h1
			className={`${libreBaskerville.className} mb-4 text-goldYellow text-[3.5rem] lg:text-[4rem] font-bold uppercase text-right opacity-80`}
		>
			{title}
		</h1>
	);
}
