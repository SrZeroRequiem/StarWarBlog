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
import {FilmProfile} from "./views/detailedViews/filmProfile";
import {CharacterStore} from "./views/shopView/characterStore";
import {FilmStore} from "./views/shopView/filmStore";
import {StarshipStore} from "./views/shopView/starshipStore";
import {PlanetsStore} from "./views/shopView/planetStore";

const Layout = () => {
	return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar/>
					<NavbarResponsive />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/planets/:page" element={<PlanetsStore />} />
						<Route path="/planet/:theid" element={<PlanetProfile />} />
						<Route path="/characters/:page" element={<CharacterStore/>}/>
						<Route path="/character/:theid" element={<CharacterProfile />} />
						<Route path="/starships/:page" element={<StarshipStore />} />
						<Route path="/starship/:theid" element={<StarshipProfile />} />
						<Route path="/films/:page" element={<FilmStore />} />
						<Route path="/film/:theid" element={<FilmProfile />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
	);
};

export default injectContext(Layout);