import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ProjectList from "./components/ProjectList";
import Search from "./components/Search";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import AddProjectForm from "./components/AddProjectForm";

const pigs = [
	{
		name: "Uggo",
		image: "/images/babe.jpg",
		description: "Ugly pig, wanted to do cool stuff, but pig.",
	},
	{
		name: "Piggy",
		image: "/images/bailey.jpg",
		description: "Another Pig. What joy.",
	},
	{
		name: "Sir Pig",
		image: "/images/leggo_my_eggo.jpg",
		description: "Honestly, peak pig.",
	},
	{
		name: "Overdone Joke",
		image: "/images/cherub.jpg",
		description: "PIG: Putrescent Incorrigible Glutton.",
	},
];

function App() {
	const [currentPigs, setCurrentPigs] = useState(pigs);
	const [masterPigs, setMasterPigs] = useState(pigs);
  const [search,setSearch] = useState("")

	useEffect(() => { //keeps pig list up to date with filters+new pigs
		if (!search) {
			//check for empty or invalid inputs
			setCurrentPigs(masterPigs);
      return
		}

		const newpigs = masterPigs.filter((pig) => {
			return pig.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
		});

		setCurrentPigs(newpigs);
	},[masterPigs,search])

	function addPig(newPig) {
		setMasterPigs([...masterPigs, newPig]);
	}

	return (
		<Stack spacing={4}>
			<Header />
			<Search search={search} setSearch={setSearch} />
			<ProjectList pigs={currentPigs} />
      <AddProjectForm addPig={addPig} />
		</Stack>
	);
}

export default App;
