import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export function CardPlanet(props) {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const [iconColor, setIconColor] = useState("rgb(90,92,93)");
    const { planets } = store;
    const { index, title, details, image } = props;

    useEffect(() => {
        setIsFavorite(actions.isFavorite("planets", index));
        setIconColor(isFavorite ? "white" : "rgb(90,92,93)");
    }, [actions, index, isFavorite]);

    const handleFavoriteClick = () => {
        if (!isFavorite) {
            actions.updateNumberFavorites(1);
            actions.toggleFavorite("planets", title, index);
        } else {
            actions.updateNumberFavorites(-1);
            actions.toggleFavorite("planets", title, index);
        }
    };

    return (
        <article className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card border-0 h-100">
                <img
                    src={image}
                    className="card-img-top img-card-mini"
                    onError={(e) => (e.target.src = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/big-placeholder.jpg")}
                    alt={"Image of " + details.name}
                />
                <div className="card-body menu d-flex flex-column justify-content-between w-100 mx-0">
                    <div className="p-0 m-0 col-4 w-100">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <div className="p-0 m-0 col-4 w-100">
                        <p className="card-text">
                            {details["population"] !== undefined ? "Population: " + details["population"] : "Loading.."}
                        </p>
                    </div>
                    <div className="p-0 m-0 col-4 w-100">
                        <div className="d-flex flex-row justify-content-between align-content-center">
                            <Link to={"/planet/" + index} className="mt-1">
                                Learn more!
                            </Link>
                            <button onClick={handleFavoriteClick}>
                                <i className="fas fa-star" style={{ color: iconColor }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

CardPlanet.propTypes = {
    title: PropTypes.string,
    details: PropTypes.object,
    index: PropTypes.number,
    image: PropTypes.string,
};
