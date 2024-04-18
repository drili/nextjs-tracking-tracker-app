import Image from "next/image";
import type { NextPage } from "next";

import settings from "./lib/settings_data/settings_data.json"

import { SettingsData } from "./types/settings/SettingsData";

const Home: NextPage = () => {
	const { settings_frontpage } = settings as SettingsData

	return (
		<main className="flex flex-col items-center gap-10 justify-center py-10">
			<span>
				<h1 className="text-5xl font-bold uppercase">{settings_frontpage.page_heading}</h1>
			</span>

			<span>
				<h2 className="">{settings_frontpage.page_subheading}</h2>
			</span>
		</main>
	);
}


export default Home