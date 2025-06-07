import TextField from "@mui/material/TextField";
import React from "react";

function Search({ search, setSearch }) {
	return (
		<div>
			<TextField
				label="Search for Pigs by name"
				variant="outlined"
				fullWidth
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
		</div>
	);
}

export default Search;
