import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import amazonImage from "../images/Amazon.png";
import incognitoImage from "../images/incognito.png";
import carRentalzImage from "../images/carRentalz.png";

export const SpotlightProjects = () => {
	let tabs = [
		{
			id: "photos",
			label: "Photos",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			image: amazonImage,
		},
		{
			id: "music",
			label: "Music",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			image: incognitoImage,
		},
		{
			id: "videos",
			label: "Videos",
			content:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: carRentalzImage,
		},
	];

	return (
		<div className="flex w-1/3 flex-col">
			<Tabs
				aria-label="Dynamic tabs"
				items={tabs}
				className="mb-5 mt-10"
			>
				{(item) => (
					<Tab
						key={item.id}
						title={item.label}
					>
						<div className="flex space-x-40">
							<Card>
								<CardBody>{item.content}</CardBody>
							</Card>
							<Image
								alt=""
								src={item.image}
								width={50}
								height={50}
							/>
						</div>
					</Tab>
				)}
			</Tabs>
		</div>
	);
};
