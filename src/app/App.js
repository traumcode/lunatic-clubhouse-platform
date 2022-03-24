import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import CrewCollection from "../components/CrewCollection";
import Utility from "../components/Utility";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Like from "../components/Like";
import ScrollToTop from "../components/ScrollToTop";
import Signup from "../components/Signup";
import scrollreveal from "scrollreveal";
import "../sass/index.scss";


function App () {
	const [ theme, setTheme ] = useState("dark");
	const changeTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	useEffect(() => {
		const registerAnimations = () => {
			const sr = scrollreveal({
				origin: "bottom",
				distance: "80px",
				duration: 2000,
				reset: false,
			});
			sr.reveal(
				`nav,.home,.releases,.crew-collection,.utility,.free,.clients,.super-rare,.like,.signup,footer`,
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
		<div data-theme={theme} className="app-container">
			<ScrollToTop/>
			<Navbar changeTheme={changeTheme} currentTheme={theme}/>
			<Home/>
			<About/>
			<CrewCollection/>
			<Utility/>
			<Team/>
			<Like/>
			<Signup/>
			<Footer/>
		</div>
	);
}

export default App;
