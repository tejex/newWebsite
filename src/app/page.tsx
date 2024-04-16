import { LampDemo } from "./components/Header";
import { ExperienceButtons } from "./components/experience";
import { HoverEffect } from "./components/projects";
import { IntroCard } from "./components/IntroCard";
import { ContactMe } from "./components/contactMe";
import { tabs } from "./components/data/data";

export default function Home() {
	const items: {
		title: string;
		description: string;
		link: string;
	}[] = [
		{
			title: "Sample Title 1",
			description: "Sample Description 1",
			link: "https://www.example.com/1",
		},
		{
			title: "Sample Title 2",
			description: "Sample Description 2",
			link: "https://www.example.com/2",
		},
		{
			title: "Sample Title 3",
			description: "Sample Description 3",
			link: "https://www.example.com/3",
		},
		{
			title: "Sample Title 4",
			description: "Sample Description 4",
			link: "https://www.example.com/4",
		},
		{
			title: "Sample Title 5",
			description: "Sample Description 5",
			link: "https://www.example.com/5",
		},
		{
			title: "Sample Title 6",
			description: "Sample Description 6",
			link: "https://www.example.com/6",
		},
	];

	return (
		<div className="bg-slate-950">
			<LampDemo />
			<IntroCard />
			<ExperienceButtons tabs={tabs} />
			<HoverEffect items={items} />
			<ContactMe />
		</div>
	);
}
