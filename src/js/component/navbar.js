import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const { store, actions } = useContext(Context);


	let navstyle = {
		backgroundColor: "black"
	};


	return (
		<header className="container-fluid p-3 border-bottom border-light pb-0 navShow" style={navstyle}>

			<div className="row justify-content-between flex-row px-5">
				<div className="col-4 p-0">

					<a href=" https://www.facebook.com/starwarsla">
						<i className="fab fa-facebook fa-lg px-2" />
					</a>
					<a href="https://www.instagram.com/starwars/?hl=es-la">
						<i className="fab fa-instagram fa-lg px-2" />
					</a>
					<a href="https://www.tumblr.com/tagged/star+wars?sort=top">
						<i className="fab fa-tumblr fa-lg px-2" />
					</a>
					<a href="https://twitter.com/starwars?lang=es">
						<i className="fab fa-twitter fa-lg px-2" />
					</a>
					<a href="https://www.youtube.com/user/starwars">
						<i className="fab fa-youtube fa-lg px-2" />
					</a>
				</div>
				<div className="col-5 d-flex justify-content-center">
					<Link to="/">
						<img
							src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
							height="80px"
						/>
					</Link>
				</div>
				<div className="col-3 d-flex justify-content-end p-0">
					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic" className="">
							<i className="fas fa-heart"></i>
							<span> {store.numberFavorites} </span>
						</Dropdown.Toggle>

						<Dropdown.Menu className="menu">
							<p className="text-center mb-1">Planets</p>
							<hr className="bg-light mt-0" />
							{store.favoritesPlanets.map((item, index) => {
								return (
									<Link to={"/singlep/" + store.favoritesPlanets[index].index} key={index}>
										<Dropdown.Item href="" className="d-flex justify-content-between ">
											<p className="m-0">{item.title}</p>
											<i className="fas fa-circle-minus delete-button d-flex align-items-center" onClick={(e) => {
												actions.lessFavorites();
												actions.removelistFavoritesPlanets(item.index);
											}} />
										</Dropdown.Item>
									</Link>
								);
							})}
							<p className="text-center mb-1">Characters</p>
							<hr className="bg-light mt-2" />
							{store.favoritesCharacters.map((item, index) => {
								return (
									<Link to={"/singlec/" + store.favoritesCharacters[index].index} key={index}>
										<Dropdown.Item href="#" className="d-flex justify-content-between ">
											<p className="m-0">{item.title}</p>
											<i className="fas fa-circle-minus delete-button d-flex align-items-center" onClick={(e) => {
												actions.lessFavorites();
												actions.removelistFavoritesCharacters(item.index);
											}} />
										</Dropdown.Item>
									</Link>
								);
							})}
							<p className="text-center mb-1">Starships</p>
							<hr className="bg-light mt-2" />
							{store.favoritesStarships.map((item, index) => {
								return (
									<Link to={"/singlec/" + store.favoritesStarships[index].index} key={index}>
										<Dropdown.Item href="#" className="d-flex justify-content-between ">
											<p className="m-0">{item.title}</p>
											<i className="fas fa-circle-minus delete-button d-flex align-items-center" onClick={(e) => {
												actions.lessFavorites();
												actions.removelistFavoritesStarships(item.index);
											}} />
										</Dropdown.Item>
									</Link>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
			<nav>
				<div className="row justify-content-start flex-row px-5">
					<div className="col p-0">

						<a href="./#planets" className="me-1 navHover">
							<i class="fa-solid fa-earth-oceania"> Planets</i>
						</a>
						<a href="./#characters" className="me-1 navHover">
							<i class="fa-solid fa-user"> Characters</i>
						</a>
						<a href="./#starships" className="me-1 navHover">
							<i class="fa-solid fa-rocket"> Starships</i>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};