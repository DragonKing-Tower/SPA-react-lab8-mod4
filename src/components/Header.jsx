import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Header() {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<h2>Cyrils Marvellous Container of Random Objects</h2>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
