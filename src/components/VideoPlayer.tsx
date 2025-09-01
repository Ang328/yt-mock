import type { Video } from '../pages/Home';

type VideoPlayerProps = {
	video: Video;
};
export default function VideoPlayer({ video }: VideoPlayerProps) {
	return (
		<div className='w-full'>
			<div className='aspect-video overflow-hidden shadow-md'>
				<iframe
					className='w-full h-full'
					src={`https://www.youtube.com/embed/${video.id}`}
					title='YouTube video player'
					allowFullScreen
				/>
			</div>
			<div className='p-4'>
				<div className='mb-2'>
					<h2 className='text-lg font-semibold'>{video.title}</h2>
					<p className='text-md'>{video.channelTitle}</p>
				</div>
				<div className='bg-gray-200 rounded-md p-2'>
					<p className='font-semibold'>{video.publishedAt}</p>
					<p className='text-sm'>{video.description}</p>
				</div>
			</div>
		</div>
	);
}
