import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import incognitoImage from "../../images/incognito.png";

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

const bestProjects = [
	{
		name: "Incognito",
		description:
			"A back-end focused web application built with Javascript, EJS, HTML and MongoDB. Allows you to submit a secret or any piece of text, anonymously.",
		technologies: "JavaScript HTML CSS EJS MongoDB Passport bcrypt",
		gitHub: "https://github.com/tejex/Anonymous-Secrets-App",
		visit: "",
		image: require("../../images/incognito.png"),
	},
	{
		name: "Spotify User Profile",
		description:
			"Sign in to your spotify account to reveal your Top Artists, Top Songs, Playlists and other data about your Spotify Profile!!",
		technologies: "Express.js React.js Styled Components Axios Spotify API",
		gitHub: "https://github.com/tejex/spotify-userprofile",
		visit: "https://spotify-userprofile.herokuapp.com",
		image: require("../../images/incognito.png"),
	},
	{
		name: "Bookie",
		description:
			"Blog website built with EJS. Create posts as well as view other people's posts. With sign-in and sign up with google, back-end built with MongoDB.",
		technologies: "JavaScript HTML CSS EJS MongoDB",
		gitHub: "https://github.com/tejex/Bookie",
		visit: "",
		image: require("../../images/incognito.png"),
	},
];

export const projects = bestProjects.map((project, idx) => {
	return {
		title: project.name,
		description:
			"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
		content: (
			<Image
				src={incognitoImage}
				alt=""
				className="w-full h-full"
			/>
		),
	};
});
