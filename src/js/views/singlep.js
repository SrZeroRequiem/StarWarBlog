import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlep = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let buttonstyles = {
		backgroundColor: "goldenrod",
		borderColor: "black",
		color: "black"
	};
	let imagearrayplanets = [
		"https://i1.wp.com/www.sopitas.com/wp-content/uploads/2013/05/Tatooine-06.jpg",
		"http://pm1.narvii.com/7085/faea62f605034f7bd132dc8a59a6b2be07bdb694r1-950-672v2_uhq.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/f/f6/Star_Wars_in_Guatemala.jpg",
		"https://blog.es.playstation.com/tachyon/sites/14/2015/11/unnamed-file-54.jpg?resize=1088,600&crop_strategy=smart",
		"https://i.pinimg.com/originals/62/c1/bd/62c1bd67d39cdcf4d507f16b35f90f4f.jpg",
		"https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg",
		"https://i.pinimg.com/originals/a4/b0/3d/a4b03dad3f1d22a1e76c742051cc17b4.jpg",
		"https://starwarsblog.starwars.com/wp-content/uploads/2015/10/Screen-Shot-2015-11-05-at-11.25.23-AM-2400x1200-315787586849.png",
		"https://www.ecured.cu/images/3/38/Coruscant_distrito_del_Senado.jpg",
		"https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780"
	];
	console.log(params);
	return (
		<div className="jumbotron">
			{" "}
			<div className="container">
				<div className="row">
					<div className="col-6 ">
						<img src={imagearrayplanets[params.theid]} className="card-img-top" height="400px" />
					</div>
					<div className="col-6">
						<h1 className="d-flex justify-content-center">{store.planets[params.theid].name}</h1>
						<p className="text-center mt-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
					</div>
				</div>
			</div>
			<hr className="my-4 bg-warning" />
			<div className="container">
				<div className="row">
					<div className="col-2 text-center">
						<h3>Name</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Climate</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Terrain</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Population</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Gravity</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Rotation</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].name}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].climate}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].terrain}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].population}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].gravity}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].rotation_period}</h5>
					</div>
				</div>
			</div>
			<div className="container">
				<Link to="/">
					<button className="btn btn-primary btn-lg mt-4 ml-4" href="#" role="button" style={buttonstyles}>
						Back home
					</button>
				</Link>
			</div>
		</div>
	);
};

Singlep.propTypes = {
	match: PropTypes.object
};