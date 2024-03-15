import React, {useContext } from "react";
import { CardPlanet } from "../component/cardPlanet.js";
import { CardProfile } from "../component/cardProfile.js";

import { Context } from "../store/appContext";
import { CardStarhip } from "../component/cardStarhip.js";
import {CardFilm} from "../component/cardFilm";
import {Link} from "react-router-dom";

export const Home = () => {
	const { store} = useContext(Context);
	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap"
	};

	return (
		<div className="container-flux p-lg-5 px-2 mt-5 bg-black">
			<div className="d-flex justify-content-between align-items-end p-0 m-0">
				<h1 className="mt-3 mb-2">Films</h1>
				<Link to="/films/1" className="me-1 navHover">
					See More
				</Link>
			</div>
			<hr className="bg-light mt-0"/>
			<section className="row h-auto scrollbar" style={over} id="starships">
				{store.films.slice(0,5).map((item, index) => {
					return (
						<CardFilm
							key={(item.pk)}
							title={item.title}
							details={item}
							index={(item.pk)}
							image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/films/${(item.pk)}.jpg`}
						/>
					);
				})}
			</section>
			<div className="d-flex justify-content-between align-items-end p-0 m-0">
				<h1 className="mt-3 mb-2">Planets</h1>
				<Link to="/planets/1" className="me-1 navHover">
					See More
				</Link>
			</div>
			<hr className="bg-light mt-0"/>

			<section className="row h-auto scrollbar" id="planets" style={over}>
				{store.planets.slice(0,5).map((item, index) => {
					return (
						<CardPlanet
							key={(item.pk)}
							title={item.name}
							details={item}
							index={(item.pk)}
							image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${(item.pk)}.jpg`}
						/>
					);
				})}
			</section>
			<div className="d-flex justify-content-between align-items-end p-0 m-0">
				<h1 className="mt-3 mb-2">Characters</h1>
				<Link to="/characters/1" className="me-1 navHover">
					See More
				</Link>
			</div>
			<hr className="bg-light mt-0"/>
			<section className="row h-auto scrollbar" style={over} id="characters">
				{store.characters.slice(0,5).map((item, index) => {
					return (
						<CardProfile
							key={(item.pk)}
							title={item.name}
							details={item}
							index={(item.pk)}
							image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${(item.pk)}.jpg`}
						/>
					);
				})}
			</section>


			<div className="d-flex justify-content-between align-items-end p-0 m-0">
				<h1 className="mt-3 mb-2">Starships</h1>
				<Link to="/starships/1" className="me-1 navHover">
					See More
				</Link>
			</div>
			<hr className="bg-light mt-0"/>
			<section className="row h-auto scrollbar" style={over} id="starships">
				{store.starships.slice(0,5).map((item, index) => {
					return (
						<CardStarhip
							key={(item.pk)}
							title={item.name}
							details={item}
							index={(item.pk)}
							image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${(item.pk)}.jpg`}
						/>
					);
				})}
			</section>
		</div>
	);
};