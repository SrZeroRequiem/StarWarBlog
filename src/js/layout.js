import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { PlanetProfile } from "./views/detailedViews/planetProfile.js";
import { CharacterProfile } from "./views/detailedViews/characterProfile.js";
import { StarshipProfile } from "./views/detailedViews/starshipProfile.js";
import injectContext from "./store/appContext";

import { NavbarResponsive } from "./component/navbarResposive";
import {Navbar} from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "StarWarBlog/";

	return (
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar/>
					<NavbarResponsive />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/planets/:theid" element={<PlanetProfile />} />
						<Route path="/charecters/:theid" element={<CharacterProfile />} />
						<Route path="/starships/:theid" element={<StarshipProfile />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
	);
};

export default injectContext(Layout);