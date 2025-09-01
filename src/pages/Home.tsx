import { useState, useEffect } from 'react';
import { searchVideos } from '../services/youtube';
import SearchBar from '../components/SearchBar';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';

export type Video = {
	id: string;
	title: string;
	thumbnail: string;
	channelTitle: string;
	description: string;
	publishedAt?: string;
};

export default function Home() {
	const [videos, setVideos] = useState<Video[]>([]);
	const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

	const handleSearch = async (query: string) => {
		try {
			const results = await searchVideos(query);
			setVideos(results || []);
		} catch (error) {
			console.error('Search error:', error);
		}
	};

	// const handleRelatedVideos = async (videoId: string) => {
	// 	try {
	// 		console.log('Fetching related videos for:', videoId);
	// 		const results = await getRelatedVideos(videoId);
	// 		setVideos(results || []);
	// 	} catch (error) {
	// 		console.error('Related videos error:', error);
	// 	}
	// };

	useEffect(() => {
		if (selectedVideo) {
			handleSearch('lofi hip hop');
		}
	}, [selectedVideo]);

	const handleVideoSelect = (video: Video) => {
		setSelectedVideo(video);
	};

	return (
		<div className='p-4 max-w-6xl mx-auto'>
			<h1 className='text-3xl font-bold text-center mb-4'>
				YouTube Video Search + React App
			</h1>
			<SearchBar onSearch={handleSearch} />
			<div className='grid md:grid-cols-3 gap-4 mt-4'>
				{selectedVideo && (
					<div className='md:col-span-2 mb-4'>
						<VideoPlayer video={selectedVideo} />
					</div>
				)}
				<div className={selectedVideo ? 'md:col-span-1' : 'md:col-span-3'}>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4'>
						{videos.map(video => (
							<VideoCard
								key={video.id}
								id={video.id}
								title={video.title}
								thumbnail={video.thumbnail}
								channelTitle={video.channelTitle}
								onClick={() => handleVideoSelect(video)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
