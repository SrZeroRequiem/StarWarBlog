import React, {useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Card2(props) {
	const [iconColor, setIconColor] = useState("rgb(90,92,93)");
	const { actions } = useContext(Context);
	const [isFavorite, setFavorite] = useState(false)
	const index = props.index;
	const details= props.details
	useEffect(() => {
		setFavorite(actions.isFavoriteC(index))
		if (isFavorite === true) {
			setIconColor("white");
		} else {
			setIconColor("rgb(90,92,93)");
		}
	}, [actions, index, isFavorite])
	let color = {
		color: `${iconColor}`
	}

	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3">
			<div className="card border-0">
				<img src={props.image} className="img-card-mini"  alt={"Image of "+props.title}/>
				<div className="card-body menu">
					<h5 className="card-title">{props.title}</h5>
					{details.gender !== undefined ? <div><p className="card-text mb-1"> {"Gender: " + actions.stringFormat("" + details.gender)}</p>
						<p className="card-text mb-1"> {"Eyes color: " + actions.stringFormat("" + details["eye_color"])}</p>
						<p className="card-text"> {"Hair color: " + actions.stringFormat("" + details["hair_color"])}</p></div> : <p className="card-text">Loading...</p>}
					<div className="d-flex flex-row justify-content-between align-content-center">
						<Link to={"/characters/" + (props.index)} className="mt-1">
							Learn more!
						</Link>
						<button>
							<i
								className="fas fa-star" style={color}
								onClick={() => {
									if (!isFavorite) {
										actions.sumFavorites();
										actions.setlistFavoritesCharacters(props.title, index);
										setFavorite(actions.isFavoriteC(index))
									} else {
										actions.lessFavorites();
										actions.removelistFavoritesCharacters(index);
										setFavorite(actions.isFavoriteC(index))
									}
								}}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Card2.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	gender: PropTypes.string,
	eye: PropTypes.string,
	hair: PropTypes.string,
	favorite: PropTypes.string,
	index: PropTypes.number
};