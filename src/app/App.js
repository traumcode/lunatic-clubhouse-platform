import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import CrewCollection from "../components/CrewCollection";
import Utility from "../components/Utility";
import Departments from "../components/Departments";
import OurStory from "../components/OurStory";
import RoadMap from "../components/RoadMap";
import TeamForce from "../components/TeamForce";
import Vote from "../components/Vote";
import ScrollToTop from "../components/ScrollToTop";
import scrollreveal from "scrollreveal";
import "../sass/index.scss";
import JoinUs from "../components/JoinUs";

function App () {

	useEffect(() => {
		const registerAnimations = () => {
			const sr = scrollreveal({
				origin: "bottom",
				distance: "80px",
				duration: 2000,
				reset: false,
			});
			sr.reveal(
				`nav,.home,.releases,.crew-collection,.utility,.departments,.our-story,.road-map,.team-force,.vote,.join-us`,
				{
					interval: 500,
				}
			);
		};
		registerAnimations();
	}, []);


	window.setTimeout(() => {
		const home = document.getElementsByClassName("home");
		home[0].style.transform = "none";
		const nav = document.getElementsByTagName("nav");
		nav[0].style.transform = "none";
	}, 1500);

	return (
		<div className="app-container">
			<ScrollToTop/>
			<Navbar/>
			<Home/>
			<About/>
			<CrewCollection/>
			<Utility/>
			<Departments/>
			<OurStory/>
			<RoadMap/>
			<TeamForce/>
			<Vote/>
			<JoinUs/>
		</div>
	);
}

export default App;
