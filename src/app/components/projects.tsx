"use client";
import { cn } from "../util";
import { AnimatePresence, motion } from "framer-motion";
import { SpotlightProjects } from "./spotlightProjects";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string;
		description: string;
		link: string;
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const moreItems = [
		{
			quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
			name: "Winston Churchill",
			title: "Former British Prime Minister",
		},
		{
			quote: "The only way to do great work is to love what you do.",
			name: "Steve Jobs",
			title: "Co-founder of Apple Inc.",
		},
		{
			quote: "Life is what happens when you're busy making other plans.",
			name: "John Lennon",
			title: "Singer-songwriter",
		},
		{
			quote: "In the end, it's not the years in your life that count. It's the life in your years.",
			name: "Abraham Lincoln",
			title: "16th President of the United States",
		},
	];

	return (
		<>
			<h1 className="ml-28 mb-20 font-bold text-transparent bg-gradient-to-r from-slate-300 to-slate-500 text-4xl bg-clip-text">
				Personal Projects
			</h1>
			<div className="h-[20rem] rounded-md flex flex-col antialiased bg-slate-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
				<SpotlightProjects
					direction="right"
					speed="slow"
					pauseOnHover={true}
					items={moreItems}
					className="bg-slate-950"
				/>
			</div>
			<div
				className={cn(
					"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 w-10/12 ml-36",
					className
				)}
			>
				{items.map((item, idx) => (
					<Link
						href={item?.link}
						key={item?.link}
						className="relative group block p-2 h-full w-full"
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className="absolute inset-0 h-full w-full bg-gray-800 dark:bg-slate-800/[0.8] block  rounded-3xl"
									layoutId="hoverBackground"
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.15 },
									}}
									exit={{
										opacity: 0,
										transition: {
											duration: 0.15,
											delay: 0.2,
										},
									}}
								/>
							)}
						</AnimatePresence>
						<Card>
							<CardTitle>{item.title}</CardTitle>
							<CardDescription>
								{item.description}
							</CardDescription>
						</Card>
					</Link>
				))}
			</div>
		</>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
				className
			)}
			style={{
				background:
					"linear-gradient(180deg, var(--slate-800), var(--slate-900)",
			}}
		>
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};
export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4
			className={cn(
				"text-zinc-100 font-bold tracking-wide mt-4",
				className
			)}
		>
			{children}
		</h4>
	);
};
export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};
