import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

function Project({ pig }) {
	return (
		<Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
			<Card
				sx={{
					backgroundColor: "orange",
					flexGrow: 1,
					width: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<CardHeader title={pig.name} />
				<CardMedia
					component="img"
					image={pig.image}
					alt={`${pig.name} image`}
					sx={{
						height: 200,
						width: "100%",
						objectFit: "cover",
					}}
				/>
				<CardContent sx={{ backgroundColor: "lightgoldenrodyellow" }}>
					<Typography variant="body1" sx={{ color: "red" }}>
						{pig.description}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default Project;
