import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import incognitoImage from "../images/incognito.png";
import carRentalzImage from "../images/carRentalz.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import CustomImage from "./CustomImage";

export const SpotlightProjects = () => {
	const [activeProject, setActiveProject] = useState("Photos");
	const [imageActive, setActive] = useState(true);
	interface Project {
		id: string;
		label: string;
		content: string;
		image: any;
		techStack: string[];
		github: string;
		live: string;
	}
	let tabs: { [key: string]: Project } = {
		Photos: {
			id: "Photos",
			label: "Photos",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			image: incognitoImage,
			techStack: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Node.js",
				"Express.js",
				"MongoDB",
				"Git",
			],
			github: "string",
			live: "string",
		},
		Music: {
			id: "Music",
			label: "Music",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			image: incognitoImage,
			techStack: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Node.js",
				"Express.js",
				"MongoDB",
				"Git",
			],
			github: "string",
			live: "string",
		},
		Videos: {
			id: "Videos",
			label: "Videos",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			image: carRentalzImage,
			techStack: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Node.js",
				"Express.js",
				"MongoDB",
				"Git",
			],
			github: "string",
			live: "string",
		},
	};

	const changeProject = (newProject: string) => {
		setActiveProject(newProject);
	};

	return (
		<div className="flex w-fullflex-col text-red-200 mt-12 h-4/6">
			<div className="w-1/3 grid grid-cols-1 h-full">
				<div className="flex flex-row items-center justify-start w-full gap-x-10 h-full">
					{Object.values(tabs).map((project) => {
						return (
							<button
								key={project.id}
								onClick={() => {
									changeProject(project.id);
								}}
								className={`${
									activeProject === project.id
										? ""
										: "hover:text-white/60"
								} relative rounded-full px-3 py-1.5 text-2xl font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
								style={{
									WebkitTapHighlightColor: "transparent",
								}}
							>
								{activeProject === project.id && (
									<motion.span
										layoutId="bubble"
										className="absolute inset-0 z-10 border-2 rounded-md border-slate-300 mix-blend-difference"
										transition={{
											type: "spring",
											bounce: 0.2,
											duration: 0.6,
										}}
									/>
								)}
								{project.label}
							</button>
						);
					})}
				</div>
				<div className="mt-10 w-full border-2 rounded-lg border-slate-300 p-5 text-white transition-all">
					<h1 className="text-4xl mb-10">{activeProject}</h1>
					<p>{tabs[activeProject].content}</p>
					<ul
						className={`mt-5 grid grid-cols-${
							tabs[activeProject].techStack.length > 4 ? 2 : 1
						}`}
					>
						{tabs[activeProject].techStack.map((tech) => {
							return (
								<li key={tech}>
									{" "}
									-{">"} {tech}
								</li>
							);
						})}
					</ul>
					<div className="grid grid-cols-2 w-1/3 mt-10">
						<a href={tabs[activeProject].github}>
							<FontAwesomeIcon
								icon={faGithub as IconProp}
								className="mr-5 mt-2"
								style={{ color: "white", fontSize: 24 }}
								href={tabs[activeProject].github}
							/>
						</a>
						<a href={tabs[activeProject].live}>
							<FontAwesomeIcon
								icon={faLink as IconProp}
								className="mr-5 mt-2"
								style={{ color: "white", fontSize: 24 }}
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="ml-10 w-2/3 h-full">
				<CustomImage imageSource={tabs[activeProject].image} />
			</div>
		</div>
	);
};
