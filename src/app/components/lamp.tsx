"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../util";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export function LampDemo() {
	return (
		<LampContainer>
			<motion.h1
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="mt-20 h-28 mb-20 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-7xl"
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
				className="h-28 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl"
			>
				I enjoy creating and building software, have a look around and
				thanks for visiting!!
			</motion.h4>
		</LampContainer>
	);
}

export const LampContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
				className
			)}
		>
			<div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
				<motion.div
					initial={{ opacity: 0.5, width: "65%" }}
					whileInView={{ opacity: 1, width: "90%" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto right-1/2 h-40 mb-20 overflow-visible w-[30rem] bg-gradient-conic from-cyan-900 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
				>
					<div className="absolute  w-[100%] left-0 bg-slate-950 h-10 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
					<div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0.5, width: "65%" }}
					whileInView={{ opacity: 1, width: "90%" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto left-1/2 h-40 mb-20 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-900 text-white [--conic-position:from_290deg_at_center_top]"
				>
					<div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
					<div className="absolute  w-[100%] right-0 bg-slate-950 h-10 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
				</motion.div>

				<motion.div
					initial={{ width: "8rem" }}
					whileInView={{ width: "16rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-700 blur-2xl"
				></motion.div>
				<motion.div
					initial={{ opacity: 0.5, width: "65%" }}
					whileInView={{ opacity: 1, width: "90%" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="absolute inset-auto z-50 h-1 w-[30rem] -translate-y-[7rem] bg-cyan-300"
				></motion.div>

				<div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
			</div>

			<div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
				{children}
			</div>
		</div>
	);
};
