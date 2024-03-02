import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";
import { NoEmitOnErrorsPlugin } from "webpack";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	let iconstyle = {
		color: "white",
		height: "100px"
	};

	let buttonstyle = {
		backgroundColor: "white",
		color: "black",
	};

	let favoritestyle = {
		backgroundColor: "white",
		marginLeft: "5px",
		marginRight: "5px",
		borderRadius: "25%"
	};

	let navstyle = {
		backgroundColor: "black"
	};

	let marginstyles = {
		marginLeft: "90px",
		marginTop: "10px"
	};

	return (
		<div className="container-fluid p-3" style={navstyle}>
			<div className="row justify-content-between flex-row">
				<div className="col-4">
					<a href=" https://www.facebook.com/starwarsla">
						<i className="fab fa-facebook fa-lg px-2 " style={iconstyle} />
					</a>
					<a href="https://www.instagram.com/starwars/?hl=es-la">
						<i className="fab fa-instagram fa-lg px-2" style={iconstyle} />
					</a>
					<a href="https://www.tumblr.com/tagged/star+wars?sort=top">
						<i className="fab fa-tumblr fa-lg px-2" style={iconstyle} />
					</a>
					<a href="https://twitter.com/starwars?lang=es">
						<i className="fab fa-twitter fa-lg px-2" style={iconstyle} />
					</a>
					<a href="https://www.youtube.com/user/starwars">
						<i className="fab fa-youtube fa-lg px-2" style={iconstyle} />
					</a>
				</div>
				<div className="col-5">
					<Link to="/">
						<img
							className="ms-5"
							src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32"
							style={marginstyles}
						/>
					</Link>
				</div>
				<div className="col-3 d-flex justify-content-end">
							<Dropdown>
								<Dropdown.Toggle id="dropdown-basic" style={buttonstyle}>
									Favorites
									<span style={favoritestyle}> {store.numberfavorites} </span>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<p className="text-center bg-warning">Planets</p>
									{store.favoritesplanets.map((item, index) => {
										return (
											<Link to={"/singlep/" + store.planetsindex[index]} key={index}>
												<Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
											</Link>
										);
									})}
									<hr className="my-4 bg-warning" />
									<p className="text-center bg-warning">Characters</p>
									{store.favoritescharacters.map((item, index) => {
										return (
											<Link to={"/singlec/" + store.characterindex[index]} key={index}>
												<Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
											</Link>
										);
									})}
								</Dropdown.Menu>
							</Dropdown>
				</div>
			</div>
		</div>
	);
};