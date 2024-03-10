import React, {useContext, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../../store/appContext.js";

export const PlanetProfile = () => {
	const params = useParams();
	const {store,actions} = useContext(Context);
	const detailsRef = useRef(undefined)
	const [details, setDetails] = useState(detailsRef.current)
	const desc = "A planet"
	useEffect(() => {
			setDetails(actions.getPlanet(params.theid));
			detailsRef.current = details
		},
		[actions, details, params.theid])
	return (
		<div className="jumbotron bg-black">
			{" "}
			<div className="container-fluid mb-5">
				<div className="row justify-content-center">
					<main className="single-card col-11 row p-0">
						<figure className="col-8 p-0 m-0 ">
							<img
								src={`https://raw.github
								usercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${(Number(params.theid)).toString()}.jpg`}
								className="img-card"
								onError={(e) => e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg"}
								alt={"Image of " + (details!==undefined?details.name:"Loading")}/>
						</figure>
						<article className="col-4 menu p-4">
							<h1 className="text-start h4 card-text-title">{(details!==undefined?details.name:"Loading")}</h1>
							<p className="text-start mt-4 card-text">
								{desc}
							</p>
						</article>
					</main>
				</div>
			</div>
			<section className="container-fluid px-5">
				<div className="d-flex justify-content-center w-100">
					{details!==undefined?<div className="row flex-row flex-nowrap w-100">
						<div className="col-2 detail-tab-item">
							<div className="h5">Appearances</div>
							{details["films"] !== undefined ? details["films"].map((film) => {
								return <p className="ms-1 mb-1"><Link
									to={"/films/" + film.split('/')[5]}>{actions.getFilm(film.split('/')[5]).title}</Link>
								</p>;
							}) : "Loading"}
						</div>
						<div className="col-2 detail-tab-item">
							<div className="h5">Residents</div>
							{details["residents"] !== undefined ? details["residents"].map((res) => {
								return <p className="ms-1 mb-1"><Link
									to={'/characters/' + res.split('/')[5]}>{actions.getCharacter(res.split('/')[5]).name}</Link>
								</p>;
							}) : "Loading"}
						</div>
						<div className="col detail-tab-item">
							<div className="h5">Population</div>
							<p className="ms-1 mb-1">{new Intl.NumberFormat().format(details["population"])}</p>
						</div>
						<div className="col detail-tab-item">
							<div className="h5">Rotation</div>
							<p className="ms-1 mb-1">{details["rotation_period"] + " Hours"}</p>
						</div>
						<div className="col detail-tab-item">
							<div className="h5">Orbit</div>
							<p className="ms-1 mb-1">{details["orbital_period"] + " Days"}</p>
						</div>
						<div className="col detail-tab-item">
							<div className="h5">Terrain</div>
							<p className="ms-1 mb-1">{actions.stringFormat(details["terrain"])}</p>
						</div>
						<div className="col">
							<div className="h5">Gravity</div>
							<p className="ms-1 mb-1">{details["gravity"]!==undefined?details["gravity"].split(" ")[0] + " G":"Loading"}</p>
						</div>
					</div>:"Loading"}
				</div>
			</section>
		</div>
	);
};

PlanetProfile.propTypes = {
	match: PropTypes.object
};