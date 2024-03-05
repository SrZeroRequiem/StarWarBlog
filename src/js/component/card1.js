import React, {useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Card1(props) {
	const [iconColor, setIconColor] = useState("rgb(90,92,93)");
	const {actions } = useContext(Context);
	const [isFavorite, setFavorite] = useState(false)
	const index = props.index;
	const [details, setDetails] = useState({})
	function getDetails(url) {
		return fetch(url)
			.then(res2 => res2.json())
	}
	useEffect(() => {
		async function fetchingD() {
			const result = await getDetails(props.url)
			setDetails(result.result.properties)
		}
		fetchingD().then()
	}, [])
	useEffect(() => {
		setFavorite(actions.isFavoriteP(index))
		if (isFavorite === true) {
			setIconColor("white");
		} else {
			setIconColor("rgb(90,92,93)");
		}
	}, [actions, index, isFavorite])
	let icolor = {
		color: { iconcolor: iconColor }.iconcolor
	}



	return (
		<article className="col-3 ">
			<div className="card border-0">
				<img src={props.image} className="card-img-top img-card-mini" onError={(e) => e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg"} />
				<div className="card-body menu">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text"> {details.population !== undefined ? "Population: " + details.population : "Laoding.."}</p>
					<div className="d-flex flex-row justify-content-between align-content-center">
						<Link to={"/singlep/" + (props.index)} className="mt-1">
							Learn more!
						</Link>
						<button>
							<i
								className="fas fa-star" style={icolor}
								onClick={() => {
									if (!isFavorite) {
										actions.sumFavorites();
										actions.setlistFavoritesPlanets(props.title, index);
										setFavorite(actions.isFavoriteP(index))
									} else {
										actions.lessFavorites();
										actions.removelistFavoritesPlanets(index);
										setFavorite(actions.isFavoriteP(index))
									}
								}}
							/>
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}

Card1.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
	index: PropTypes.string,
	image: PropTypes.string
};