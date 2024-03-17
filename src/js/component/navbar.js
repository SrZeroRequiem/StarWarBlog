import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);


	let navStyle = {
		backgroundColor: "black"
	};


	return (
		<header className="container-fluid p-3 border-bottom border-light pb-0 navShow" style={navStyle}>

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
				<div className="col-4 d-flex justify-content-center">
					<Link to="/">
						<img
							src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
							height="80px"
							alt="Brand"
						/>
					</Link>
				</div>
				<div className="col-4 d-flex justify-content-end p-0">
					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic" className="">
							<i className="fas fa-heart"></i>
							<span> {store.numberFavorites} </span>
						</Dropdown.Toggle>

						<Dropdown.Menu className="menu">
							<p className="text-center mb-1">Films</p>
							<hr className="bg-light mt-0" />
							{store["favoritesFilms"].map((item, index) => {
								return (
									<Link to={"/film/" + store.favoritesFilms[index].index} key={index} className="mb-1">
										<Dropdown.Item className="d-flex justify-content-between ">
											<p className="m-0">{item.title}</p>
											<i className="fas fa-circle-minus delete-button d-flex align-items-center" onClick={() => {
												actions.lessFavorites();
												actions.removelistFavoritesFilms(item.index);
											}} />
										</Dropdown.Item>
									</Link>
								);
							})}
							<p className="text-center mb-1 mt-2">Planets</p>
							<hr className="bg-light mt-0" />
							{store["favoritesPlanets"].map((item, index) => {
								return (
									<Link to={"/planet/" + store.favoritesPlanets[index].index} key={index} className="mb-1">
										<Dropdown.Item className="d-flex justify-content-between ">
											<p className="m-0">{item.title}</p>
											<i className="fas fa-circle-minus delete-button d-flex align-items-center" onClick={() => {
												actions.lessFavorites();
												actions.removelistFavoritesPlanets(item.index);
											}} />
										</Dropdown.Item>
									</Link>
								);
							})}
							<p className="text-center mb-1 mt-2">Characters</p>
							<hr className="bg-light mt-2" />
							{store["favoritesCharacters"].map((item, index) => {
								return (
									<Link to={"/character/" + store.favoritesCharacters[index].index} key={index} className="mb-1">
										<Dropdown.Item className="d-flex justify-content-between ">
											<p className="m-0">{item.title}</p>
											<i className="fas fa-circle-minus delete-button d-flex align-items-center" onClick={() => {
												actions.lessFavorites();
												actions.removelistFavoritesCharacters(item.index);
											}} />
										</Dropdown.Item>
									</Link>
								);
							})}
							<p className="text-center mb-1 mt-2">Starships</p>
							<hr className="bg-light mt-2" />
							{store["favoritesStarships"].map((item, index) => {
								return (
									<Link to={"/starship/" + store.favoritesStarships[index].index} key={index} className="mb-1">
										<Dropdown.Item className="d-flex justify-content-between ">
											<p className="m-0">{item.title}</p>
											<i className="fas fa-circle-minus delete-button d-flex align-items-center" onClick={() => {
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
						<Link to="/films/1" className="me-1 navHover">
							<i className="fa-solid fa-film"> Films</i>
						</Link>
						<Link to="/planets/1" className="me-1 navHover">
							<i className="fa-solid fa-earth-oceania"> Planets</i>
						</Link>
						<Link to="/characters/1" className="me-1 navHover">
							<i className="fa-solid fa-user"> Characters</i>
						</Link>
						<Link to="/starships/1" className="me-1 navHover">
							<i className="fa-solid fa-rocket"> Starships</i>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};