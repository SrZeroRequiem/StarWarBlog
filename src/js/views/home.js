import React, { useState, useEffect, useContext } from "react";
import { Card1 } from "../component/card1.js";
import { Card2 } from "../component/card2.js";

import { Context } from "../store/appContext";
import { Card3 } from "../component/card3.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap"
	};

	return (
		<div className="container-flux p-5 bg-black">
			<div className="d-flex justify-content-between align-items-end p-0 m-0">
				<h1 className="mt-3 mb-2">Planets</h1>
				<a href="./#planets" className="me-1 navHover">
					See More
				</a>
			</div>
			<hr className="bg-light mt-0"/>

			<section className="row h-auto scrollbar" id="planets" style={over}>
				{store.planets.map((item, index) => {
					return (
						<Card1
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
				<a href="./#planets" className="me-1 navHover">
					See More
				</a>
			</div>
			<hr className="bg-light mt-0"/>
			<section className="row h-auto scrollbar" style={over} id="characters">
				{store.characters.map((item, index) => {
					return (
						<Card2
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
				<a href="./#planets" className="me-1 navHover">
					See More
				</a>
			</div>
			<hr className="bg-light mt-0"/>
			<section className="row h-auto scrollbar" style={over} id="starships">
				{store.starships.map((item, index) => {
					return (
						<Card3
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