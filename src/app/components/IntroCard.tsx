import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export const IntroCard = () => {
	const technologies = [
		"Python",
		"Typescript",
		"Javascript",
		"React.js",
		"HTML",
		"CSS",
		"Flutter",
		"Swift",
		"C++",
		"Java",
	];
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
	return (
		<div className="w-full">
			<h1 className="ml-28 mb-20 font-bold text-white text-4xl">
				About Me
			</h1>
			<Box
				sx={{
					"& > :not(style)": {
						m: 1,
						width: 828,
						height: 400,
						marginLeft: 25,
						marginBottom: 20,
					},
				}}
			>
				<Paper
					square={false}
					variant="elevation"
					elevation={24}
					className="bg-slate-950 text-white custom-shadow p-10"
				>
					<p className="lead">
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
			</Box>
		</div>
	);
};
