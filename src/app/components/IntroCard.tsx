"use client";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./MyCard";
import { useState, useEffect } from "react";

export const IntroCard = () => {
	const [isVisible, setIsVisible] = useState(false);
	const technologies = [
		"Python",
		"Typescript",
		"Javascript",
		"React.js",
		"Next.js",
		"HTML",
		"CSS",
		"Flutter",
		"Swift",
		"C++",
		"Java",
	];
	useEffect(() => {
		// Set isVisible to true after the component mounts to trigger the fade-in effect
		setTimeout(() => {
			setIsVisible(true);
		}, 100);
	}, []);

	const tech = (
		<div className={"mb-10 hidden md:block technologies"}>
			<ul className="w-80 grid grid-cols-2 md:grid grid-rows-4 grid-flow-col">
				{technologies.map((tech, index) => {
					return (
						<li
							key={index}
							className="text-md"
						>
							<div className="flex flex-row">
								{"->"} {tech}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
	const imageSource = require("../images/profilePic2.png");

	return (
		<div
			className={`w-full mb-36 ${
				isVisible
					? "opacity-100 transition-opacity duration-1000"
					: "opacity-0"
			}`}
		>
			<h1 className="ml-28 mb-20 font-bold text-transparent bg-gradient-to-r from-slate-300 to-slate-500 text-4xl bg-clip-text">
				About Me
			</h1>

			<div className="flex flex-row w-full md:gap-48 ml-24">
				<Paper
					square={false}
					variant="elevation"
					elevation={24}
					className="bg-slate-950 text-white custom-shadow p-10 w-1/2 h-3/6"
				>
					<p className="lead text-md">
						I'm a passionate full stack developer with a keen
						interest in both front and back-end development and have
						worked with technologies like React, Next.js and
						MongoDB.
					</p>
					<br />
					<p className="lead">
						I have also recently developed great interest for
						Computer Vision 👀 and have worked with popular
						libraries like OpenCV, Yolov8 and MediaPipe to bring
						some of my project ideas to life : )
					</p>
					<br />
					<p className="lead">
						I'm currently a senior majoring in computer science at
						<a
							href="https://www.depauw.edu/"
							className="text-neon"
						>
							{" "}
							Depauw University
						</a>
						.
					</p>
					<p className="lead mb-10">
						Here are some technologies i've worked with:
					</p>
					{tech}
				</Paper>
				<CardContainer>
					<CardBody className="relative group/card bg-gradient-to-br from-slate-800 to-slate-900 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex flex-col">
						<CardItem
							translateZ={100}
							as="button"
							className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
						>
							<Image
								src={imageSource}
								height="1000"
								width="1000"
								className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
								alt="thumbnail"
							/>
						</CardItem>
						<CardItem
							translateZ={100}
							as="button"
							className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mt-10"
						>
							Bamlak Deju Abera
						</CardItem>
					</CardBody>
				</CardContainer>
			</div>
		</div>
	);
};
