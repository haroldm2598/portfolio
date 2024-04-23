import { MediaLinksProps } from '@/lib/types/definition';

interface TSProps {
	data: Array<MediaLinksProps>;
}

export default function MediaLinks({ data }: TSProps) {
	return (
		<>
			{data.map((socialItem, index) => {
				const { Icon, socmedName, path } = socialItem;
				return (
					<div className='flex items-center gap-2' key={index}>
						<Icon size={40} className='dark:text-white' />
						<div>
							<h1 className='font-semibold dark:text-white'>{socmedName}</h1>
							<span className='dark:text-white'>{path}</span>
						</div>
					</div>
				);
			})}
		</>
	);
}
