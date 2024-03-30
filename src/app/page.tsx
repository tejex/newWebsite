import { LampDemo } from "./components/lamp";
import { ExperienceButtons } from "./components/experience";
import { HoverEffect } from "./components/projects";
import { IntroCard } from "./components/IntroCard";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

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
	const DummyContent = () => {
		return (
			<div
				style={{ width: "1000px", height: "4000px" }}
				className="object-cover object-left-top h-[100%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
			></div>
		);
	};

	const tabs = [
		{
			title: "Amazon",
			value: "Incoming Software Engineer Intern",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
					<p>Content tab</p>
					<DummyContent />
				</div>
			),
		},
		{
			title: "Amazon",
			value: "Software Dev Engineer Intern",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
					<p>Product Tab</p>
					<h1>YO WTh</h1>
					<DummyContent />
				</div>
			),
		},
		{
			title: "MathTrack",
			value: "Software Engineer Intern",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
					<p>Services tab</p>
					<DummyContent />
				</div>
			),
		},
		{
			title: "Techpoint",
			value: "UI / UX Design Micro Intern",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
					<p>Playground tab</p>
					<DummyContent />
				</div>
			),
		},
	];

	return (
		<div className="bg-slate-950">
			<LampDemo />
			<IntroCard />
			<ExperienceButtons tabs={tabs} />
			<HoverEffect items={items} />
		</div>
	);
}
