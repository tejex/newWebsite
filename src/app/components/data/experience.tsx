import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const experiences = [
	{
		company: "Amazon",
		logo: require("../../images/Amazon.png"),
		jobTitle: "Incoming SDE Intern",
		duration: "May 2024 - August 2024",
		description: ["Incoming SDE Intern, Summer 2024."],
	},
	{
		company: "Amazon",
		logo: require("../../images/Amazon.png"),
		jobTitle: "Software Engineer Intern",
		duration: "June 2023 - August 2023",
		description: [
			"Spearheaded the design and implementation of multiple features on a Language Model Playground",
			"Wrote and conducted tests on components of LLM playground using the React Testing Library, Jest and Mocha",
			"Implemented REST APIs and backend functionalities using Node.js, Typescript and Socket.io",
		],
	},
	{
		company: "MathTrack",
		logo: require("../../images/XR_Technologies.png"),
		jobTitle: "Software Engineer Intern",
		duration: "May 2022 - August 2022",
		description: [
			"Made use of  technologies such as Javascript and React to design and develop interactive web applications",
			"Utilized frameworks including React and Bootstrap to enhance interactive nature of web applications",
			"Acquired fundamental knowledge of React, Angular and Node.js during internship experience",
			"Developed a wide variety of web development skills",
		],
	},
	{
		company: "TechPoint",
		logo: require("../../images/TechPoint.png"),
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
				className="w-full overflow-hidden relative rounded-2xl p-6 md:p-10 font-bold text-lightGray bg-slate-800"
			>
				{exp.company == "Amazon" ? (
					<div className="flex flex-row mb-5">
						<FontAwesomeIcon
							icon={faAmazon as IconProp}
							className="mr-5 mt-2"
							style={{ color: "white", fontSize: 34 }}
						/>
						<h1 className="font-sans md:text-3xl lg:text-4xl">
							{exp.company} - {exp.jobTitle}
						</h1>
					</div>
				) : (
					<h1 className="font-sans text-3xl md:text-4xl">
						{exp.company} - {exp.jobTitle}
					</h1>
				)}

				<h5 className="md:text-md mb-3 md:mb-2">{exp.duration}</h5>
				<ul className="">
					{exp.description.map((exp, index) => {
						return (
							<li
								key={index}
								className="text-md font-sans mb-3 md:mb-5"
							>
								- {exp}
							</li>
						);
					})}
				</ul>
			</div>
		),
	};
});
