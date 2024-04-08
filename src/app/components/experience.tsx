"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { cn } from "../util";
import { Tab } from "@mui/material";

type Tab = {
	title: string;
	value: string;
	content?: string | React.ReactNode | any;
};

export const ExperienceButtons = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};

	return (
		<div className="ml-28 relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full h-full w-full">
			<h1 className="mb-20 font-bold  from-slate-300 to-slate-500 text-4xl">
				Professional Experience
			</h1>
			<div className="flex flex-row gap-x-52 w-full h-96">
				<div className="flex flex-col w-1/6 h-72">
					{propTabs.map((experience, idx) => {
						return (
							<div
								key={idx}
								className="flex flex-row space-x-3"
							>
								<Button
									onClick={() => {
										moveSelectedTabToTop(idx);
									}}
									key={idx}
									sx={{
										marginBottom: "15px",
										textTransform: "none",
									}}
									style={{
										transformStyle: "preserve-3d",
									}}
									className="md:text-2xl w-auto text-white"
								>
									<div className="flex flex-row">
										{active.value === experience.value && (
											<motion.div
												layoutId="clickedbutton"
												transition={{
													type: "spring",
													bounce: 0.3,
													duration: 0.6,
												}}
												className={cn(
													"absolute border-4 border-teal-400 mt-5 rounded-full w-2",
													activeTabClassName
												)}
											/>
										)}
										<h4
											key={idx + 1}
											className="ml-4 border-cyan-100 border-2 p-2 rounded-md"
										>
											{experience.title}
										</h4>
									</div>
								</Button>
							</div>
						);
					})}
				</div>
				<div className="w-full h-full">
					<FadeInDiv
						key={active.value}
						active={active}
						tabs={tabs}
						className={cn("w-3/4", contentClassName)}
					/>
				</div>
			</div>
		</div>
	);
};

export const FadeInDiv = ({
	className,
	tabs,
}: {
	className?: string;
	key?: string;
	tabs: Tab[];
	active: Tab;
}) => {
	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
	return (
		<div className="relative w-full h-96">
			{tabs.map((tab, idx) => (
				<motion.div
					key={tab.value}
					layoutId={tab.value}
					style={{
						scale: 1 - idx * 0.1,
						zIndex: -idx,
						opacity: idx < 3 ? 1 - idx * 0.1 : 0,
					}}
					animate={{
						y: isActive(tab) ? [0, 40, 0] : 0,
					}}
					className={cn("h-96 absolute top-0 left-0", className)}
				>
					{tab.content}
				</motion.div>
			))}
		</div>
	);
};
