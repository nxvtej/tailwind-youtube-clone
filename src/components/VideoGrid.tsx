import { VideoCard } from "./VideoCard";

const VIDEOS = [
	{
		title:
			"Final Practical: get full marks with 1 night preperation: OverConfidence Series",

		image: "photo1.jpg",
		thumbImage: "thumb.jpg",
		author: "Navdeep",
		views: "100k",
		timestamp: "2 days ago",
	},

	{
		title: "hey buddy",
		image: "photo1.jpg",
		thumbImage: "thumb.jpg",
		author: "Navdeep",
		views: "100k",
		timestamp: "2 days ago",
	},
	{
		title: "hey buddy",
		image: "photo1.jpg",
		thumbImage: "thumb.jpg",
		author: "Navdeep",
		views: "100k",
		timestamp: "2 days ago",
	},
	{
		title: "hey buddy",
		image: "photo1.jpg",
		thumbImage: "thumb.jpg",
		author: "Navdeep",
		views: "100k",
		timestamp: "2 days ago",
	},
	{
		title: "hey buddy",
		image: "photo1.jpg",
		thumbImage: "thumb.jpg",
		author: "Navdeep",
		views: "100k",
		timestamp: "2 days ago",
	},
	{
		title: "hey buddy",
		image: "photo1.jpg",
		thumbImage: "thumb.jpg",
		author: "Navdeep",
		views: "100k",
		timestamp: "2 days ago",
	},
	{
		title: "hey buddy",
		image: "photo1.jpg",
		thumbImage: "thumb.jpg",
		author: "Navdeep",
		views: "100k",
		timestamp: "2 days ago",
	},
	{
		title: "hey buddy",
		image: "photo1.jpg",
		thumbImage: "thumb.jpg",
		author: "Navdeep",
		views: "100k",
		timestamp: "2 days ago",
	},
];
export const VideoGrid = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
			{VIDEOS.map((video) => (
				<div>
					{
						<div>
							<VideoCard
								title={video.title}
								image={video.image}
								thumbImage={video.thumbImage}
								author={video.author}
								views={video.views}
								timestamp={video.timestamp}
							></VideoCard>
						</div>
					}
				</div>
			))}
		</div>
	);
};
