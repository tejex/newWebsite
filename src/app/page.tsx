import { LampDemo } from "./components/lamp";
import { Experience } from "./components/experience";
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

	const tabArray = [
		{
			title: "Tab 2",
			value: "tab_value_2",
			content: (
				<Box
					sx={{
						"& > :not(style)": {
							m: 1,
							width: 1128,
							height: 228,
							marginLeft: 20,
							marginBottom: 20,
						},
					}}
				>
					<Paper
						square={false}
						variant="elevation"
						elevation={3}
					>
						<h3>Hello Moda Soca</h3>
						<h3>Hello Moda Soca</h3>
						<h3>Hello Moda Soca</h3>
					</Paper>
				</Box>
			),
		},
		{
			title: "Tab 2",
			value: "tab_value_2",
			content: (
				<Box
					sx={{
						"& > :not(style)": {
							m: 1,
							width: 1128,
							height: 228,
							marginLeft: 20,
							marginBottom: 20,
						},
					}}
				>
					<Paper
						square={false}
						variant="elevation"
						elevation={3}
					>
						<h3>Hello Moda Soca</h3>
						<h3>Hello Moda Soca</h3>
						<h3>Hello Moda Soca</h3>
					</Paper>
				</Box>
			),
		},
		{
			title: "Tab 2",
			value: "tab_value_2",
			content: (
				<Box
					sx={{
						"& > :not(style)": {
							m: 1,
							width: 1128,
							height: 228,
							marginLeft: 20,
							marginBottom: 20,
						},
					}}
				>
					<Paper
						square={false}
						variant="elevation"
						elevation={3}
					>
						<h3>Hello Moda Soca</h3>
						<h3>Hello Moda Soca</h3>
						<h3>Hello Moda Soca</h3>
					</Paper>
				</Box>
			),
		},
	];

	return (
		<div>
			<LampDemo />
			<IntroCard />

			{/* <Experience tabs={tabArray} /> */}
			<HoverEffect items={items} />
		</div>
	);
}
