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
			<motion.h1
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="h-28 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-7xl"
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
				I enjoy creating and building software, have a look around and
				thanks for visiting!!
			</motion.h4>
			<motion.div
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="flex flex-row gap-5 mb-40 w-full"
			>
				<div className="ml-auto mr-auto">
					<FontAwesomeIcon
						icon={faLinkedin as IconProp}
						className="mr-20"
						style={{ color: "white", fontSize: 44 }}
					/>
					<FontAwesomeIcon
						icon={faFile as IconProp}
						className="mr-20"
						style={{ color: "white", fontSize: 44 }}
					/>
					<FontAwesomeIcon
						icon={faPaperPlane as IconProp}
						style={{ color: "white", fontSize: 44 }}
					/>
				</div>
			</motion.div>
		</div>
	);
}
