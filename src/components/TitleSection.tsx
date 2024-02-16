import { libreBaskerville } from '@/lib/fonts';

export default function TitleSection({ title }: { title: string }) {
	return (
		<h1
			className={`${libreBaskerville.className} text-goldYellow text-[3.5rem] lg:text-[8rem] font-bold uppercase text-right opacity-50`}
		>
			{title}
		</h1>
	);
}
