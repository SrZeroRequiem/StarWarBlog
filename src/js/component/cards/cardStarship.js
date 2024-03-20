import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export function CardStarship(props) {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const [iconColor, setIconColor] = useState("white");
    const { starships } = store;
    const { index, title, details, image } = props;

    useEffect(() => {
        setIsFavorite(actions.isFavorite("starships", index));
        setIconColor(isFavorite ? "white" : "rgb(90,92,93)");
    }, [actions, index, isFavorite]);

    const handleFavoriteClick = () => {
        if (!isFavorite) {
            actions.updateNumberFavorites(1);
            actions.toggleFavorite("starships", title, index);
        } else {
            actions.updateNumberFavorites(-1);
            actions.toggleFavorite("starships", title, index);
        }
    };

    let color = {
        color: `${iconColor}`
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card border-0 h-100">
                <img
                    src={image}
                    className="img-card-mini"
                    onError={(e) => (e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg")}
                    alt={"Image of " + details.name}
                />
                <div className="card-body menu d-flex flex-column justify-content-between w-100 mx-0">
                    <div className="p-0 m-0 col-4 w-100">
                        <h5 className="card-title" style={{ aspectRatio: 447.33 / 24 }}>{details.name}</h5>
                    </div>
                    <div className="p-0 m-0 col-4 w-100">
                        {details["cost_in_credits"] !== undefined ? (
                            <div>
                                <p className="card-text mb-1"> {"Price: " + actions.stringFormat("" + details["cost_in_credits"])}</p>
                            </div>
                        ) : (
                            <p className="card-text">Loading..</p>
                        )}
                    </div>
                    <div className="p-0 m-0 col-4 w-100">
                        <div className="d-flex flex-row justify-content-between align-content-center ">
                            <Link to={"/starship/" + index} className="mt-1">
                                Learn more!
                            </Link>
                            <button onClick={handleFavoriteClick}>
                                <i className="fas fa-star" style={color} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CardStarship.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    cost: PropTypes.string,
    index: PropTypes.number
};
