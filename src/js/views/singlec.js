import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlec = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let buttonstyles = {
		backgroundColor: "goldenrod",
		borderColor: "black",
		color: "black"
	};

	let imagearraycharacters = [
		"https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=1600,q=80,fit=contain/featured_image/2018/09/24/1537835785388/luke-skywalker.jpg",
		"https://i1.wp.com/wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po.jpg?fit=1000%2C600&ssl=1",
		"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/03/15885120366138.jpg",
		"https://i2.wp.com/wipy.tv/wp-content/uploads/2020/06/darth-vader-es-el-sith-mas-poderoso.jpg?fit=1000%2C600&ssl=1",
		"https://lafuerzanoticias.files.wordpress.com/2018/07/leia-organa-1-tall.jpg?w=1536&h=768&crop=1",
		"https://cdn.lanetaneta.com/wp-content/uploads/2020/07/Star-Wars-Por-que-Owen-Lars-no-reconocio-a-C-3PO-780x470.jpg",
		"https://lumiere-a.akamaihd.net/v1/images/databank_shmiskywalkerlars_01_169_7449f0a8.jpeg?region=341%2C0%2C878%2C878",
		"https://cdnb.artstation.com/p/assets/images/images/001/727/465/large/paul-beards-r5-d4-final-preview-01.jpg?1451853235",
		"https://pbs.twimg.com/media/EouvaiYVoAAmmQ0.jpg",
		"https://i.blogs.es/cd0fbf/ewan/1366_2000.jpeg"
	];
	return (
		<div className="jumbotron">
			{" "}
			<div className="container">
				<div className="row">
					<div className="col-6 ">
						<img src={imagearraycharacters[params.theid]} className="card-img-top" height="400px" />
					</div>
					<div className="col-6">
						<h1 className="d-flex justify-content-center">{store.characters[params.theid].name}</h1>
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
						<h3>Height</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Hair Color</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Skin Color</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Birth Year</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Gender</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.characters[params.theid].name}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.characters[params.theid].height}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.characters[params.theid].hair_color}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.characters[params.theid].skin_color}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.characters[params.theid].birth_year}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.characters[params.theid].gender}</h5>
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

Singlec.propTypes = {
	match: PropTypes.object
};