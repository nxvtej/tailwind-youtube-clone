import { VideoCard } from "@/components/VideoCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<VideoCard
				title={
					"Final Practical: get full marks with 1 night preperation: OverConfidence Series"
				}
				image={"photo1.jpg"}
				thumbImage={"thumb.jpg"}
				author={"Navdeep"}
				views={"100k"}
				timestamp={"2 days ago"}
			></VideoCard>
		</div>
	);
}
