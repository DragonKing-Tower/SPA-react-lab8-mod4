import Grid from "@mui/material/Grid";
import React from "react";
import Project from "./Project";

function ProjectList({ pigs }) {
	return (
		<Grid container spacing={7} sx={{ mx: "auto" }}>
			{pigs.map((pig) => {
				return <Project key={pig.name} pig={pig} />;
			})}
		</Grid>
	);
}

export default ProjectList;
