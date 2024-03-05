import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Card1 } from "../component/card1.js";
import { Card2 } from "../component/card2.js";

import { Context } from "../store/appContext";
import { Card3 } from "../componenst/card3.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap"
	};

	return (
		<div className="container-flux p-5 bg-black">
			<h1 className="mt-3 mb-2">Planets</h1>
			<hr className="bg-light mt-0" />

			<section className="row h-auto scrollbar" id="planets" style={over}>
				{store.planets.map((item, index) => {
					return (
						<Card1
							key={item.uid}
							title={item.name}
							url={item.url}
							index={item.uid}
							image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${(item.uid).toString()}.jpg`}
						/>
					);
				})}
			</section>
			<h1 className="mt-3 mb-2">Characters</h1>
			<hr className="bg-light mt-0" />
			<section className="row h-auto scrollbar" style={over} id="characters">
				{store.characters.map((item, index) => {
					return (
						<Card2
							key={item.uid}
							title={item.name}
							url={item.url}
							index={item.uid}
							image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${(item.uid).toString()}.jpg`}
						/>
					);
				})}
			</section>

			<h1 className="mt-3 mb-2">Starships</h1>
			<hr className="bg-light mt-0" />
			<section className="row h-auto scrollbar" style={over} id="starships">
				{store.starships.map((item, index) => {
					return (
						<Card3
							key={index}
							title={item.name}
							url={item.url}
							favorite={item.name}
							index={item.uid}
							image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${(item.uid).toString()}.jpg`}
						/>
					);
				})}
			</section>
		</div>
	);
};