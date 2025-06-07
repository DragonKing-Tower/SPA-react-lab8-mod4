import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";

function AddProjectForm({ addPig }) {
	const [newPig, setNewPig] = useState({
		name: "",
		image: "",
		description: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		addPig(newPig);
		setNewPig({
			name: "",
			image: "",
			description: "",
		});
	}

	return (
		<form className="addform" onSubmit={(e) => handleSubmit(e)}>
			<Stack spacing={1} alignItems={"center"}>
				<h2>Create your own Pig</h2>
				<TextField
					label="Enter name of Pig"
					variant="outlined"
					className="input"
					value={newPig.name}
					onChange={(e) => {
						setNewPig({ ...newPig, name: e.target.value });
					}}
					sx={{ width: { xs: "80%", sm: "60%", md: "50%" } }}
				/>
				<TextField
					label="Enter image link of Pig"
					variant="outlined"
					className="input"
					value={newPig.image}
					onChange={(e) => {
						setNewPig({ ...newPig, image: e.target.value });
					}}
					sx={{ width: { xs: "80%", sm: "60%", md: "50%" } }}
				/>
				<TextField
					label="Enter description of Pig"
					variant="outlined"
					className="input"
					value={newPig.description}
					onChange={(e) => {
						setNewPig({ ...newPig, description: e.target.value });
					}}
					sx={{ width: { xs: "80%", sm: "60%", md: "50%" } }}
				/>
				<Button variant="contained" type="submit" size="large">
					Create Pig
				</Button>
			</Stack>
		</form>
	);
}

export default AddProjectForm;
