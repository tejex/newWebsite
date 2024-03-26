import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export const IntroCard = () => {
	return (
		<>
			<h1 className="ml-28 mb-20 font-bold text-4xl">About Me</h1>
			<Box
				sx={{
					"& > :not(style)": {
						m: 1,
						width: 1128,
						height: 228,
						marginLeft: 25,
						marginBottom: 20,
					},
				}}
			>
				<Paper
					square={false}
					variant="elevation"
					elevation={3}
				>
					<h3>Hello Moda Soca</h3>
					<h3>Hello Moda Soca</h3>
					<h3>Hello Moda Soca</h3>
				</Paper>
			</Box>
		</>
	);
};
