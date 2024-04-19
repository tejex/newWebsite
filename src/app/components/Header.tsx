"use client";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export function LampDemo() {
	const breaks = Array.from({ length: 5 }, (_, index) => index);
	return (
		<div className="w-full bg-slate-950 h-full ml-auto mr-auto">
			{breaks.map((_, index) => (
				<br key={index} />
			))}
			<div className="w-full ml-auto mr-auto">
				<motion.h1
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="h-28 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-6xl sm:text-xl lg:text-8xl ml-auto mr-auto"
				>
					Bamlak Deju Abera
				</motion.h1>
				<motion.h4
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="h-28 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl ml-auto mr-auto"
				>
					I enjoy creating and building software, have a look around
					and thanks for visiting!!
				</motion.h4>
			</div>
			<motion.div
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="flex flex-row mb-40 ml-auto mr-auto"
			>
				<div className="ml-auto mr-auto flex space-x-20">
					<a href="https://www.linkedin.com/in/bamlak-deju-b1a9a8218/">
						<FontAwesomeIcon
							icon={faLinkedin as IconProp}
							style={{ color: "white", fontSize: 44 }}
						/>
					</a>
					<a href="https://docs.google.com/document/d/1Fy-kED4Elw16dspLou8ZUbCCP11WI9tBWZcFO4fKGIM/edit?usp=sharing">
						<FontAwesomeIcon
							icon={faFile as IconProp}
							style={{ color: "white", fontSize: 44 }}
						/>
					</a>
					<a href="mailto:bamlak.deju125@gmail.com">
						<FontAwesomeIcon
							icon={faPaperPlane as IconProp}
							style={{ color: "white", fontSize: 44 }}
						/>
					</a>
				</div>
			</motion.div>
		</div>
	);
}
