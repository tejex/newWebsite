export const experiences = [
	{
		company: "Amazon",
		logo: "../images/amazon.png",
		jobTitle: "Incoming Software Engineer Intern",
		duration: "May 2024 - August 2024",
		description: ["Incoming SDE Intern, Summer 2024."],
	},
	{
		company: "Amazon",
		logo: "../images/amazon.png",
		jobTitle: "Software Engineer Intern",
		duration: "June 2023 - August 2023",
		description: [
			"Spearheaded the design and implementation of multiple features on a Language Model Playground",
			"Wrote and conducted tests on components of LLM playground using the React Testing Library, Jest and Mocha",
			"Implemented REST APIs and backend functionalities using Node.js, Typescript and Socket.io",
		],
	},
	{
		company: "XR_Technologies",
		logo: "../images/amazon.png",
		jobTitle: "Software Engineer Intern",
		duration: "May 2022 - August 2022",
		description: [
			"Made use of  technologies such as Javascript and React to design and develop interactive web applications",
			"Utilized frameworks including React and Bootstrap to enhance interactive nature of web applications",
			"Acquired fundamental knowledge of React, Angular and Node.js during internship experience",
			"Developed a wide variety of web development skills including JavaScript, HTML, CSS, React, Redux, Typescript, Node.js and Angular",
		],
	},
	{
		company: "TechPoint",
		logo: "../images/amazon.png",
		jobTitle: "UI / UX Design Intern",
		duration: "May 2022 - August 2022",
		description: [
			"Worked in a team of 10 to design an innovative solution to increase tech jobs in Indiana",
			"Developed a user friendly UI for the solution as a member of the production group",
			"Obtained various skills from this internship experience such as the importance of working in a team in the tech industry",
			"Part of the winning team for the Tech Jobs in Indiana category in TechPoint's The Pitch competition.",
		],
	},
];

export const tabs = experiences.map((exp, idx) => {
	return {
		title: exp.company,
		value: idx + "",
		content: (
			<div
				key={idx}
				className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-800 to-slate-900"
			>
				<h1 className="text-md">
					{exp.company} - {exp.jobTitle}
				</h1>
				<h5 className="text-sm mb-10">{exp.duration}</h5>
				<ul>
					{exp.description.map((exp) => {
						return <li className="text-sm mb-5"> - {exp}</li>;
					})}
				</ul>
			</div>
		),
	};
});
