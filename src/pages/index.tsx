import { AppBar } from "@/components/AppBar";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<AppBar />
			<VideoGrid></VideoGrid>
		</div>
	);
}
