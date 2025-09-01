type VideoCardProps = {
	id: string;
	title: string;
	thumbnail: string;
	channelTitle: string;
	onClick?: () => void;
};

export default function VideoCard({
	id = 'n61ULEU7CO0',
	title = 'Best of lofi hip hop 2021 ✨',
	thumbnail = 'https://i.ytimg.com/vi/n61ULEU7CO0/mqdefault.jpg',
	channelTitle = 'lofi girl',
	onClick,
}: VideoCardProps) {
	return (
		<div
			key={id}
			className='rouned shadow-md hover:shadow-lg cursor-pointer transition'
			onClick={onClick}
		>
			<img src={thumbnail} alt={title} className='rounded-t-sm w-full' />
			<div className='p-2'>
				<h3 className='font-semibold text-sm line-clamp-2'>{title}</h3>
				<p className='text-xs text-gray-500'>{channelTitle}</p>
			</div>
		</div>
	);
}
