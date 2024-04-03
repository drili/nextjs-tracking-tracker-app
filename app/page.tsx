import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col items-center gap-10 justify-center py-10">
			<span>
				<h1 className="text-5xl font-normal">NextJS Tracking Tracker</h1>
			</span>

			<span>
				<h2>Table of clients</h2>
			</span>
		</main>
	);
}
