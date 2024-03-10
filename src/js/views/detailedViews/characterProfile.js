import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import {useParams} from "react-router-dom";

export const CharacterProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [details, setDetails] = useState({})
	const [desc, setDesc] = useState("Loading...")
	function getDetails(url) {
		return fetch(url)
			.then(res => res.json())
	}
	useEffect(() => {
		async function fetchingD() {
			const result = await getDetails(`https://www.swapi.tech/api/people/${params.theid}`)
			await setDesc(result.result.description)
			await setDetails(result.result.properties)
		}
		fetchingD()
	}, [])
	function getHomeworld(){
		let url = details.homeworld
		const index = store.planets.findIndex(obj => obj.url === url)
		return store.planets[index].name !== undefined?store.planets[index].name:"Loading..."
	}
	return (
		<div className="jumbotron bg-black ">
			{" "}
			<div className="container-fluid mb-5">
				<div className="row justify-content-center">
					<main className="single-card col-11 row p-0">
						<figure className="col-8 p-0 m-0 ">
							<img
								src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${(params.theid).toString()}.jpg`}
								className="img-card"
								onError={(e) => e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg"}/>
						</figure>
						<article className="col-4 menu p-4">
							<h1 className="text-start h4 card-text-title">{details.name}</h1>
							<p className="text-start mt-4 card-text">
								{desc}
							</p>
						</article>
					</main>
				</div>
			</div>
			<section className="container">
				<div className="d-flex justify-content-center">
					<div className="row flex-row flex-nowrap">
						<div className="col detail-tab-item">
							<div className="h5">Homeworld</div>
							<p className="ms-1">{getHomeworld() !== undefined ? getHomeworld() : "Loading..."}</p>
						</div>
						<div className="col detail-tab-item">
							<div className="heading">Affiliations</div>
							<ul>
								<li className="data"><a className="section-color"
														href="https://www.starwars.com/databank/galactic-republic">
									<div className="property-name">Galactic Republic</div>
								</a></li>
								<li className="data"><a className="section-color"
														href="https://www.starwars.com/databank/clone-force-99-bad-batch">
									<div className="property-name">Clone Force 99 "The Bad Batch"</div>
								</a></li>
							</ul>
						</div>
						<div className="col detail-tab-item">
							<div className="heading">Locations</div>
							<ul>
								<li className="data"><a className="section-color"
														href="https://www.starwars.com/databank/kamino">
									<div className="property-name">Kamino</div>
								</a></li>
								<li className="data">
									<div className="property-name">Anaxes</div>
								</li>
							</ul>
						</div>
						<div className="col detail-tab-item">
							<div className="heading">Gender</div>
							<ul>
								<li className="data">
									<div className="property-name">Male</div>
								</li>
							</ul>
						</div>
						<div className="col detail-tab-item">
							<div className="heading">Dimensions</div>
							<ul>
								<li className="data">
									<div className="property-name">Height: 1.8m</div>
								</li>
							</ul>
						</div>
						<div className="col detail-tab-item">
							<div className="heading">Vehicles</div>
							<ul>
								<li className="data"><a className="section-color"
														href="https://www.starwars.com/databank/marauder">
									<div className="property-name">Marauder</div>
								</a></li>
							</ul>
						</div>
						<div className="col">
							<div className="heading">Weapons</div>
							<ul>
								<li className="data"><a className="section-color"
														href="https://www.starwars.com/databank/dc-17-blaster">
									<div className="property-name">DC-17 blaster</div>
								</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

CharacterProfile.propTypes = {
	match: PropTypes.object
};